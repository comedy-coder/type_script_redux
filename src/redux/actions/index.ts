
interface DepositAction 
{
    type : string
    payload : number
}
interface WithdrawAction  {
    type : string
    payload : number
}
 interface  Bankrut{
    type : string
    payload : number
}

export type Action = DepositAction | WithdrawAction | Bankrut