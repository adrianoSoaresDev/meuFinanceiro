import { AccountGroup, AccountGroupBase } from "@/app/types/account-group";

export function accountProvider(){

const get= async(id:number):Promise<AccountGroup>=>{
return {
      id,
      name:"Receita",
      status:true,
    }
}

const getAll= async():Promise<AccountGroup[]>=>{
  return [
    {
      id:1,
      name:"Receita",
      status:true,
    },
  { id:2, name: "Alimentação",status:true },
  { id:3, name: "Moradia",status:true}, 
  { id:4, name: "Educação",status:true}, 
  { id:5, name: "Animais",status:true}, 
  { id:6, name: "Saúde",status:true}, 
  { id:7, name: "Transporte",status:true}, 
  { id:8, name: "Pessoais",status:true}, 
  { id:9, name: "Lazer",status:true}, 
  { id:10, name: "Serviços Financeiros",status:true}, 
];
}

const put= async(data:AccountGroup):Promise<AccountGroup>=>{
  return data
}

const post=async (data:AccountGroupBase):Promise<AccountGroup>=>{
  return  {
    id:1,
    ...data
  }
}

const remove=(id:number)=>{
  return {
    status:"ok",
    mensagem:"Removido com sucesso!"
  }
}

return{
  get,
  getAll,
  put,
  post,
  remove
}

}