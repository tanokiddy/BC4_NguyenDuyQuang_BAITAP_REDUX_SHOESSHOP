import React, { Component } from "react";
import Item_Shoes from "./Item_Shoes";

export default class ListShoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((item) => {
            return <Item_Shoes detail={item} />;
          })}
        </div>
      </div>
    );
  }
}
