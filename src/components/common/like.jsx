import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    classes += this.props.liked ? "" : "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
