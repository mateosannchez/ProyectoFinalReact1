import { CATEGORIES } from "../../Data/Categorias";
import { SELECTED_CATEGORY } from "../Acciones/Categoria.acciones";

const initialState = {
    categorias: CATEGORIES,
    selected: null,
};

const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CATEGORY:
            const IndexCategory = state.categorias.findIndex(
                (cat) => cat.id === action.categoryID
            );
            if (IndexCategory === -1) return state;
            return { ...state, selected: state.categorias[IndexCategory] };
        default:
            return state;
    }
};

export default CategoriaReducer;