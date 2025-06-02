export interface AccountGroupBase{
  name:string;
  status:boolean;
}

export type AccountGroup = AccountGroupBase & {  id:number;}