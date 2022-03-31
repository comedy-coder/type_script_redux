
import { Action } from '../actions/index'
import { ActionType } from "../action-types/index"
const initialState = 0


const reducer = ( state = initialState , action : Action) =>{
            switch (action.type ){
                case  ActionType.DEPOSIT :
                return state = state + action.payload
                case  ActionType.WITHDRAW :
                return state = state - action.payload
                case  ActionType.BACKRUPT :
                return state 
                default :
                return 0; 

            }
}
export default reducer;
                
            