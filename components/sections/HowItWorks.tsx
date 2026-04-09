const WA = "https://wa.me/5541992316705";

export default function HowItWorks() {
  return (
    <section className="sec sec-white" id="como-funciona">
      <div className="w">
        <span className="section-tag">Como funciona</span>
        <h2 className="section-title">Do alinhamento ao time pronto.</h2>
        <p className="section-sub">Um fluxo simples, objetivo e com acompanhamento em cada etapa do caminho.</p>
        <div className="how-steps">
          <div className="how-step reveal"><div className="how-step-n"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><div className="how-step-title">Alinhamento</div><div className="how-step-desc">Entendemos contexto, perfil, cultura e os critérios reais da vaga.</div></div>
          <div className="how-step reveal"><div className="how-step-n"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div className="how-step-title">Atração e triagem</div><div className="how-step-desc">Busca ativa, triagem estruturada e filtro com critério humano.</div></div>
          <div className="how-step reveal"><div className="how-step-n"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div className="how-step-title">Entrevistas</div><div className="how-step-desc">Avaliação humana e técnica com foco em evidências reais.</div></div>
          <div className="how-step reveal"><div className="how-step-n"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg></div><div className="how-step-title">Shortlist</div><div className="how-step-desc">Perfis selecionados entregues com clareza e recomendação.</div></div>
          <div className="how-step accent reveal"><div className="how-step-n"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div className="how-step-title">Time pronto</div><div className="how-step-desc">Apoio no pós-shortlist para uma contratação segura.</div></div>
        </div>
        <div className="how-image reveal">
          <img src="/img/photos/team.jpg" alt="Equipe colaborando" />
          <div className="how-image-overlay" />
          <div className="how-image-text">
            <div className="how-image-quote">&ldquo;Contratar bem é um dos pilares do crescimento sustentável de qualquer empresa.&rdquo;</div>
            <a className="how-image-cta" href={WA} target="_blank" rel="noopener noreferrer">Abrir uma vaga →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
