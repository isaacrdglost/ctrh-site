const WA = "https://wa.me/5541992316705?text=Olá!%20Vim%20pelo%20site%20da%20CapTalento%20RH%20para%20abrir%20uma%20vaga.%20Gostaria%20de%20falar%20com%20um%20especialista%20para%20entender%20como%20funciona%20o%20processo.";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-left-bg" />
        <div className="hero-left-glow" />
        <div className="hero-left-glow2" />
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="hero-eyebrow-dot" />Recrutamento e Seleção Humanizado</div>
          <h1>Conectamos empresas aos <em>talentos certos.</em></h1>
          <p className="hero-desc">
            A CapTalento RH é especializada em Recrutamento e Seleção Humanizado. Atuamos como parceiros estratégicos para empresas que querem contratar com <strong>qualidade</strong>, <strong>agilidade</strong> e foco na <strong>cultura organizacional</strong>.
          </p>
          <div className="hero-btns">
            <a className="btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
              Abrir uma vaga
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a className="btn-outline-white" href="#vaga-certa">Conhecer o Vaga Certa</a>
          </div>
          <div className="hero-trust">
            {["100% Online", "Atendimento humanizado", "Fit cultural", "Comunicação clara"].map((t) => (
              <div className="hero-trust-item" key={t}>
                <div className="hero-trust-check"><svg width="9" height="9" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src="/img/photos/hero.jpg" alt="Profissional de RH" />
        <div className="hero-right-overlay" />
        <div className="hero-badge">
          <div className="hero-badge-num">+80</div>
          <div className="hero-badge-label">empresas atendidas</div>
        </div>
      </div>
    </section>
  );
}
