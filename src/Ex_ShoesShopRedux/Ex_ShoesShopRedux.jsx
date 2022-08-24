import React, { Component } from "react";
import { connect } from "react-redux";
import CartShoes from "./CartShoes";
import { datashoesArr } from "./Data_Shoes";
import Detail_Shoes from "./Detail_Shoes";
import ListShoes from "./ListShoes";

class Ex_ShoesShopRedux extends Component {
  render() {
    return (
      <div>
        <CartShoes />
        <ListShoes data={this.props.shoesArr} />
        <Detail_Shoes />
      </div>
    );
  }
}

let mapStateToProp = (state) => {
  return {
    shoesArr: state.shoesReducers.shoesArr,
    shoesdetail: state.shoesReducers.shoesdetail,
    cartShoes: state.shoesReducers.cartShoes,
  };
};

export default connect(mapStateToProp)(Ex_ShoesShopRedux);
