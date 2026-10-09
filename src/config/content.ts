export const CONFIG = {
  // ⚠️ PENDENTE — preencher antes do deploy
  FORM_ENDPOINT: '⚠️ PENDENTE',
  WHATSAPP_URL: '⚠️ PENDENTE',
  WHATSAPP_NUMBER: '⚠️ PENDENTE',
  CONTACT_EMAIL: '⚠️ PENDENTE',
  CONTACT_PHONE: '⚠️ PENDENTE',
  DOMAIN: '⚠️ PENDENTE',

  // ⚠️ PREENCHER
  COMPANY_NAME: '⚠️ PREENCHER',
} as const

export const NAVIGATION = {
  previous: 'Slide anterior',
  next: 'Próximo slide',
  progress: 'Progresso da apresentação',
} as const

// ⚠️ TEXTO PROVISÓRIO — substituir pelo copy de conteudo/NN-nome.md
// Palavras entre *asteriscos* nos títulos ficam em destaque

export const COVER = {
  brand: 'Nome da empresa',
  label: 'Proposta comercial',
  title: 'Título principal da *proposta*',
  text: 'Subtítulo de apoio que resume, em uma ou duas frases, o que está sendo proposto e o resultado esperado para o cliente.',
  meta: [
    { label: 'Preparada para', value: 'Nome do cliente' },
    { label: 'Data', value: 'Outubro 2026' },
  ],
  hint: 'Role para avançar',
} as const

export const ABOUT = {
  label: '02 — Sobre nós',
  title: 'Quem somos e por que *confiar* em nós',
  text: 'Parágrafo curto apresentando a empresa: história, especialidade e o que a diferencia. Duas ou três frases são suficientes para criar contexto.',
  stats: [
    { value: '+10', label: 'anos de mercado' },
    { value: '+200', label: 'projetos entregues' },
    { value: '98%', label: 'clientes satisfeitos' },
    { value: '+15', label: 'especialistas no time' },
  ],
} as const

export const CHALLENGE = {
  label: '03 — Cenário atual',
  title: 'O *desafio* que precisamos resolver',
  text: 'Resumo do cenário atual do cliente e do problema que motivou esta proposta.',
  items: [
    { title: 'Primeiro desafio', description: 'Descrição breve do primeiro ponto de dor identificado no cenário atual.' },
    { title: 'Segundo desafio', description: 'Descrição breve do segundo ponto de dor e do impacto dele no negócio.' },
    { title: 'Terceiro desafio', description: 'Descrição breve do terceiro ponto de dor que a proposta vai endereçar.' },
  ],
} as const

export const SOLUTION = {
  label: '04 — Solução',
  title: 'Nossa *solução* para o seu negócio',
  text: 'Visão geral da solução proposta e de como ela resolve os desafios apresentados.',
  pillars: [
    { title: 'Pilar 01', description: 'O que este pilar da solução entrega e qual problema resolve.' },
    { title: 'Pilar 02', description: 'O que este pilar da solução entrega e qual problema resolve.' },
    { title: 'Pilar 03', description: 'O que este pilar da solução entrega e qual problema resolve.' },
    { title: 'Pilar 04', description: 'O que este pilar da solução entrega e qual problema resolve.' },
  ],
} as const

export const DELIVERABLES = {
  label: '05 — Escopo',
  title: 'O que está *incluído*',
  items: [
    'Entregável 01 — descrição curta',
    'Entregável 02 — descrição curta',
    'Entregável 03 — descrição curta',
    'Entregável 04 — descrição curta',
    'Entregável 05 — descrição curta',
    'Entregável 06 — descrição curta',
  ],
} as const

export const TIMELINE = {
  label: '06 — Cronograma',
  title: 'Como vamos *executar*',
  steps: [
    { period: 'Semana 1', title: 'Etapa 01', description: 'O que acontece nesta etapa e o que é entregue ao final.' },
    { period: 'Semanas 2–3', title: 'Etapa 02', description: 'O que acontece nesta etapa e o que é entregue ao final.' },
    { period: 'Semanas 4–5', title: 'Etapa 03', description: 'O que acontece nesta etapa e o que é entregue ao final.' },
    { period: 'Semana 6', title: 'Etapa 04', description: 'O que acontece nesta etapa e o que é entregue ao final.' },
  ],
} as const

export const INVESTMENT = {
  label: '07 — Investimento',
  title: 'Investimento',
  plans: [
    { name: 'Plano 01', price: 'R$ 0.000', period: 'pagamento único', description: 'Resumo do que está incluído neste plano.', featured: false },
    { name: 'Plano 02', price: 'R$ 0.000', period: 'por mês', description: 'Resumo do que está incluído neste plano.', featured: true },
    { name: 'Plano 03', price: 'R$ 0.000', period: 'por mês', description: 'Resumo do que está incluído neste plano.', featured: false },
  ],
  featuredLabel: 'Recomendado',
  note: 'Condições de pagamento, validade da proposta e observações gerais.',
} as const

export const NEXT_STEPS = {
  label: '08 — Próximos passos',
  title: 'Vamos *começar*?',
  text: 'Frase de fechamento convidando o cliente a dar o próximo passo.',
  steps: ['Aprovação da proposta', 'Assinatura do contrato', 'Reunião de kickoff'],
  cta: 'Falar no WhatsApp',
} as const
