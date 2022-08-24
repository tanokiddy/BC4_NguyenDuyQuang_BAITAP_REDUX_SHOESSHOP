import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DECREASE_AMOUNT,
  DELETE_SHOES,
  INCREASE_AMOUNT,
} from "./Redux/constants/shoesConstants";

class CartShoes extends Component {
  rendertbody() {
    return this.props.cartShoes.map((item) => {
      return (
        <tr>
          <td className="text-left">{item.name}</td>
          <td>
            <img src={item.image} style={{ width: 80 }} alt=""></img>
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDecreaseAmount(item);
              }}
              className="btn btn-sm btn-primary"
            >
              -
            </button>
            <span className="px-2">{item.amount}</span>
            <button
              onClick={() => {
                this.props.handleIncreaseAmount(item);
              }}
              className="btn btn-sm btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleDeleteShoes(item);
              }}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container py-5">
        <table className="table">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{this.rendertbody()}</tbody>
        </table>
        {this.props.cartShoes.length == 0 && (
          <p>Chưa có sản phẩm nào trong giỏ hàng</p>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cartShoes: state.shoesReducers.cartShoes,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDecreaseAmount: (value) => {
      let action = {
        type: DECREASE_AMOUNT,
        payload: value,
      };
      dispatch(action);
    },
    handleIncreaseAmount: (value) => {
      let action = {
        type: INCREASE_AMOUNT,
        payload: value,
      };
      dispatch(action);
    },
    handleDeleteShoes: (value) => {
      let action = {
        type: DELETE_SHOES,
        payload: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoes);
