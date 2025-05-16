export type TypePayment=  "CC"| "DB"|"DP"|"VA"|"IV"|"SQ"|"DI"                

export interface PaymentTypeBase{
  name:string;
  type:TypePayment;  
  icon:string;
  status:boolean;
}

export type PaymentType = PaymentTypeBase & {  id:number;}