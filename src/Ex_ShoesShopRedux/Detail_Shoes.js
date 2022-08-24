import React, { Component } from "react";
import { connect } from "react-redux";

class Detail_Shoes extends Component {
  render() {
    let { name, price, image, description } = this.props.shoesdetail;
    return (
      <div className="container p-5">
        <div class="row">
          <div className="col-6">
            <img src={image} className="w-100" alt=""></img>
          </div>
          <div
            style={{ paddingTop: "15%" }}
            className="col-6 text-left text-primary"
          >
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    shoesdetail: state.shoesReducers.shoesdetail,
  };
};

export default connect(mapStateToProps)(Detail_Shoes);
