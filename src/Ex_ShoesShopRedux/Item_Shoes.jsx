import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  ADD_SHOES_TO_CART,
  VIEW_DETAIL,
} from "./Redux/constants/shoesConstants";

class Item_Shoes extends Component {
  render() {
    let { name, image, price } = this.props.detail;
    return (
      <Fragment>
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <h5 style={{ fontSize: "1rem" }} className="card-title">
                {name}
              </h5>
              <p className="card-text">{price}</p>
              <button
                onClick={() => {
                  this.props.handleAddShoesToCart(this.props.detail);
                }}
                className="btn btn-secondary mr-2"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  this.props.handleViewDetail(this.props.detail);
                }}
                className="btn btn-warning"
              >
                More detail
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleViewDetail: (value) => {
      dispatch({
        type: VIEW_DETAIL,
        payload: value,
      });
    },
    handleAddShoesToCart: (value) => {
      dispatch({
        type: ADD_SHOES_TO_CART,
        payload: value,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Item_Shoes);
