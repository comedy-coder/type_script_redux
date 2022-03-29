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

export const withdrawMoeny  = (amount : number) => {
    return  (dispatch : Dispatch<Action> ) => {
        dispatch({
            type : ActionType.WITHDRAW ,
            payload : amount
        })
    }
}

export const bankrupt  = (amount : number) => {
    return  (dispatch : Dispatch<Action> ) => {
        dispatch({
            type : ActionType.BACKRUPT
        })

    }}

