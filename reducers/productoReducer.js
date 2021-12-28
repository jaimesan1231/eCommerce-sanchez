import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const productPage = {
  currentPage: 1,
  products: [],
  currentProducts: [],
};

const cart = {
  total: 0,
  items: [],
};

const pedido = {
  user: {},
};

export const pedidoReducer = (state = pedido, action) => {
  switch (action.type) {
    case "CREATE_PEDIDO": {
      return {
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export const productoReducer = (state = productPage, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
        currentProducts: action.payloadCurrentProducts,
      };
    }
    case "CHANGE_PAGE": {
      console.log(state);
      return {
        ...state,
        currentPage: action.payload,
        currentProducts: action.payloadCurrentProducts,
      };
    }
    default: {
      return state;
    }
  }
};

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payloadTotal,
      };
    }
    case "CLEAN_CART": {
      return {
        ...state,
        items: action.payload,
        total: state.total - action.payloadTotal,
      };
    }
    default: {
      return state;
    }
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export const reducerApp = combineReducers({
  product: productoReducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducerApp);
