import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"


export const depositMoney = (amount : number) => {
    return  (dispatch : Dispatch<Action> ) => {
        dispatch({
            type : ActionType.DEPOSIT ,
            payload : amount
        })
    }
}

export const withdrawMoney  = (amount : number) => {
    return  (dispatch : Dispatch<Action> ) => {
        dispatch({
            type : ActionType.WITHDRAW ,
            payload : amount
        })
    }
}
export const withbackrupMoney  = (amount : number) => {
    return  (dispatch : Dispatch<Action> ) => {
        dispatch({
            type : ActionType.BACKRUPT ,
            payload : amount
        })
    }
}
