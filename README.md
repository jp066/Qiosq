# Qiosq Landing Page

Landing page institucional e comercial da Qiosq, um SaaS para transformar tablets Android em totens de autoatendimento para restaurantes, lanchonetes, dark kitchens, franquias e pequenos negocios alimenticios.

O projeto foi construido com SvelteKit, Vite e Tailwind CSS, com foco em performance, SEO, responsividade e uma narrativa clara de produto: autoatendimento, pagamento, upsell contextual e operacao multitenant.

## Visao Geral

A pagina apresenta a Qiosq como uma infraestrutura SaaS para operacoes de food service. A proposta principal e reduzir dependencia de totens proprietarios caros usando tablets Android comuns como pontos de pedido, pagamento e checkout inteligente.

Principais mensagens da landing:

- Tablets Android comuns podem virar pontos de autoatendimento.
- O fluxo cobre cardapio, carrinho, Pix/NFC, upsell e status do pedido.
- A operacao recebe pedidos roteados para cozinha, bar ou expedicao.
- A arquitetura foi pensada para multiplas unidades, marcas, usuarios e dispositivos.
- O plano comercial e unico: R$ 199/mes, com opcao anual e setup sob escopo.

## Stack Tecnica

- SvelteKit 2
- Svelte 5
- Vite 6
- Tailwind CSS 3
- PostCSS e Autoprefixer
- Adapter auto do SvelteKit
- Node.js 20.x

## Estrutura Principal

```txt
src/
  app.css
  app.html
  lib/
    pricing.js
    components/
      PricingSection.svelte
  routes/
    +layout.svelte
    +page.svelte

static/
  images/
    qiosq-logo.png
    qiosq-logo-cropped.png
    qiosq-logo-icon.png
    restaurant-kiosk-saas-hero.png
  robots.txt
  sitemap.xml
  site.webmanifest
```

## Arquivos Importantes

`src/routes/+page.svelte` concentra a maior parte da landing. Nele ficam os textos da pagina, metadados de SEO, JSON-LD, secoes comerciais, FAQ, formulario de demo e mockups visuais.

`src/lib/components/PricingSection.svelte` renderiza a secao de planos. Ela consome os dados de `pricingPlans` e deve ser ajustada quando a oferta comercial mudar.

`src/lib/pricing.js` guarda o conteudo comercial do plano: preco mensal, preco anual, economia, setup, recursos incluidos e observacoes sobre hardware.

`src/app.css` contem a identidade visual, layout responsivo, componentes da landing, grid, cards, botoes, formulario e ajustes mobile.

`static/sitemap.xml`, `static/robots.txt` e `static/site.webmanifest` apoiam indexacao, PWA basico e identidade do site.

## Secoes da Landing

1. Header
   Navegacao principal com links para infraestrutura, operacao, workflow, planos e chamada para demo.

2. Hero
   Apresenta a promessa central: "Tablets comuns. Operacao mais rapida." Tambem exibe indicadores de produto, CTAs e um mockup de checkout em tablet.

3. Infraestrutura
   Lista capacidades do produto: autoatendimento, checkout inteligente, pagamentos, multitenancy, fila operacional e dados comerciais.

4. Operacao
   Mostra o impacto operacional esperado: mais pedidos via tablets, mais upsell aceito e reducao de tempo no balcao.

5. Workflow
   Explica o processo de implantacao: configurar unidade, ativar tablets, guiar pedido e sincronizar operacao.

6. Casos de uso
   Posiciona o produto para lanchonetes, restaurantes por kilo, dark kitchens, franquias, pracas de alimentacao e operacoes com tablets existentes.

7. Planos
   Exibe a oferta comercial atual com plano unico, preco mensal, opcao anual, setup sob escopo e recursos incluidos.

8. FAQ
   Responde duvidas sobre a natureza da Qiosq, hardware, upsell, pagamento, franquias e internet instavel.

9. Demo
   Chamada final para solicitacao de demonstracao, com formulario simples usando `mailto:contato@qiosq.com.br`.

10. Footer
    Reforca navegacao, contato e links institucionais para LGPD e Termos.

## SEO e Metadados

A landing inclui:

- Title e description otimizados para busca.
- Meta keywords focadas em autoatendimento para restaurantes.
- Canonical para `https://qiosq.com.br`.
- Open Graph e Twitter Card.
- Manifest e icones.
- JSON-LD com `Organization`, `WebSite`, `WebPage`, `SoftwareApplication`, `BreadcrumbList` e `FAQPage`.
- Sitemap apontando para `https://qiosq.com.br/`.

Ao alterar dominio, nome do produto, preco ou proposta comercial, revise tambem:

- `siteUrl` em `src/routes/+page.svelte`
- `pageTitle`
- `pageDescription`
- `jsonLd`
- `static/sitemap.xml`
- `static/site.webmanifest`

## Como Rodar Localmente

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Por padrao, o Vite sobe em `127.0.0.1`. A URL local normalmente sera:

```txt
http://127.0.0.1:5173/
```

## Scripts Disponiveis

```bash
npm run dev
```

Inicia o servidor local com Vite.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run preview
```

Serve a build localmente para conferencia.

```bash
npm run check
```

Executa `svelte-check` usando `jsconfig.json`.

## Como Alterar Conteudo

Para alterar textos principais, metricas, FAQ, casos de uso ou capacidades do produto, edite os arrays dentro de `src/routes/+page.svelte`.

Para alterar o plano, preco, recursos ou observacoes comerciais, edite `src/lib/pricing.js`.

Para alterar estilos, responsividade, cores, espacamentos e componentes visuais, edite `src/app.css`.

Para alterar logo, icone ou imagens, substitua os arquivos em `static/images/` mantendo os mesmos nomes ou atualize as referencias no codigo.

## Identidade Visual

A interface usa uma base clara com roxo como cor principal da marca:

- Roxo principal: `#6D28FF`
- Roxo escuro: `#4C1DDB`
- Roxo vivo: `#8B3DFF`
- Azul escuro/navy: `#0B0B4F`
- Superficie clara: `#F5F5F7`
- Texto principal: `#111827`
- Texto secundario: `#6B7280`

As secoes seguem uma hierarquia visual forte, com hero grande, cards funcionais, mockup de tablet e blocos escaneaveis.

## Observacoes de Produto

- O hardware nao esta incluso na oferta.
- Tablets, suportes, impressoras e leitores ficam por conta da operacao.
- O setup inicial e sob escopo e inclui configuracao, cardapio, regras e onboarding.
- O fluxo de demo atual usa `mailto`, sem backend ou integracao com CRM.
- Os links `/lgpd` e `/termos` aparecem no footer, mas precisam existir como rotas caso sejam publicados.

## Checklist Antes de Publicar

- Rodar `npm run check`.
- Rodar `npm run build`.
- Conferir responsividade em mobile e desktop.
- Validar se `https://qiosq.com.br` e o dominio correto.
- Conferir `sitemap.xml` e `site.webmanifest`.
- Validar se os links `/lgpd` e `/termos` existem ou ajustar o footer.
- Testar o formulario de demo no navegador.
- Conferir preview social usando as tags Open Graph e Twitter Card.
