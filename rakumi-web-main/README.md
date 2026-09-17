# Rakumi Website — V4

Versão V4 refinada do site Rakumi.

## Alterações

- Interface bilíngue EN / PT, com preferência salva em `localStorage`.
- Favicon minimalista recortado do próprio asset sheet Rakumi.
- Órbita editorial recortada da referência visual original e usada como imagem real no layout.
- Tipografia atualizada:
  - **Michroma** para identidade e títulos;
  - **Space Grotesk** para leitura e interface;
  - **JetBrains Mono** para detalhes técnicos.
- Sistema de ícones celestes mantido para elementos menores da interface.
- Mantidos HTML, CSS e JavaScript puros, sem frameworks.

## Estrutura

- `index.html`
- `style.css`
- `script.js`
- `assets/rakumi-moon.png`
- `assets/orbital-chart.png`
- `assets/favicon.png`

## Deploy

Envie os arquivos para o repositório `rakumidev/rakumi-web`, substituindo os arquivos de mesmo nome. O Cloudflare pode continuar usando o fluxo automático GitHub → deploy.

## Ajuste da órbita interativa

- ORDO, STATION e RAKUMI agora ficam dentro do próprio instrumento orbital.
- A órbita reage ao movimento do mouse com inclinação e deslocamento suaves para comunicar que é manipulável.
- Os três nomes continuam funcionando como modos do sistema orbital.
- O clique no espaço livre da órbita fixa temporariamente uma orientação; passar o mouse continua oferecendo uma prévia de movimento.
- `prefers-reduced-motion` é respeitado.


## Ajustes de conteúdo

- Canal atualizado para **Mikhael** (`@mikhael_mk`).
- A apresentação da história foi reduzida a fragmentos e a uma sinopse mais discreta, evitando revelar os temas centrais antes da leitura.
