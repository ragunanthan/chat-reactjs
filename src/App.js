import React,{useState, useEffect} from 'react';
import './App.css';
import { Spinner,InputGroup ,FormControl, Button} from 'react-bootstrap';


import { db, auth , provider } from "./firebase";
 import Signup from "./component/Signup";
 import Userinfo from "./component/Userinfo";
 import Header from "./component/Header";
 import Chat from "./component/Chat.js";
 import Member from './component/Member';
import Viewmodal from "./component/Modal.js"


function App() {
  const [newsignup, setnewsignup] = useState(false);
  const [userdata, setuserdata] = useState("");
  const [spinning, setspinning] = useState(false);
  const [data, setdata] = useState("");
  const [members, setmembers]= useState("");
  const [inputmsg, setinputmsg] = useState("");
  // modal
  const [modalShow, setModalShow] = React.useState(false);

  
  function signup  () {
    auth.signInWithPopup(provider)
    .then((result) => {
      setnewsignup(true);
      console.log(result.user)
      setuserdata({uid: result.user.uid, name: result.user.displayName, image: result.user.photoURL, email: result.user.email})
       db.ref().child("chat").push().set({
      name: result.user.displayName,
      msg : result.user.displayName + " Loged in",
      type: "status"
    });
// updating user online or ofline
      db.ref("members/"+result.user.uid).update({ name: result.user.displayName,
        image : result.user.photoURL,
        email: result.user.email,
        online: true});

      db.ref().child("members").on("value", (e) => setmembers( e.val()));
  }).catch((error) => {
    console.log(error)});
  };

  function signout () {
    // updating user online or ofline
    db.ref("members/"+auth.currentUser.uid).update({ name: auth.currentUser.displayName,
      image : auth.currentUser.photoURL,
      email: auth.currentUser.email,
      online: false});

    db.ref().child("members").on("value", (e) => setmembers( e.val()));
   //signout 
    auth.signOut().then(() => { setuserdata(""); setnewsignup(false); }).catch((error) => console.log(error));
    db.ref()
    .child("chat").push().set({
      name: userdata.name,
      msg : userdata.name + " Loged out",
      type: "status"
    });  
  };

  // on click enter message sent to database
  const sentmessage = ()=> {
    
    if(userdata === ""){
      alert("Please signin!")

    }
    else if(inputmsg === ""){
      alert("Input is empty")
    }
    else{

      db.ref()
      .child("chat").push().set({
        name: userdata.name, 
        msg : inputmsg,
        type: "msg",

      });
      setinputmsg("")
    }
  };

  useEffect(() => {
    
    setspinning(true)
    db.ref().child("chat").on("value", (e) => setdata( e.val()));
    db.ref().child("members").on("value", (e) => setmembers( e.val()));
    auth.onAuthStateChanged((user)=> {
      if (user) {
        setspinning(false)
        setnewsignup(true);
        setuserdata({uid: user.uid, name: user.displayName, image: user.photoURL, email: user.email})

        db.ref().child("chat").on("value", (e) => setdata( e.val()))
      } else {
        setspinning(false)
      }
    });
 
  }, []);

  useEffect(() => {
    document.getElementById('data').scrollTop = document.getElementById('data').scrollHeight;
  })
  return (
    <div className="App">
      <div className="user-info">
        <div  className="user">
        {spinning  ?<Spinner animation="border" />: <>{newsignup ? <Userinfo user={userdata}/> :<Signup signup={signup} />}</>}        
        </div>
        <div  className="info">
        <div className="lap-info">
        <div className="active-users"><p>Active users</p></div>
        <div className="member-scroll">
        {Object.entries(members).map(([key, value], i) => <Member value={value} key={key}/>) }
        </div>
        </div>
          <div className="mobile-info">
            
            <div  onClick={() => setModalShow(true)} >
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            </div>
            <Viewmodal   show={modalShow}
        onHide={() => setModalShow(false)} signup={signup} newsignup={newsignup} signout={signout} members={members} />
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header">
          <Header signout={signout} signup={newsignup}/>
        </div>
        <div className="maincontainer">
          <div className="chat-container" id="data">
          <Chat data={data} userdata={userdata} />
          </div>
          <div className="chat-container-input">
          <InputGroup className="mb-3">
          <FormControl
            placeholder="Type Message"
            value={inputmsg}
            onChange={(e) => setinputmsg(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="info" onClick={ sentmessage} >Enter</Button>
          </InputGroup.Append>
        </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
