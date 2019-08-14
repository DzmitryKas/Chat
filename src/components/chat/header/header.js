import React from "react";
import "./../../../App.css";

export default function Header(props) {
  return (
    <div className="wrapper-title">
      <div >
        <p className="title">chat by Dmitry Kasptrovich</p>
        <p>{props.connect}</p>
      </div>
      <div>
        <button onClick={props.logOut}>Log out</button>
      </div>
    </div>
  );
}
