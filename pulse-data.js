window.PULSE_DATA={
 metrics:{revenue:184700,clients:418,onTime:94,response:21},
 clients:[
  {id:"aurora",name:"Aurora Saúde",segment:"Saúde",stage:"Ativo",owner:"Marina",value:38000,health:92,last:"Hoje · 09:14"},
  {id:"atlas",name:"Atlas Imóveis",segment:"Imobiliário",stage:"Proposta",owner:"Caio",value:62000,health:78,last:"Hoje · 08:40"},
  {id:"norte",name:"Norte Casa",segment:"Varejo",stage:"Diagnóstico",owner:"Marina",value:24000,health:85,last:"Ontem · 17:20"},
  {id:"lume",name:"LUME",segment:"Hospitalidade",stage:"Ativo",owner:"Rafael",value:44000,health:96,last:"Ontem · 15:03"},
  {id:"delta",name:"Delta B2B",segment:"Serviços",stage:"Negociação",owner:"Caio",value:52000,health:70,last:"27/09 · 12:15"}
 ],
 tasks:[
  {id:"t1",title:"Revisar proposta Atlas",project:"Atlas",priority:"Alta",status:"todo",owner:"Caio",due:"Hoje · 10:30"},
  {id:"t2",title:"Aprovar landing Aurora",project:"Aurora",priority:"Média",status:"doing",owner:"Marina",due:"Hoje · 13:00"},
  {id:"t3",title:"Retorno cliente LUME",project:"LUME",priority:"Alta",status:"doing",owner:"Rafael",due:"Hoje · 15:20"},
  {id:"t4",title:"Relatório semanal",project:"Operações",priority:"Baixa",status:"done",owner:"Marina",due:"Hoje · 17:00"},
  {id:"t5",title:"Mapear integração CRM",project:"Delta",priority:"Média",status:"todo",owner:"Caio",due:"Amanhã · 11:00"}
 ],
 messages:[
  {id:"m1",from:"Aurora Saúde",subject:"Aprovação do protótipo",time:"12 min",body:"O protótipo foi aprovado. Precisamos alinhar apenas a ordem das etapas de implantação."},
  {id:"m2",from:"Atlas Imóveis",subject:"Ajuste de escopo",time:"38 min",body:"O cliente pediu uma segunda opção para o módulo de relatórios e quer estimativa de impacto."},
  {id:"m3",from:"Equipe produto",subject:"QA mobile",time:"1 h",body:"Foram encontrados dois pontos de responsividade no fluxo de checkout."}
 ],
 automations:[
  {id:"a1",name:"Lead sem retorno por 24h",trigger:"Lead parado em Contato iniciado",action:"Criar tarefa + notificar responsável",enabled:true},
  {id:"a2",name:"Proposta aprovada",trigger:"Estágio muda para Aprovada",action:"Criar projeto e checklist de handoff",enabled:true},
  {id:"a3",name:"SLA de mensagens",trigger:"Mensagem sem resposta por 30 min",action:"Alertar equipe",enabled:false}
 ],
 team:[
  {name:"Marina Costa",role:"Operações",initials:"MC",status:"Online"},
  {name:"Caio Mendes",role:"Comercial",initials:"CM",status:"Em reunião"},
  {name:"Rafael Alves",role:"Produto",initials:"RA",status:"Online"},
  {name:"Lia Torres",role:"Sucesso",initials:"LT",status:"Ausente"}
 ]
};