import axios from "axios";

export const SET_CATS='SET_CATS';
export const ADD_FAVS='ADD_FAVS';

export const setCatsFact=(catsData)=>({
     type:SET_CATS,
     payload:catsData,
})
export const addFav=(id)=>{
    return {type:ADD_FAVS,payload:id}
}

export const fetchCatsFact=()=>(dispatch,getState)=>{
    axios.get('https://catfact.ninja/fact').then(res=>{
        dispatch(setCatsFact(res.data))
    })
}