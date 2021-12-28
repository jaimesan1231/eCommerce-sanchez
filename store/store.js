import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistedReducer } from "../reducers/productoReducer";
import { persistStore } from "redux-persist";

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
