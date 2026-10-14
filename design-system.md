# Design System — SelfMedClub · Proposta Comercial

Apresentação comercial em página única com **slides horizontais travados**: no desktop/tablet os slides em tela cheia só avançam pelos botões de navegação (ou setas do teclado) — a rolagem do mouse/trackpad não move os slides. No mobile os slides são empilhados verticalmente com rolagem normal.

Todos os tokens abaixo já estão declarados no `@theme {}` de `src/index.css`. Use sempre as classes utilitárias geradas — nunca valores hexadecimais ou px soltos nos componentes.

---

## 1. Tokens de Cor

A apresentação alterna dois tipos de slide: **claro** (padrão, `#dcddcf`) e **azul** (seção de destaque, `#1e3fa8`). Cada tipo tem seu próprio conjunto de tokens — **nunca misture tokens de um tipo no outro**.

### Slides claros (padrão)

| Token | Valor | Classe Tailwind | Uso | Contraste |
|---|---|---|---|---|
| `background` | `#dcddcf` | `bg-background` | Fundo padrão dos slides | — |
| `text-heading` | `#1a1a1a` | `text-text-heading` | Títulos e subtítulos | 12.7 |
| `text` | `#1a1a1a` | `text-text` | Texto corrido | 12.7 |
| `text-muted` | `#5a5a5a` | `text-text-muted` | Legendas, rótulos, numeração | 5.0 |
| `accent` | `#1e3fa8` | `bg-accent` / `text-accent` / `border-accent` | CTAs, palavras de destaque, números-chave, progresso | 6.6 |
| `accent-hover` | `#16307f` | `hover:bg-accent-hover` / `hover:text-accent-hover` | Hover de elementos com `accent` | — |
| `accent-foreground` | `#fafafa` | `text-accent-foreground` | Texto sobre `bg-accent` (botões) | 8.6 |
| `surface` | `rgba(26,26,26,0.04)` | `bg-surface` | Fundo glass | — |
| `border` | `rgba(26,26,26,0.08)` | `border-border` | Borda glass e divisórias | — |

### Slides azuis (seção de destaque)

| Token | Valor | Classe Tailwind | Uso | Contraste |
|---|---|---|---|---|
| `background-section` | `#1e3fa8` | `bg-background-section` | Fundo dos slides de destaque | — |
| `section-heading` | `#fafafa` | `text-section-heading` | Títulos e subtítulos | 8.6 |
| `section-text` | `#dcddcf` | `text-section-text` | Texto corrido | 6.6 |
| `section-muted` | `rgba(250,250,250,0.7)` | `text-section-muted` | Legendas, rótulos, numeração | ≥ 4.5 |
| `section-accent` | `#fafafa` | `bg-section-accent` / `text-section-accent` | CTAs e destaques em slide azul | 8.6 |
| `section-accent-hover` | `#dcddcf` | `hover:bg-section-accent-hover` | Hover de elementos com `section-accent` | — |
| `section-accent-foreground` | `#1e3fa8` | `text-section-accent-foreground` | Texto sobre `bg-section-accent` (botões) | 8.6 |
| `surface-section` | `rgba(255,255,255,0.06)` | `bg-surface-section` | Fundo glass | — |
| `border-section` | `rgba(255,255,255,0.12)` | `border-border-section` | Borda glass e divisórias | — |

> ⚠️ Nunca use `accent` em slide azul (some no fundo) nem `section-*` em slide claro (contraste insuficiente).

### Glassmorphism

Receita: **fundo translúcido + desfoque + borda translúcida + raio**.

| Token | Valor | Classe Tailwind |
|---|---|---|
| `blur-glass` | `16px` | `backdrop-blur-glass` |
| `radius-glass` | `24px` | `rounded-glass` |

**Card glass em slide claro:**
```
bg-surface backdrop-blur-glass border border-border rounded-glass
```

**Card glass em slide azul:**
```
bg-surface-section backdrop-blur-glass border border-border-section rounded-glass
```

### Botões

**Slide claro:** `bg-accent text-accent-foreground hover:bg-accent-hover`
**Slide azul:** `bg-section-accent text-section-accent-foreground hover:bg-section-accent-hover`

---

## 2. Tipografia

| Uso | Fonte | Token / classe | Pesos | Origem |
|---|---|---|---|---|
| Títulos (`h1` e `h2` — título de cada slide) | **Armany** | `--font-display` → `font-display` | 400, 500, 600, 700 (sem itálico) | Arquivos `.otf` em `public/fonts/` via `@font-face` |
| Subtítulo / texto de apoio abaixo do título | **Inter Light** | `--font-heading` → `font-heading font-light` | 300 + itálico 300 | Google Fonts |
| Texto corrido, cards (`h3`), rótulos | Instrument Sans | `--font-sans` → `font-sans` (já aplicada no `body`) | 400 a 700 + itálico | Google Fonts |

A Armany é aplicada automaticamente a `h1` e `h2` em `@layer base`.

---

## 3. Espaçamentos e Grid

### Slide

| Item | Mobile (< 768px) | Desktop/Tablet (≥ 768px, `md:`) |
|---|---|---|
| Dimensão do slide | `w-full`, altura mínima `min-h-svh` (empilhado vertical) | `w-screen h-svh` (trilho horizontal) |
| Container de conteúdo | `max-w-content` (1440px) `mx-auto w-full` | idem |
| Padding lateral | `px-slide-x` (20px) | `md:px-slide-x-lg` (80px) |
| Padding vertical | `py-slide-y` (80px) | `md:py-slide-y-lg` (96px) |
| Gap entre grupos/blocos | `gap-group` (24px) | `md:gap-group-lg` (48px) |
| Gap entre itens de lista/cards | `gap-item` (16px) | `md:gap-item-lg` (24px) |

### Estrutura padrão de um slide

```tsx
<section className="bg-background w-full min-h-svh md:w-screen md:h-svh shrink-0 flex items-center">
  <div className="max-w-content mx-auto w-full px-slide-x md:px-slide-x-lg py-slide-y md:py-slide-y-lg flex flex-col gap-group md:gap-group-lg">
    {/* conteúdo */}
  </div>
</section>
```

### Navegação entre slides

- **Desktop/Tablet (≥ 768px):** slides empilhados (`absolute inset-0`) num container `h-svh overflow-hidden`; o índice atual muda só por clique nos botões do `SlideProgress` ou pelas setas ←/→ (PageUp/PageDown). Transição em camadas (1,1s, `ease [0.77, 0, 0.175, 1]`): o slide novo desliza por cima do atual com sombra, e o anterior recua ao fundo (escala 0,88, cantos de 28px, véu escuro de 65% e parallax de 28% no sentido do empurrão). Voltando, o atual sai e o anterior volta à frente. A rolagem não move os slides.
- **Entrada vertical:** componentes passados em `<HorizontalScroll enterFromBottom={[...]}>` sobem (e em `enterFromTop={[...]}` descem) por cima do slide anterior, que fica parado por baixo, em vez de virem da direita. Hoje: `Quote` (slide 04) sobe; `Statement` (slide 05) desce.
- **Etapas internas:** slides passados em `<HorizontalScroll steps={[{ component, count }]}>` têm etapas — as setas percorrem as etapas antes de trocar de slide (voltando, o slide abre na última). O slide lê a etapa atual com `useSlideSteps()` (`src/lib/slide-steps.ts`). Hoje: `Deliverables` (slide 06), 1 etapa por painel da galeria.
- **Mobile (< 768px):** sem translação — slides empilhados em coluna, rolagem vertical normal.
- Touch targets mínimos de 44px em qualquer breakpoint.

---

## 4. Imagens

Sem imagens de composição por enquanto. Quando houver, os arquivos irão para `public/assets/` e esta seção será atualizada.
