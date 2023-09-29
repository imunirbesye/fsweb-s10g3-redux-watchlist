import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriAction";
import { movies } from "../movies";


export const initialState = {
    movies: [...movies],
    favorites: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;