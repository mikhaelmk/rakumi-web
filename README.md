# Rakumi

Meu site pessoal: o lugar onde guardo o que programo, escrevo e invento.
Tem os projetos de código, o Fragmentos, o canal M!KHAEL e o tema Nocturne
para Vencord.

No ar em: https://mikhaelmk.github.io/rakumi-web/

HTML, CSS e JavaScript aqui também fazem parte do meu aprendizado; o projeto
não tenta representar domínio profissional de desenvolvimento web.


## Stack

HTML, CSS e JavaScript puros. Sem framework, sem etapa de build, sem
dependências e sem `package.json`.


## Estrutura

```
index.html            página principal
nocturne.html         página do tema Nocturne
style.css             estilos das duas páginas (índice das seções no topo)
nocturne.css          estilos só da página do Nocturne
script.js             textos em PT/EN e a troca de idioma
nocturne.js           copia a URL do tema na página do Nocturne
themes/
  Nocturne.theme.css  o tema para Vencord (o arquivo que as pessoas baixam)
assets/
  art/                ilustrações: medalhão do hero e guaxinins
  icons/              ícones redondos dos cards
  ornaments/          divisor e as fatias da moldura da seção Sobre
  fonts/              Fraunces e Manrope (.woff2)
  favicon.png
```

A moldura da seção Sobre é uma imagem fatiada em topo, meio e base
(`frame-*.png`). Só a barra lisa (`frame-fill.png`) se repete, então a
moldura cresce com o texto sem deformar luas e estrelas. Os comentários na
seção 10 do `style.css` explicam as medidas.


## Abrir localmente

Use um servidor local na pasta do projeto, por exemplo:

- a extensão **Live Server** do VS Code, ou
- `python -m http.server` e abrir `http://localhost:8000`

Abrir o `index.html` com duplo clique (`file://`) pode funcionar, mas os
navegadores tratam a política de segurança (CSP) de jeitos diferentes nesse
modo, então prefira o servidor.


## Deploy

O GitHub Pages publica a branch `main` direto da raiz do repositório.
Não existe build: o que está no repositório é o que vai pro ar, cerca de
um minuto depois do `git push`.


## Como mudar o conteúdo

- **Textos:** ficam em `script.js`, no objeto `translations`, uma vez em
  `en` e outra em `pt`. No HTML, o elemento aponta para a chave com
  `data-i18n="chave"`. O texto escrito direto no HTML é só a versão em
  inglês que aparece antes do JavaScript rodar.
- **Texto novo:** crie a chave nos dois idiomas e use `data-i18n` no HTML
  (`data-i18n-alt` para `alt`, `data-i18n-aria-label` para `aria-label`).
- **Projetos:** cada card é um `<article class="project-card">` em
  `index.html` (seções `#projects` e `#elsewhere`).
- **Imagens:** ficam em `assets/`. Imagem decorativa leva `alt=""`; imagem
  com conteúdo leva uma descrição.
- **Cores, fontes e medidas:** variáveis no topo do `style.css` (seção 1).


## Segurança

- **Content Security Policy** numa tag `<meta>` nas duas páginas: o
  navegador só carrega scripts, estilos, fontes e imagens do próprio site.
  Se um dia entrar algo externo (fonte, script, imagem de outro domínio,
  iframe), a origem precisa ser liberada na CSP **das duas páginas**,
  senão o navegador bloqueia.
- Nada de `innerHTML`: os textos entram com `textContent`.
- Nada de `<script>` ou `style=""` inline no HTML (a CSP bloqueia).
- Links externos com `target="_blank"` usam `rel="noopener noreferrer"`.
- **Limite do GitHub Pages:** ele não permite headers próprios. Por isso
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` e o
  `frame-ancestors` (que impede o site de ser embutido em iframe) não estão
  configurados. HTTPS e HSTS já vêm do `github.io`. Se o site for para o
  Cloudflare Pages, esses headers vão num arquivo `_headers`.


## Fontes

Fraunces e Manrope, do Google Fonts, sob a SIL Open Font License 1.1.
Só o subconjunto latino (português, inglês e francês).
