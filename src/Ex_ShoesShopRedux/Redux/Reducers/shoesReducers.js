import { datashoesArr } from "../../Data_Shoes";
import {
  ADD_SHOES_TO_CART,
  DECREASE_AMOUNT,
  DELETE_SHOES,
  INCREASE_AMOUNT,
  VIEW_DETAIL,
} from "../constants/shoesConstants";

export let initialState = {
  shoesArr: datashoesArr,
  shoesdetail: datashoesArr[0],
  cartShoes: [],
};

export let shoesReducers = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAIL: {
      state.shoesdetail = action.payload;
      return { ...state };
    }
    case ADD_SHOES_TO_CART: {
      let cloneCartShoes = [...state.cartShoes];
      let index = state.cartShoes.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index == -1) {
        let productCart = { ...action.payload, amount: 1 };
        cloneCartShoes.push(productCart);
      } else {
        cloneCartShoes[index].amount++;
      }
      state.cartShoes = cloneCartShoes;
      return { ...state };
    }
    case DECREASE_AMOUNT: {
      let cloneCartShoes = [...state.cartShoes];
      let index = state.cartShoes.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (cloneCartShoes[index].amount > 1) {
        state.cartShoes = cloneCartShoes;
        state.cartShoes[index].amount--;
      } else {
        cloneCartShoes.splice(index, 1);
        state.cartShoes = cloneCartShoes;
      }
      return { ...state };
    }
    case INCREASE_AMOUNT: {
      let cloneCartShoes = [...state.cartShoes];
      let index = state.cartShoes.findIndex((item) => {
        return item.id == action.payload.id;
      });
      state.cartShoes = cloneCartShoes;
      cloneCartShoes[index].amount++;
      return { ...state };
    }
    case DELETE_SHOES: {
      let cloneCartShoes = [...state.cartShoes];
      let index = state.cartShoes.findIndex((item) => {
        return item.id == action.payload.id;
      });
      cloneCartShoes.splice(index, 1);
      state.cartShoes = cloneCartShoes;
      return { ...state };
    }
    default:
      return state;
  }
};
