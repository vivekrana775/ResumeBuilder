import * as documentActions from '../actions/actions';
import { v4 as uuidv4 } from 'uuid';
import documentReducer from '../reducers/documentReducer';
export const setSkin=(skindCd)=>
{
    return{
        type:documentActions.SET_SKIN,
       payload:{
        skindCd:skindCd,   
        id:uuidv4(),
           
       }
    }
}

export const updateSkin=(skindCd)=>{

    return {
        type:documentActions.UPDATE_SKIN,
        payload:{
            skindCd:skindCd
        }
    }
}
