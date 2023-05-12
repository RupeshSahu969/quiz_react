import axios from "axios";
import * as types from "./actionTypes";


export const getQuiz=(params)=>(dispatch)=>
{
        dispatch({type:types.GET_QUIZ_REQUEST});
        return  axios
        .get("https://opentdb.com/api.php", params)
        .then((r)=>dispatch({type:types.GET_QUIZ_SUCCESS , payload:r.data.results}))
        .catch((err)=>dispatch({type:types.GET_QUIZ_FAILURE,payload:err}))
}
