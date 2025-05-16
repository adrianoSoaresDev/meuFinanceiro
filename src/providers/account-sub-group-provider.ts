import { AccountSubGroup,AccountSubGroupBase } from "@/app/types/sub-account-group";

export function accountSubGroupProvider(){

const get= async(id:number):Promise<AccountSubGroup>=>{
return {id,name:" Salário  / Adiantamento /  Renda Autônomo",idGroup:1,status:true }
}

const getAll= async():Promise<AccountSubGroup[]>=>{
  return [
{id:1,name:" Salário  / Adiantamento /  Renda Autônomo",idGroup:1,status:true },
{id:1,name:" Férias",idGroup:1,status:true },
{id:1,name:" 13º salário",idGroup:1,status:true },
{id:1,name:" Dividendos",idGroup:1,status:true },
{id:1,name:" Receita extra (aluguel, restituição IR)",idGroup:1,status:true },
{id:1,name:" Outras Receitas",idGroup:1,status:true },
{id:1,name:" Supermercado",idGroup:1,status:true },
{id:1,name:" Feira  / Sacolão / Açougue",idGroup:1,status:true },
{id:1,name:" Padaria",idGroup:1,status:true },
{id:1,name:" Refeição fora de casa/ Dellivery",idGroup:1,status:true },
{id:1,name:" Outros (café, água, sorvetes, etc)",idGroup:1,status:true },
{id:1,name:" Prestação /Aluguel de imóvel",idGroup:1,status:true },
{id:1,name:" Condomínio",idGroup:1,status:true },
{id:1,name:" Consumo de água",idGroup:1,status:true },
{id:1,name:" Serviço de limpeza( diarista ou mensalista)",idGroup:1,status:true },
{id:1,name:" Energia Elétrica",idGroup:1,status:true },
{id:1,name:" Gás",idGroup:1,status:true },
{id:1,name:" IPTU",idGroup:1,status:true },
{id:1,name:" Decoração da casa",idGroup:1,status:true },
{id:1,name:" Manutenção / Reforma da casa",idGroup:1,status:true },
{id:1,name:" Celular",idGroup:1,status:true },
{id:1,name:" Telefone fixo",idGroup:1,status:true },
{id:1,name:" Internet / TV a cabo",idGroup:1,status:true },
{id:1,name:" Matricula Escolar/ Mensalidade ",idGroup:1,status:true },
{id:1,name:" Material Escolar",idGroup:1,status:true },
{id:1,name:" Outros cursos",idGroup:1,status:true },
{id:1,name:" Transporte escolar",idGroup:1,status:true },
{id:1,name:" Ração ",idGroup:1,status:true },
{id:1,name:" Banho / Tosa",idGroup:1,status:true },
{id:1,name:" Veterinário / medicamento",idGroup:1,status:true },
{id:1,name:" Outros (acessórios, brinquedos, hotel, dog walker)",idGroup:1,status:true },
{id:1,name:" Plano de saúde",idGroup:1,status:true },
{id:1,name:" Medicamentos",idGroup:1,status:true },
{id:1,name:" Dentista",idGroup:1,status:true },
{id:1,name:" Terapia / Psicólogo  / Acupuntura",idGroup:1,status:true },
{id:1,name:" Médicos/Exames fora do plano de saúde",idGroup:1,status:true },
{id:1,name:" Academia / Tratamento Estético",idGroup:1,status:true },
{id:1,name:" Ônibus / Metrô",idGroup:1,status:true },
{id:1,name:" Taxi",idGroup:1,status:true },
{id:1,name:" Combustível",idGroup:1,status:true },
{id:1,name:" Estacionamento",idGroup:1,status:true },
{id:1,name:" Seguro Auto",idGroup:1,status:true },
{id:1,name:" Manutenção / Lavagem / Troca de óleo",idGroup:1,status:true },
{id:1,name:" Licenciamento",idGroup:1,status:true },
{id:1,name:" Pedágio",idGroup:1,status:true },
{id:1,name:" IPVA",idGroup:1,status:true },
{id:1,name:" Vestuário / Calçados / Acessórios",idGroup:1,status:true },
{id:1,name:" Cabeleireiro / Manicure / Higiene pessoal",idGroup:1,status:true },
{id:1,name:" Presentes/Doação",idGroup:1,status:true },
{id:1,name:" Outros  ",idGroup:1,status:true },
{id:1,name:" Cinema / Teatro / Shows",idGroup:1,status:true },
{id:1,name:" Livros / Streaming /Games",idGroup:1,status:true },
{id:1,name:" Clube / Parques / Casa Noturna",idGroup:1,status:true },
{id:1,name:" Viagens ",idGroup:1,status:true },
{id:1,name:" Restaurantes / Bares / Festas",idGroup:1,status:true },
{id:1,name:" Empréstimos",idGroup:1,status:true },
{id:1,name:" Seguros (vida/residencial)",idGroup:1,status:true },
{id:1,name:" Investimentos(Reservas / Poupança/ Outros)",idGroup:1,status:true },
{id:1,name:" Juros Cheque Especial",idGroup:1,status:true },
{id:1,name:" Tarifas bancárias",idGroup:1,status:true },
{id:1,name:" Financiamento de veículo",idGroup:1,status:true },
{id:1,name:" Pagamento da fatura do cartão de crédito",idGroup:1,status:true },
{id:1,name:" Imposto de Renda a Pagar ",idGroup:1,status:true },
{id:1,name:" Saqu",idGroup:1,status:true}
];
}

const put= async(data:AccountSubGroup):Promise<AccountSubGroup>=>{
  return data
}

const post=async (data:AccountSubGroupBase):Promise<AccountSubGroup>=>{
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