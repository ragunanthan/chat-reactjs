import React, { Component } from "react";
import "./Winner.css";
class Winner extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.winners.map((item, key) => (
          <div key={key} className="content2">

            <img className="image"  src={item.image} alt="product" />
            <p >{item.name}</p>
   
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Winner;
