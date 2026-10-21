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
  symbol: {
    src: asset('/assets/01-capa/Logo-vertical-branco.svg'),
    alt: 'Brasão SelfMedClub',
  },
  title: 'Somos um Club Exclusivo\npara médicos que decidiram:',
  text: 'Faturar mais, acelerar seu crescimento na carreira,\nconstruir um posicionamento sólido, criar uma clínica de sucesso,\nvender mais e elevar suas conexões.',
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
  items: [
    {
      icon: 'platform',
      title: 'PLATAFORMA EDUCACIONAL COMPLETA',
      image: asset('/assets/geral/Plataforma-de-ensino.webp'),
    },
    {
      icon: 'events',
      title: 'EXPERIÊNCIAS PRESENCIAIS',
      image: asset('/assets/geral/Slide-13.webp'),
    },
    {
      icon: 'mentoring',
      title: 'MENTORIAS ONLINE',
      image: asset('/assets/geral/Mentorias-online.webp'),
    },
    {
      icon: 'network',
      title: 'GRUPO DE NETWORKING SELETO E FECHADO',
      image: asset('/assets/geral/Grupo-de-networking.webp'),
    },
  ],
} as const

export const ONLINE_TRAINING = {
  tagline: 'Plataforma educacional completa',
  title: 'Toda minha experiência concentrada em um único lugar, em conteúdos gravados e Ao Vivo',
  highlight: ['experiência concentrada'],
  // Ícones: streaming | tracks | app | guests. No texto dos boxes, \n = quebra de linha;
  // highlight = trechos do texto em destaque (escritos exatamente como no texto)
  items: [
    {
      icon: 'streaming',
      title: 'Usabilidade única',
      text: 'Área de membros estilo Netflix.',
      highlight: ['Área de membros'],
    },
    {
      icon: 'tracks',
      title: 'Conhecimento profundo',
      text: 'Trilhas de aprendizado completas.',
      highlight: ['aprendizado'],
    },
    {
      icon: 'app',
      title: 'Experiência premium',
      text: 'Aplicativo próprio para você\nassistir quando e de onde quiser.',
      highlight: ['Aplicativo'],
    },
    {
      icon: 'guests',
      title: 'Conteúdos práticos',
      text: 'Módulos exclusivos com convidados especiais.',
      highlight: ['exclusivos'],
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-07.webp'),
    alt: 'Homem de suéter ao lado de um microfone e latas de filme',
  },
} as const

export const EXPERIENCES = {
  tagline: 'Experiências presenciais',
  title: 'A primeira comunidade do Brasil com 4 eventos experiências no ano',
  highlight: ['experiências'],
  strike: ['eventos'],
  // Ícones: live | guests | replay
  items: [
    {
      icon: 'live',
      title: 'Mentorias com Dr. Gustavo Sá',
      text: '2 encontros AO VIVO por mês com o Dr.\u00a0Gustavo\u00a0Sá.',
      highlight: ['2 encontros'],
    },
    {
      icon: 'guests',
      title: 'Mentorias com convidados especiais',
      text: '1 encontro AO VIVO por mês com convidados especiais.',
      highlight: ['convidados especiais'],
    },
    {
      icon: 'replay',
      title: 'Não se preocupe se não acompanhar todos AO VIVO',
      text: 'Todos os encontros ficam salvos dentro da área de membros após 24 horas.',
      highlight: ['Todos os encontros'],
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-08.webp'),
    alt: '',
  },
} as const

export const ONLINE_MENTORING = {
  tagline: 'Mentorias online',
  title: 'Mais de 36 encontros AO VIVO por ano',
  highlight: ['36 encontros'],
  // Ícones: events | unique | dinner | together
  items: [
    {
      icon: 'events',
      title: 'Mais que eventos',
      text: '4 experiências presenciais no ano.',
      highlight: ['4 experiências'],
    },
    {
      icon: 'unique',
      title: 'Somos únicos no Brasil',
      text: 'Primeiro ecossistema para médicos que proporciona encontros que vão além de “palestrinha”.',
      highlight: ['Primeiro ecossistema', 'médicos'],
    },
    {
      icon: 'dinner',
      title: 'Exclusividade',
      text: 'De jantares intimistas a viagens exclusivas.',
      highlight: ['viagens exclusivas'],
    },
    {
      icon: 'together',
      title: 'Você fará parte disso',
      text: 'Todos os eventos são organizados junto aos membros.',
      highlight: ['eventos', 'organizados'],
    },
  ],
  image: {
    src: asset('/assets/geral/Slide-09.webp'),
    alt: '',
  },
} as const

export const NETWORKING = {
  tagline: 'Grupo de networking seleto e fechado',
  title: 'Queremos nos tornar a maior aceleradora de carreiras médicas da América Latina',
  highlight: ['maior aceleradora'],
  // Ícones: curated | community | referral
  items: [
    {
      icon: 'curated',
      title: 'Não é PAGOU, ENTROU!',
      text: 'Para saber sobre o SelfMed Club, o médico passa por uma avaliação do Dr. Gustavo Sá.',
      highlight: ['SelfMed Club'],
    },
    {
      icon: 'community',
      title: 'Comunidade no WhatsApp',
      text: 'Temos um grupo fechado no WhatsApp com os membros e o Dr. Gustavo. Trocas de experiência, networking e mais.',
      highlight: ['Trocas de experiência'],
    },
    {
      icon: 'referral',
      title: 'Member Get Member',
      text: 'Você pode indicar um médico para fazer parte do club, caso ele feche, você ganha R$4.000,00 como forma de agradecimento por fazer nosso ecossistema crescer.',
      highlight: ['você ganha R$4.000,00', 'nosso ecossistema crescer'],
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

// Slide 16 — Bônus 01. Os blocos aparecem um por clique
export const CONCIERGE = {
  // Ícones: calendar | travel | results | support
  items: [
    { icon: 'calendar', text: 'Gestão das datas de Encontros Presenciais;' },
    { icon: 'travel', text: 'Auxílio com translados, hospedagem e estadia do mentorado;' },
    { icon: 'results', text: 'Acompanhamento de Resultados para garantir seu crescimento;' },
    { icon: 'support', text: 'Suporte para dúvidas e dificuldades.' },
  ],
} as const

// Slide 17 — Bônus 02. Os blocos aparecem um por clique
export const WORKSHOP = {
  // Ícones: library | review | strategist
  items: [
    {
      icon: 'library',
      text: 'Acesso a uma biblioteca de roteiros de anúncios já validados para você replicar e conseguir ter clientes querendo fechar com você;',
    },
    {
      icon: 'review',
      text: 'Os nossos especialistas em marketing avaliarão os seus anúncios gravados para você sair do Workshop com eles prontos;',
    },
    {
      icon: 'strategist',
      text: 'Na prática, meu estrategista de marketing pessoal abrirá 2 horas da agenda dele para uma imersão completa com vocês.',
    },
  ],
} as const

// Slide 18 — Bônus 03. Os blocos aparecem um por clique
export const FELLOW = {
  // Ícones: routine | protocols | clinic | practice
  items: [
    { icon: 'routine', text: 'Acompanhe de perto a rotina clínica do Dr. Gustavo Sá;' },
    { icon: 'protocols', text: 'Observe os protocolos e a aplicação prática dos conhecimentos;' },
    { icon: 'clinic', text: 'Vivencie o dia a dia de um consultório de referência;' },
    { icon: 'practice', text: 'Aprofunde seus conhecimentos diretamente na prática.' },
  ],
} as const

// Slide 19 — Bônus 04. Os blocos aparecem um por clique; \u00a0 = espaço que não quebra (mantém "Dr. Gustavo Sá" junto)
export const MENTORIA_INDIVIDUAL = {
  // Ícones: meeting | plan | unlock
  items: [
    { icon: 'meeting', text: 'Encontro individualizado de até 1h com o Dr.\u00a0Gustavo\u00a0Sá;' },
    { icon: 'plan', text: 'Análise do seu momento atual para traçar um plano personalizado;' },
    { icon: 'unlock', text: 'Identificarem juntos o que está travando seu crescimento.' },
  ],
} as const
