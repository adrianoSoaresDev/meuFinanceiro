import { PaymentType,PaymentTypeBase } from "@/app/types/payment-type";

export function paymentTypeProvider(){

const get= async(id:number):Promise<PaymentType>=>{
return  {
      id,
      name: "PIX",
      icon: "/images/pay/pix.png",
      type: "DB",
      status:true
    }
}

const getAll= async():Promise<PaymentType[]>=>{
  
  return  [  
    {
      id:1,
      name: "PIX",
      icon: "/images/pay/pix.png",
      type: "DB",
      status:true
    },
    {
      id:2,
      status:true,
      name: "Cartão de Crédito",
      icon: "/images/pay/cartao-credito.png",
      type: "CC",
    },
    {
      id:3,
      name: "Dinheiro",
      icon: "/images/pay/dinheiro.png",
      status:true,
      type: "DI"      
    },
  ]
}

const put= async(data:PaymentType):Promise<PaymentType>=>{
  return data
}

const post=async (data:PaymentTypeBase):Promise<PaymentType>=>{
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