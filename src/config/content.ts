import { asset } from '@/lib/asset'
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
    src: asset('/assets/01-capa/Logo-vertical-branco.svg'),
    viewBox: '0 0 444.73 513.58',
    alt: 'Símbolo SelfMedClub',
  },
  wordmark: {
    src: asset('/assets/01-capa/Logo-horizontal.svg'),
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
  author: 'Dr. Gustavo Sá',
} as const

export const STATEMENT = {
  image: {
    src: asset('/assets/05-entregaveis/Backgroud-Slide-05.webp'),
    alt: 'Mulher de roupão SelfMedClub segurando um jornal com a frase: Estamos construindo algo diferente de tudo que você já viu no mercado',
    width: 2112,
    height: 1188,
  },
} as const

export const CHALLENGE = {
  title: 'Qual o tamanho do *mercado* que estamos?',
  text: 'E quanto ele tem crescido a cada ano?',
  // Valores entre *asteriscos* ficam em destaque. Ícones: pen | growth | health
  items: [
    { icon: 'pen', text: 'Mercado de canetas emagrecedoras deve chegar a *R$20 bi* no Brasil com genéricos' },
    { icon: 'growth', text: 'Mercado de obesidade e diabetes movimentará *R$572 bilhões* até 2030' },
    { icon: 'health', text: 'Setor de saúde e bem-estar consolida\nresiliência e *faturamento bilionário*' },
  ],
} as const

export const DELIVERABLES = {
  tag: 'Entregáveis',
  // Ícones: platform | events | mentoring | network
  items: [
    { icon: 'platform', title: 'PLATAFORMA EDUCACIONAL COMPLETA', image: asset('/assets/geral/Plataforma-de-ensino.webp') },
    { icon: 'events', title: 'EXPERIÊNCIAS PRESENCIAIS', image: asset('/assets/geral/Slide-13.webp') },
    { icon: 'mentoring', title: 'MENTORIAS ONLINE', image: asset('/assets/geral/Mentorias-online.webp') },
    { icon: 'network', title: 'GRUPO DE NETWORKING SELETO E FECHADO', image: asset('/assets/geral/Grupo-de-networking.webp') },
  ],
} as const

export const ONLINE_TRAINING = {
  tagline: 'Formação online',
  title: 'Toda minha experiência concentrada em um único lugar, em conteúdos gravados e Ao Vivo',
  // Ícones: host | guests | platform | app
  items: [
    { icon: 'host', text: 'Duas mentorias por mês com o\nDr. Gustavo Sá sobre temas diversos' },
    {
      icon: 'guests',
      text: 'Marketing, vendas, Gestão e muito mais.',
    },
    {
      icon: 'platform',
      text: 'Uma plataforma educacional completa com aulas gravadas, metodologia própria e trilhas de aprendizado.',
    },
    { icon: 'app', text: 'Aplicativo Próprio para uma experiência única.' },
  ],
  image: {
    src: asset('/assets/geral/Slide-07.webp'),
    alt: 'Homem de suéter ao lado de um microfone e latas de filme',
  },
} as const

type CurriculumItem = { text: string; sub?: readonly string[] }

export const CURRICULUM: {
  tagline: string
  title: string
  blocks: readonly { title: string; highlight?: readonly string[]; items: readonly CurriculumItem[] }[]
} = {
  tagline: 'Formação online',
  title: 'Conteúdos técnicos e práticos para você escalar seus resultados enquanto aperfeiçoa suas técnicas',
  blocks: [
    {
      title: 'Bastidores práticos:',
      highlight: ['práticos'],
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
      highlight: ['Gestão', 'clínica'],
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
      description: 'Primeira mentoria online com o Dr. Gustavo Sá.',
      tagline: 'ONLINE',
    },
  ],
} as const

export const PRESENCIAL = {
  tagline: 'PRESENCIAL',
  title: '4 Experiências intimistas com Gustavo Sá e outros membros.',
  note: 'Datas das experiências presenciais a serem definidas com a turma.',
  image: {
    src: asset('/assets/geral/Slide-13.webp'),
    alt: 'Vista aérea de membros reunidos em uma mesa longa com o monograma SM',
  },
} as const

export const FEATURES = {
  items: [
    {
      title: 'Experiências Presenciais',
      description: '4 eventos presenciais exclusivos com o Gustavo Sá\ne seus convidados. Networking e experiências de alto nível.',
    },
    {
      title: 'Mentorias Online e Exclusivas',
      description: '24 encontros online.',
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
