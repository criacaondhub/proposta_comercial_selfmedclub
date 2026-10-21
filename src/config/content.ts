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
  text: 'Acelerar sua carreira, construir posicionamento,\ntransformar seus resultados, vender mais e elevar suas conexões\ne criar uma carreira de sucesso.',
} as const

export const QUOTE = {
  // Trecho entre *asteriscos* fica na Armany (fonte do h1), em itálico e negrito
  text: 'Não adianta ser bom, é preciso ser visto. *Eu só conquistei os resultados que tenho* porque entendi como se constrói autoridade e audiência para crescer o meu nome e o da minha clínica.',
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
  // Valores entre *asteriscos* ficam em destaque. Ícones: money | growth | health
  items: [
    {
      icon: 'money',
      text: 'Mercado de *clínicas médicas* e *cuidado com o corpo num geral*, movimentaram mais de *R$500 bilhões* de reais no Brasil no ano passado.',
    },
    {
      icon: 'growth',
      text: 'Nos próximos dez anos, a tendência é este mercado *crescer +49%*. Vivemos numa era onde *saúde*, *longevidade* e *cuidados* com o corpo se tornaram o novo hype.',
    },
    { icon: 'health', text: 'Setor de saúde e bem-estar consolida\nresiliência e *faturamento bilionário*' },
  ],
} as const

export const DELIVERABLES = {
  tag: 'Entregáveis',
  // Ícones: platform | events | mentoring | network
  // ⚠️ bullets PROVISÓRIOS (lorem ipsum) — aguardando o copy
  items: [
    {
      icon: 'platform',
      title: 'PLATAFORMA EDUCACIONAL COMPLETA',
      image: asset('/assets/geral/Plataforma-de-ensino.webp'),
      bullets: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor', 'Incididunt ut labore et dolore'],
    },
    {
      icon: 'events',
      title: 'EXPERIÊNCIAS PRESENCIAIS',
      image: asset('/assets/geral/Slide-13.webp'),
      bullets: ['Magna aliqua ut enim ad minim', 'Veniam quis nostrud', 'Exercitation ullamco laboris', 'Nisi ut aliquip ex ea commodo'],
    },
    {
      icon: 'mentoring',
      title: 'MENTORIAS ONLINE',
      image: asset('/assets/geral/Mentorias-online.webp'),
      bullets: ['Duis aute irure dolor', 'In reprehenderit in voluptate', 'Velit esse cillum dolore', 'Eu fugiat nulla pariatur'],
    },
    {
      icon: 'network',
      title: 'GRUPO DE NETWORKING SELETO E FECHADO',
      image: asset('/assets/geral/Grupo-de-networking.webp'),
      bullets: ['Excepteur sint occaecat', 'Cupidatat non proident', 'Sunt in culpa qui officia', 'Deserunt mollit anim id est'],
    },
  ],
} as const

export const ONLINE_TRAINING = {
  tagline: 'Plataforma educacional completa',
  title: 'Toda minha experiência concentrada em um único lugar, em conteúdos gravados e Ao Vivo',
  highlight: ['experiência concentrada'],
  // Ícones: streaming | tracks | app | guests
  items: [
    {
      icon: 'streaming',
      title: 'Seu streaming de carreira', // alternativa: 'Aprender no seu ritmo'
      text: 'Uma plataforma educacional com experiência no estilo Netflix.',
    },
    {
      icon: 'tracks',
      title: 'Trilhas de evolução', // alternativa: 'Um caminho, passo a passo'
      text: 'Trilhas de aprendizado pensadas para você evoluir como médico, gestor e empresário.',
    },
    {
      icon: 'app',
      title: 'O clube na palma da mão', // alternativa: 'Acesso sem limites'
      text: 'Aplicativo próprio para assistir e reassistir quando e onde quiser, no computador ou no celular.',
    },
    {
      icon: 'guests',
      title: 'Convidados de peso', // alternativa: 'Grandes nomes, perto de você'
      text: 'Conteúdos gravados com convidados especiais.',
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-07.webp'),
    alt: 'Homem de suéter ao lado de um microfone e latas de filme',
  },
} as const

// ⚠️ TEXTO PROVISÓRIO (lorem ipsum) — aguardando o copy do slide 08
export const EXPERIENCES = {
  tagline: 'Experiências presenciais',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
  highlight: ['dolor sit amet'],
  // Ícones: events | places | dinner | connections
  items: [
    {
      icon: 'events',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: 'places',
      title: 'Consectetur adipiscing',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim.',
    },
    {
      icon: 'dinner',
      title: 'Sed do eiusmod tempor',
      text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: 'connections',
      title: 'Ut enim ad minim',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-08.webp'),
    alt: '',
  },
} as const

// ⚠️ TEXTO PROVISÓRIO (lorem ipsum) — aguardando o copy do slide 09
export const ONLINE_MENTORING = {
  tagline: 'Mentorias online',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
  highlight: ['consectetur adipiscing'],
  // Ícones: live | schedule | questions | insights
  items: [
    {
      icon: 'live',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: 'schedule',
      title: 'Consectetur adipiscing',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim.',
    },
    {
      icon: 'questions',
      title: 'Sed do eiusmod tempor',
      text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: 'insights',
      title: 'Ut enim ad minim',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-09.webp'),
    alt: '',
  },
} as const

// ⚠️ TEXTO PROVISÓRIO (lorem ipsum) — aguardando o copy do slide 10
export const NETWORKING = {
  tagline: 'Grupo de networking seleto e fechado',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod',
  highlight: ['dolor sit amet'],
  // Ícones: curated | closed | network | business
  items: [
    {
      icon: 'curated',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: 'closed',
      title: 'Consectetur adipiscing',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim.',
    },
    {
      icon: 'network',
      title: 'Sed do eiusmod tempor',
      text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: 'business',
      title: 'Ut enim ad minim',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ],
  image: {
    src: asset('/assets/geral/Grupo-de-networking.webp'),
    alt: 'Quatro pessoas conversando sentadas em roda, ao ar livre',
  },
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
      description: 'Primeira mentoria online com o Dr. Gustavo Sá.',
      tagline: 'ONLINE',
    },
  ],
} as const
