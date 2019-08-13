import React from "react";
import "./../../../App.css"

export default function Header(props) {
  console.log('props', props)
  return (
    
    <div className="wrapper-title">
      <p className="title">chat by Dmitry Kasptrovich</p>
      <p>{props.connect}</p>
    </div>
  );
}
