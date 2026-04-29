<script>
  import PricingSection from '$lib/components/PricingSection.svelte';
  import { pricingPlans } from '$lib/pricing.js';

  const siteUrl = 'https://qiosq.com.br';
  const pageTitle = 'Qiosq | Autoatendimento para Restaurantes';
  const pageDescription = 'Transforme tablets Android em pontos de autoatendimento para reduzir filas, vender mais por pedido e acelerar pagamentos em restaurantes, lanchonetes e operações de alto fluxo.';
  const ogImage = `${siteUrl}/images/qiosq-logo-cropped.png`;

  const metrics = [
    { value: '34s', label: 'tempo medio ate pagamento', detail: 'pedido, adicional e Pix no mesmo fluxo' },
    { value: '+18%', label: 'em pedido médio', detail: 'regras de upsell por categoria e horario' },
    { value: 'multi', label: 'lojas e dispositivos', detail: 'opere tablets, usuários e unidades em uma única plataforma' }
  ];

  const tabletItems = [
    { name: 'Burger classico', option: 'ponto ao ponto, sem cebola', price: 'R$ 29,90' },
    { name: 'Batata individual', option: 'sugestao aceita no checkout', price: 'R$ 11,90' },
    { name: 'Refrigerante lata', option: 'combo recomendado', price: 'R$ 7,90' }
  ];

  const operations = [
    { id: '#2048', channel: 'Tablet 03', status: 'Pago', station: 'Chapa', time: '12:42' },
    { id: '#2049', channel: 'Tablet 01', status: 'Novo', station: 'Bar', time: '12:43' },
    { id: '#2050', channel: 'Tablet 02', status: 'Fila', station: 'Expedição', time: '12:44' }
  ];
  const capabilities = [
    {
      icon: 'tablet',
      title: 'Tablet virando ponto de venda',
      signal: 'Sem totem proprietário',
      text: 'Use dispositivos Android para receber pedidos, montar carrinho, confirmar pagamento e acompanhar status.'
    }
    {
      icon: 'spark',
      title: 'Venda adicional automática',
      signal: 'Mais ticket médio',
      text: 'Combos, adicionais e upgrades aparecem no checkout sem depender da abordagem da equipe, apenas do historico do usuário.'
    }
    {
      icon: 'payment',
      title: 'Pagamento integrado',
      signal: 'Pagamento antes da produção',
      text: 'Pix, NFC e confirmação de pagamento entram no fluxo antes do pedido seguir para a cozinha.'
    }
    {
      icon: 'tenant',
      title: 'Controle por unidade',
      signal: 'Pronto para crescer',
      text: 'Organize lojas, usuários, dispositivos e permissões sem misturar operações diferentes.'
    }
    {
      icon: 'queue',
      title: 'Pedido direto para operação',
      signal: 'Comanda roteada',
      text: 'Pedidos chegam com status claro e menos retrabalho manual.'
    }
    {
      icon: 'chart',
      title: 'Indicadores que mostram o gargalo',
      signal: 'Decisão com dados',
      text: 'Veja pedido médio, itens mais vendidos, horários de pico e desempenho por loja.'
    }
  ];

  const workflow = [
    ['01', 'Monte o cardápio', 'Configure produtos, adicionais, combos, horários e regras comerciais por loja.'],
    ['02', 'Ative os tablets', 'Cada dispositivo recebe unidade, identificação e permissão para operar.'],
    ['03', 'Cliente pede e paga', 'O pedido acontece no tablet com sugestões automáticas e pagamento integrado.'],
    ['04', 'Pedido chega na operação', 'Cozinha, balcão e painel acompanham status sem retrabalho manual.']
  ];

  const useCases = [
    'Lanchonetes de alto fluxo',
    'Restaurantes por kilo e balcão',
    'Dark kitchens com retirada',
    'Franquias e redes regionais',
    'Praças de alimentação',
    'Operações com tablets existentes'
  ];

  const faqs = [
    ['Qiosq e uma marca de restaurante?', 'Não. A Qiosq é um software de autoatendimento para restaurantes, lanchonetes e operações de alto fluxo.'],
    ['Preciso comprar um totem proprietario?', 'Não. A proposta é usar tablets Android comuns como pontos de pedido e pagamento.'],
    ['Como a Qiosq ajuda a aumentar o pedido médio?', 'Durante o pedido, o sistema sugere adicionais, combos e upgrades de acordo com o item escolhido e as regras da loja.'],
    ['O pedido pode ir para cozinha só depois do pagamento?', 'Sim. O fluxo pode confirmar Pix ou NFC antes de imprimir ou enviar a comanda para produção.'],
    ['Serve para mais de uma unidade?', 'Sim. A Qiosq separa lojas, usuários, dispositivos e relatórios para cada operação.'],
    ['Da para operar com internet instavel?', 'O produto foi desenhado para operacao conectada, com tolerancia parcial para instabilidades curtas no ponto de pedido.']
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Qiosq',
        url: siteUrl,
        logo: ogImage,
        sameAs: []
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Qiosq',
        inLanguage: 'pt-BR',
        publisher: { '@id': `${siteUrl}/#organization` }
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${siteUrl}/#website` },
        primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: siteUrl
          }
        ]
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#software`,
        name: 'Qiosq',
        url: siteUrl,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Restaurant self-service kiosk software',
        operatingSystem: 'Android, Web',
        image: ogImage,
        description: pageDescription,
        publisher: { '@id': `${siteUrl}/#organization` },
        audience: {
          '@type': 'Audience',
          audienceType: 'Restaurantes, lanchonetes, dark kitchens, franquias e pequenos negócios alimentícios'
        },
        offers: {
          '@type': 'Offer',
          price: pricingPlans[0].price.replace('R$ ', '').replace('.', '').replace(',', '.'),
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/#planos`,
          description: `${pricingPlans[0].name}: ${pricingPlans[0].price}${pricingPlans[0].period}`
        },
        featureList: capabilities.map((item) => item.title),
        keywords:
          'totem de autoatendimento, totem para restaurante, sistema para lanchonete, autoatendimento restaurante, kiosk digital restaurante, SaaS para restaurantes, cardápio digital, sistema de pedidos, upsell restaurante, automação para restaurantes'
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq[0],
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq[1]
          }
        }))
      }
    ]
  };

  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta
    name="description"
    content={pageDescription}
  />
  <meta
    name="keywords"
    content="totem de autoatendimento, totem para restaurante, sistema para lanchonete, autoatendimento restaurante, kiosk digital restaurante, SaaS para restaurantes, cardápio digital, sistema de pedidos, upsell restaurante, automação para restaurantes, infraestrutura kiosk"
  />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="author" content="Qiosq" />
  <meta name="publisher" content="Qiosq" />
  <meta name="application-name" content="Qiosq" />
  <meta name="apple-mobile-web-app-title" content="Qiosq" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="theme-color" content="#6D28FF" />
  <link rel="canonical" href={siteUrl} />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="icon" type="image/png" href="/images/qiosq-logo-icon.png" />
  <link rel="apple-touch-icon" href="/images/qiosq-logo-icon.png" />
  <link rel="alternate" hreflang="pt-BR" href={siteUrl} />
  <link rel="alternate" hreflang="x-default" href={siteUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Qiosq" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta
    property="og:description"
    content={pageDescription}
  />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content="Logo da Qiosq, SaaS de autoatendimento para restaurantes" />
  <meta property="og:image:width" content="1536" />
  <meta property="og:image:height" content="1024" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta
    name="twitter:description"
    content={pageDescription}
  />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:image:alt" content="Logo da Qiosq, SaaS de autoatendimento para restaurantes" />
  {@html jsonLdScript}
</svelte:head>

<main class="q-page">
  <header class="q-header q-shell">
    <a class="q-brand" href="#top" aria-label="Inicio Qiosq">
      <img src="/images/qiosq-logo-cropped.png" alt="Qiosq" width="220" height="160" />
    </a>
    <nav class="q-nav" aria-label="Navegação principal">
      <a href="#infra">Infraestrutura</a>
      <a href="#operacao">Operação</a>
      <a href="#workflow">Workflow</a>
      <a href="#planos">Planos</a>
    </nav>
    <a class="q-header-cta" href="#demo">Solicitar demo</a>
  </header>

  <section id="top" class="q-hero q-shell" aria-labelledby="hero-title">
    <div class="q-hero-copy">
      <p class="q-eyebrow">Autoatendimento inteligente para estabelecimentos</p>
      <h1 id="hero-title">Transforme tablets em terminais inteligentes de pedido e pagamento.</h1>
      <p>
        A Qiosq transforma tablets Android em pontos de autoatendimento para reduzir filas,
        acelerar pagamentos e sugerir adicionais automaticamente durante o pedido.
      </p>
      <div class="q-actions" aria-label="Acoes principais">
        <a class="q-primary" href="#demo">Agendar demonstração</a>
        <a class="q-secondary" href="#operacao">Ver como funciona</a>
      </div>
      <dl class="q-metrics" aria-label="Indicadores do produto">
        {#each metrics as metric}
          <div>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
            <small>{metric.detail}</small>
          </div>
        {/each}
      </dl>
    </div>

    <div class="q-hero-visual" aria-label="Mockup operacional Qiosq">
      <div class="q-device">
        <div class="q-device-top">
          <span>Qiosq</span>
          <strong>Tablet A-03</strong>
        </div>
        <div class="q-kiosk-ui">
          <section class="q-menu-pane" aria-label="Checkout no tablet">
            <div class="q-ui-head">
              <span>Pedido #2048</span>
              <b>12:42</b>
            </div>
            <h2>Checkout inteligente</h2>
            <div class="q-item featured">
              <span class="q-food-dot"></span>
              <div>
                <strong>Combo almoço</strong>
                <small>burger, batata e bebida</small>
              </div>
              <b>R$ 49,70</b>
            </div>
            <div class="q-suggestion">              <strong>Adicionar sobremesa por R$ 8,90?</strong>
              <button>Adicionar</button>
            </div>
          </section>

          <aside class="q-cart-pane" aria-label="Carrinho e pagamento">
            <div class="q-cart-head">
              <strong>Carrinho</strong>
              <span>3 itens</span>
            </div>
            {#each tabletItems as item}
              <div class="q-cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.option}</small>
                </div>
                <span>{item.price}</span>
              </div>
            {/each}
            <div class="q-payment">
              <span>Pagamento</span>
              <strong>Pix confirmado</strong>
            </div>
          </aside>
        </div>
      </div>

      <aside class="q-ops-card" aria-label="Painel operacional">
        <div class="q-card-head">
          <span>Operations</span>
          <strong>Fila sincronizada</strong>
        </div>
        {#each operations as order}
          <div class="q-order-row">
            <b>{order.id}</b>
            <span>{order.channel}</span>
            <em>{order.status}</em>
            <small>{order.time}</small>
          </div>
        {/each}
      </aside>
    </div>
  </section>

  <section id="infra" class="q-section q-shell" aria-labelledby="infra-title">
    <div class="q-section-head">
      <p class="q-eyebrow">Do balcão ao checkout</p>
      <h2 id="infra-title">Um fluxo de pedido mais rápido, previsível e fácil de controlar.</h2>
      <p>
        A Qiosq conecta cardápio, carrinho, pagamento, impressão e painel operacional em uma única experiência
        para o cliente pedir sem travar o balcão.
      </p>
    </div>
    <div class="q-capability-grid">
      {#each capabilities as item}
        <article>
          <span class="q-capability-mark" aria-hidden="true">
            {#if item.icon === 'tablet'}
              <svg viewBox="0 0 24 24" role="img">
                <rect x="6" y="3" width="12" height="18" rx="3"></rect>
                <path d="M10 17h4"></path>
              </svg>
            {:else if item.icon === 'spark'}
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"></path>
                <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"></path>
              </svg>
            {:else if item.icon === 'payment'}
              <svg viewBox="0 0 24 24" role="img">
                <rect x="3" y="6" width="18" height="12" rx="3"></rect>
                <path d="M3 10h18"></path>
                <path d="M7 15h4"></path>
              </svg>
            {:else if item.icon === 'tenant'}
              <svg viewBox="0 0 24 24" role="img">
                <rect x="4" y="5" width="7" height="7" rx="2"></rect>
                <rect x="13" y="5" width="7" height="7" rx="2"></rect>
                <rect x="8.5" y="14" width="7" height="5" rx="2"></rect>
              </svg>
            {:else if item.icon === 'queue'}
              <svg viewBox="0 0 24 24" role="img">
                <path d="M5 7h14"></path>
                <path d="M5 12h14"></path>
                <path d="M5 17h8"></path>
                <circle cx="18" cy="17" r="1"></circle>
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" role="img">
                <path d="M5 19V9"></path>
                <path d="M12 19V5"></path>
                <path d="M19 19v-7"></path>
                <path d="M4 19h16"></path>
              </svg>
            {/if}
            <i></i>
          </span>
          <small class="q-capability-signal">{item.signal}</small>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </section>

  <section id="operacao" class="q-contrast-section" aria-labelledby="operation-title">
    <div class="q-shell q-operation-layout">
      <div>
        <p class="q-eyebrow on-dark">Operação em horário de pico</p>
        <h2 id="operation-title">Atenda mais clientes sem transformar o balcão em gargalo.</h2>
        <p>
          O cliente faz o pedido sozinho. A operação recebe pagamento confirmado, comanda roteada e dados claros
          para cozinha, bar ou expedição trabalharem com menos ruído.
        </p>
      </div>
      <div class="q-control-panel" aria-label="Resumo de controle operacional">
        <div class="q-control-top">
          <strong>Unidade Centro</strong>
          <span>online</span>
        </div>
        <dl>
          <div>
            <dt>Pedidos em tablets</dt>
            <dd>72%</dd>
          </div>
          <div>
            <dt>Upsell aceito</dt>
            <dd>21%</dd>
          </div>
          <div>
            <dt>Tempo médio no balcão</dt>
            <dd>-38%</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section id="workflow" class="q-section q-shell" aria-labelledby="workflow-title">
    <div class="q-section-head compact">
      <p class="q-eyebrow">Do setup ao pedido pago</p>
      <h2 id="workflow-title">Um workflow claro para colocar autoatendimento em produção.</h2>
    </div>
    <div class="q-workflow">
      {#each workflow as step}
        <article>
          <span>{step[0]}</span>
          <h3>{step[1]}</h3>
          <p>{step[2]}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="q-use-cases q-shell" aria-labelledby="use-title">
    <div>
      <p class="q-eyebrow">Onde Qiosq entra</p>
      <h2 id="use-title">Para negócios onde fila, caixa e pedido manual viram custo.</h2>
    </div>
    <div class="q-use-grid">
      {#each useCases as useCase}
        <span>{useCase}</span>
      {/each}
    </div>
  </section>

  <PricingSection />

  <section id="faq" class="q-section q-shell" aria-labelledby="faq-title">
    <div class="q-section-head compact">
      <p class="q-eyebrow">FAQ</p>
      <h2 id="faq-title">Perguntas antes da primeira demonstração.</h2>
    </div>
    <div class="q-faq">
      {#each faqs as faq}
        <details>
          <summary>{faq[0]}</summary>
          <p>{faq[1]}</p>
        </details>
      {/each}
    </div>
  </section>

  <section id="demo" class="q-demo q-shell" aria-labelledby="demo-title">
    <div>
      <p class="q-eyebrow on-dark">Próximo passo</p>
      <h2 id="demo-title">Veja como a Qiosq encaixa no seu fluxo de pedido, pagamento e cozinha.</h2>
      <p>
        Em uma demonstração curta, mapeamos cardápio, dispositivos, pagamento, impressão e fluxo até a cozinha.
      </p>
    </div>
    <form class="q-form" action="mailto:contato@qiosq.com.br" method="post" enctype="text/plain">
      <label>
        <span>Nome</span>
        <input name="nome" type="text" autocomplete="name" placeholder="Seu nome" />
      </label>
      <label>
        <span>Contato</span>
        <input name="contato" type="text" autocomplete="email" placeholder="email ou WhatsApp" />
      </label>
      <button type="submit">Solicitar demonstração</button>
    </form>
  </section>
</main>

<footer class="q-footer">
  <div class="q-shell q-footer-inner">
    <a class="q-brand" href="#top" aria-label="Voltar ao topo">
      <img src="/images/qiosq-logo-cropped.png" alt="Qiosq" width="180" height="130" />
    </a>
    <nav aria-label="Links do rodape">
      <a href="#infra">Infraestrutura</a>
      <a href="#operacao">Operação</a>
      <a href="#planos">Planos</a>
      <a href="/lgpd">LGPD</a>
      <a href="/termos">Termos</a>
      <a href="mailto:contato@qiosq.com.br">Contato</a>
    </nav>
  </div>
</footer>
