<script>
  import { pricingPlans } from '$lib/pricing.js';
</script>

<section id="planos" class="q-section q-shell q-pricing-section" aria-labelledby="pricing-title">
  <div class="q-pricing-heading">
    <div class="q-section-head">
      <p class="q-eyebrow">Oferta comercial</p>
      <h2 id="pricing-title">Um plano único para operar autoatendimento com software.</h2>
      <p>Mensalidade clara, setup inicial sob escopo e implantação focada no fluxo real da sua operação.</p>
    </div>
    <aside class="q-pricing-note" aria-label="Resumo comercial">
      <strong>Hardware não incluso.</strong>
      <span>Qiosq fornece o software, configuração e onboarding. Tablets e periféricos ficam por conta da operação.</span>
    </aside>
  </div>

  <div class="q-pricing q-pricing-single q-pricing-compact">
    {#each pricingPlans as plan}
      <article class:highlight={plan.featured}>
        <div class="q-plan-main">
          <div class="q-plan-top">
            <span>{plan.name}</span>
            <small>{plan.badge}</small>
          </div>
          <h3>{plan.audience}</h3>
          <p>{plan.description}</p>
        </div>

        <div class="q-plan-offers">
          <div class="q-plan-price">
            <span>Mensal</span>
            <strong>{plan.price}</strong>
            {#if plan.period}
              <em>{plan.period}</em>
            {/if}
          </div>

          {#if plan.annual}
            <div class="q-plan-annual">
              <div>
                <span>{plan.annual.title}</span>
              </div>
              <strong>{plan.annual.installments}</strong>
              <em>{plan.annual.upfront}</em>
              <b>{plan.annual.saving}</b>
            </div>
          {/if}
        </div>
        <p class="q-plan-setup">{plan.setup}</p>

        <ul class="q-plan-feature-strip" aria-label={`Recursos do plano ${plan.name}`}>
          {#each plan.features.slice(0, 5) as feature}
            <li>{feature}</li>
          {/each}
        </ul>
        <a class="q-plan-cta" href="#demo">{plan.cta}</a>
      </article>
    {/each}
  </div>
</section>
