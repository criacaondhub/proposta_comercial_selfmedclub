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
  title: 'SelfMedClub — Proposta comercial',
  symbol: {
    src: '/assets/01-capa/Logo-vertical-branco.svg',
    viewBox: '0 0 444.73 513.58',
    alt: 'Símbolo SelfMedClub',
  },
  wordmark: {
    src: '/assets/01-capa/Logo-horizontal.svg',
    viewBox: '0 0 1031.64 327.97',
    alt: 'SelfMedClub',
  },
  hint: 'Clique nas setas para avançar',
} as const

export const ABOUT = {
  // \n = quebra de linha no tablet/desktop
  tagline: 'Mais que uma Mentoria ou Mastermind',
  title: 'Somos um Club Exclusivo\npara médicos que querem:',
  text: 'Acelerar sua carreira, construir posicionamento,\ntransformar seus resultados, vender mais e elevar suas conexões',
} as const

export const QUOTE = {
  // Trecho entre *asteriscos* fica na Armany (fonte do h1), em itálico e negrito
  text: 'A liberdade e os resultados que tenho não vieram apenas dos meus estudos. *Vieram do dia que decidi parar de ser o centro da minha clínica* e comecei a construir um negócio de verdade.',
  author: 'Dr. Gustavo Sá',
} as const

export const STATEMENT = {
  image: {
    src: '/assets/05-entregaveis/Backgroud-Slide-05.webp',
    alt: 'Mulher de roupão SelfMedClub segurando um jornal com a frase: Estamos construindo algo diferente de tudo que você já viu no mercado',
    width: 2112,
    height: 1188,
  },
} as const

export const CHALLENGE = {
  title: 'Qual o tamanho do mercado que estamos?',
  text: 'E quanto ele tem crescido a cada ano?',
  // Valores entre *asteriscos* ficam em destaque. Ícones: pen | growth | health
  items: [
    { icon: 'pen', text: 'Mercado de canetas emagrecedoras deve chegar a *R$20 bi* no Brasil com genéricos' },
    { icon: 'growth', text: 'Mercado de obesidade e diabetes movimentará *R$572 bilhões* até 2030' },
    { icon: 'health', text: 'Setor de saúde e bem-estar consolida resiliência e *faturamento bilionário*' },
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

// ⚠️ IMAGEM PROVISÓRIA — trocar pela imagem de cada entregável
const DELIVERABLE_PLACEHOLDER_IMAGE = '/assets/05-entregaveis/Backgroud-Slide-05.webp'

export const DELIVERABLES = {
  tag: 'Entregáveis',
  // Ícones: platform | events | mentoring | network
  items: [
    { icon: 'platform', title: 'PLATAFORMA EDUCACIONAL COMPLETA', image: DELIVERABLE_PLACEHOLDER_IMAGE },
    { icon: 'events', title: 'EXPERIÊNCIAS PRESENCIAIS', image: DELIVERABLE_PLACEHOLDER_IMAGE },
    { icon: 'mentoring', title: 'MENTORIAS ONLINE', image: DELIVERABLE_PLACEHOLDER_IMAGE },
    { icon: 'network', title: 'GRUPO DE NETWORKING SELETO E FECHADO', image: DELIVERABLE_PLACEHOLDER_IMAGE },
  ],
} as const

export const ONLINE_TRAINING = {
  tagline: 'Formação online',
  title: 'Toda minha experiência concentrada em um único lugar, em conteúdos gravados e Ao Vivo',
  // Ícones: host | guests | platform | app
  items: [
    { icon: 'host', text: 'Uma mentoria por mês com o Dr. Gustavo Sá sobre temas diversos' },
    {
      icon: 'guests',
      text: 'Uma mentoria por mês com convidados especiais sobre Marketing, Vendas, Gestão, Protocolos e muito mais.',
    },
    {
      icon: 'platform',
      text: 'Uma plataforma educacional completa com aulas gravadas, metodologia própria e trilhas de aprendizado.',
    },
    { icon: 'app', text: 'Aplicativo Próprio para uma experiência única.' },
  ],
  // ⚠️ IMAGEM PROVISÓRIA — trocar pela imagem final do slide 07
  image: {
    src: '/assets/05-entregaveis/Backgroud-Slide-05.webp',
    alt: '',
  },
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

type CurriculumItem = { text: string; sub?: readonly string[] }

export const CURRICULUM: {
  tagline: string
  title: string
  blocks: readonly { title: string; items: readonly CurriculumItem[] }[]
} = {
  tagline: 'Formação online',
  title: 'Conteúdos técnicos e práticos para você escalar seus resultados enquanto aperfeiçoa suas técnicas',
  blocks: [
    {
      title: 'Bastidores práticos:',
      items: [
        { text: 'Bastidores do Long Life:', sub: ['Estruturação de time;', 'Processos internos;', 'Gestão da clínica.'] },
        { text: 'Processos comerciais e vendas na prática;' },
        { text: 'Marketing, Vendas;' },
        { text: 'Tecnologia;' },
        { text: 'Prevenção Jurídica.' },
      ],
    },
    {
      title: 'Gestão da clínica e mais:',
      items: [
        { text: 'Como precificar seus atendimentos;' },
        { text: 'Como aumentar seu ticket médio;' },
        { text: 'Como lotar sua agenda e ter um bom posicionamento no digital;' },
        { text: 'Construindo um atendimento premium;' },
        { text: 'Gestão financeira da clínica;' },
        { text: 'Construindo autoridade e reputação;' },
        { text: 'Como gerenciar sua agenda;' },
        { text: 'Como ter uma empresa autogerenciável.' },
      ],
    },
  ],
}

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

export const MILESTONES = {
  title: 'Daqui para o final do ano, teremos 3 grandes entregas.',
  subtitle: 'Sua jornada como Founder Member começa ainda em 2026.',
  events: [
    {
      label: 'BOAS-VINDAS',
      date: '29 OUT',
      description: 'Encontro online de boas-vindas com todos os membros.',
      tagline: 'ONLINE',
    },
    {
      label: 'EXPERIÊNCIA PRESENCIAL',
      date: '14 NOV',
      description: 'Primeiro encontro presencial com todos os membros.',
      tagline: 'PRESENCIAL',
    },
    {
      label: 'ENCONTRO ONLINE',
      date: '10 DEZ',
      description: 'Primeira mentoria online com o Dr. Gustavo Sá.',
      tagline: 'ONLINE',
    },
  ],
} as const

export const PRESENCIAL = {
  tagline: 'PRESENCIAL',
  title: '2 eventos intimistas com o Gustavo Sá e outros membros.',
  note: '*Eventos e datas a serem definidos em conjunto com a turma.',
  // ⚠️ IMAGEM PROVISÓRIA — trocar pela imagem final do slide 13
  image: { src: '/assets/05-entregaveis/Backgroud-Slide-05.webp', alt: '' },
} as const

export const FEATURES = {
  items: [
    {
      title: 'Experiências Presenciais',
      description: '2 eventos presenciais exclusivos com o Gustavo Sá e seus convidados. Networking e experiências de alto nível.',
    },
    {
      title: 'Mentorias Online e Exclusivas',
      description: '12 encontros online com o Dr. Gustavo Sá.',
    },
    {
      title: '6 Encontros Ao Vivo com Convidados',
      description: 'Sessões de aprofundamento e assuntos que toda clínica precisa saber.',
    },
    {
      title: 'Formação Online Completa',
      description: 'Uma plataforma educacional com aulas exclusivas para acelerar sua carreira.',
    },
  ],
} as const
