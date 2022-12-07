import { createStore, combineReducers } from "redux";
import CategoriaReducer from "./Reducers/Categoria.reducer";
import MoldeReducer from "./Reducers/Molde.reducer";

const RootReducer = combineReducers({
  categorias: CategoriaReducer,
  breads: MoldeReducer,
});

export default createStore(RootReducer);