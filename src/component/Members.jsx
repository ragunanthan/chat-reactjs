import React, { Component } from "react";
import "./Members.css";
class Members extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.members.map((e) => (
          <div className="members" key={e.rank}>
            <p className="id">{e.rank}</p>
            <div className="members1">
              <img className="members2" src={e.image} alt="product" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                }}
              >
                <p style={{ marginBottom: -2 }}>{e.name}</p>
                <p style={{ color: "lightgrey" }}>@{e.id}</p>
              </div>

              <p className="members3">{e.score}</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Members;
