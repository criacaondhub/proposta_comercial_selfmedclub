# Design System — SelfMedClub · Proposta Comercial

Apresentação comercial em página única com **scroll lateral**: no desktop/tablet a rolagem vertical do mouse/trackpad move um trilho horizontal de slides em tela cheia. No mobile os slides são empilhados verticalmente com rolagem normal.

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

**Fonte única:** Instrument Sans (Google Fonts), importada no topo de `src/index.css` com `display=swap`.

| Propriedade | Valor |
|---|---|
| Família | `"Instrument Sans", ui-sans-serif, system-ui, sans-serif` → classe `font-sans` (já aplicada no `body`) |
| Pesos disponíveis | 400 a 700 (variável) — `font-normal`, `font-medium`, `font-semibold`, `font-bold` |
| Itálico | Disponível, 400 a 700 — `italic` |

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

### Comportamento do scroll lateral

- **Desktop/Tablet (≥ 768px):** wrapper com altura proporcional ao número de slides; um container `sticky top-0 h-svh overflow-hidden` contém o trilho `flex` que é transladado no eixo X conforme o progresso da rolagem vertical (Framer Motion `useScroll` + `useTransform`), suavizado pelo Lenis.
- **Mobile (< 768px):** sem translação — slides empilhados em coluna, rolagem vertical normal.
- Touch targets mínimos de 44px em qualquer breakpoint.

---

## 4. Imagens

Sem imagens de composição por enquanto. Quando houver, os arquivos irão para `public/assets/` e esta seção será atualizada.
