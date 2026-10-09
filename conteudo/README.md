# Conteúdo da apresentação

Cada arquivo `NN-nome.md` desta pasta é **um slide**, na ordem do número.

## Como usar

1. Preencha o `.md` do slide (fundo, título, textos, itens, CTA, imagens).
2. Coloque as imagens daquele slide em `public/assets/NN-nome/`.
3. Mande para o Agente 2: *"Slide 01 pronto"* — ele lê o arquivo e constrói.

- **Adicionar slide:** copie qualquer `.md`, renumere (ex.: `05b-cases.md` ou renumere os seguintes) e crie a pasta de imagens com o mesmo nome.
- **Remover slide:** apague o `.md` e a pasta de imagens correspondente.
- Campos opcionais podem ficar em branco.

## Estrutura

```
conteudo/                     ← textos (não vai para o site, só referência)
  01-capa.md
  02-sobre.md
  ...

public/assets/                ← imagens (vão para o site)
  geral/                      ← logo, favicon, imagem de compartilhamento (og-image)
  01-capa/
  02-sobre/
  ...
```

## Regras para as imagens

| Item | Recomendação |
|---|---|
| Formato | `.webp` (fotos) ou `.svg` (logos, ícones, ilustrações vetoriais). `.png` só se precisar de transparência e não houver SVG. |
| Nome do arquivo | minúsculas, sem acento, sem espaço, com hífen: `equipe-reuniao.webp` |
| Largura máxima | 2400px para imagens de fundo / tela cheia; 1200px para imagens de meia tela |
| Peso | até ~300 KB por imagem (exceto fundos de tela cheia, até ~500 KB) |
| Fundo recortado | Se a imagem for recortada (sem fundo), use `.webp` ou `.png` com transparência |

### Arquivos da pasta `geral/`

| Arquivo | Uso |
|---|---|
| `logo.svg` | Logo principal (versão escura, para fundo claro) |
| `logo-branco.svg` | Logo para os slides azuis |
| `favicon.svg` | Ícone da aba do navegador |
| `og-image.jpg` | Imagem de compartilhamento no WhatsApp/redes — 1200 × 630px |
