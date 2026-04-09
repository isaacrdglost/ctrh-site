const WA = "https://wa.me/5541992316705";

export default function VagaCerta() {
  return (
    <section className="sec sec-gray" id="vaga-certa">
      <div className="w">
        <span className="section-tag">Vaga Certa</span>
        <h2 className="section-title">Recrutamento completo,<br/>do início ao fechamento.</h2>
        <p className="section-sub">Um processo estruturado com critério técnico e humano, pensado para empresas que querem acertar na contratação.</p>
        <div className="vc-grid">
          <div className="vc-item reveal"><div className="vc-step">Etapa 01</div><div className="vc-icon-wrap ic-blue"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><div className="vc-title">Alinhamento de perfil</div><div className="vc-desc">Entendimento real do contexto, cultura e critérios da vaga. Sem achismos — com profundidade.</div></div>
          <div className="vc-item reveal"><div className="vc-step">Etapa 02</div><div className="vc-icon-wrap ic-indigo"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div className="vc-title">Busca ativa e triagem</div><div className="vc-desc">Ativação de canais e triagem com foco em aderência técnica e cultural.</div></div>
          <div className="vc-item reveal"><div className="vc-step">Etapa 03</div><div className="vc-icon-wrap ic-green"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div className="vc-title">Entrevistas com profundidade</div><div className="vc-desc">Avaliação comportamental e técnica. Entrevistas que revelam quem a pessoa realmente é.</div></div>
          <div className="vc-item reveal"><div className="vc-step">Etapa 04</div><div className="vc-icon-wrap ic-amber"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg></div><div className="vc-title">Shortlist qualificado</div><div className="vc-desc">Candidatos recomendados com visão clara de alinhamento e potencial.</div></div>
          <div className="vc-item reveal"><div className="vc-step">Etapa 05</div><div className="vc-icon-wrap ic-purple"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 15.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div><div className="vc-title">Suporte pós-shortlist</div><div className="vc-desc">Acompanhamento nas etapas finais, alinhamento de proposta e fechamento seguro.</div></div>
          <div className="vc-cta-cell reveal">
            <div><div className="vc-cta-title">Pronto para contratar com clareza?</div><div className="vc-cta-sub">Fale com um especialista e abra sua vaga hoje.</div></div>
            <a className="vc-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">Abrir uma vaga <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
