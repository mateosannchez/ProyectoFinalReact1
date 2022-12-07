import { BREADS } from "../../Data/Molde";
import { SELECTED_BREAD, FILTERED_BREAD } from "../Acciones/Bread.action";

const initialState = {
  breads: BREADS,
  filteredBread: [],
  selected: null,
};

const MoldeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_BREAD:
      return {
        ...state,
        selected: state.breads.find((bread) => bread.id === action.breadId),
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBread: state.breads.filter(
          (bread) => bread.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default MoldeReducer;