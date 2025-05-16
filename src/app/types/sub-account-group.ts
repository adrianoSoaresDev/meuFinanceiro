export interface AccountSubGroupBase{
  idGroup:number;
  name:string;
  status:boolean;
}

export type AccountSubGroup = AccountSubGroupBase & {  id:number;}