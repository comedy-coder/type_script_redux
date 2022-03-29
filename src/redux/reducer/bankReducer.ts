import React from 'react'
import { Action } from '../actions/index'
import { ActionType } from "../action-types/index"
const initialState = 0


const reducer = (state: number = initialState , action : Action) =>
{
        switch(action.type){
            case ActionType.DEPOSIT :
                return state +  action.payload 
            case ActionType.WITHDRAW :
                return state - action.payload
            case ActionType.BACKRUPT :
                return 0 ;
            default : state
            }

}
export default reducer;
                
            