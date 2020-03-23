import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  classes += props.liked ? "" : "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
