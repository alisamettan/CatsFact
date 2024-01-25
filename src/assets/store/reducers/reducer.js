import { SET_CATS,ADD_FAVS } from "../actions/actions"

const initialData = {
    cats: [],
    fav:[],
}

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case SET_CATS:
            return { ...state, cats: action.payload }
            case ADD_FAVS:
                
                return {...state,fav:[...state.fav,state.cats.fact]}      
        default:
            return state
    }

}