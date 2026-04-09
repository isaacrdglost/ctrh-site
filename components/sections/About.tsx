export default function About() {
  return (
    <section className="sec sec-white" id="sobre">
      <div className="w">
        <div className="sobre-inner">
          <div className="sobre-img-col reveal">
            <img className="sobre-img-main" src="/img/photos/about-main.jpg" alt="Profissional de RH" />
            <img className="sobre-img-float" src="/img/photos/about-float.jpg" alt="Reunião de equipe" />
            <div className="sobre-img-badge"><div className="sobre-badge-num">+80</div><div className="sobre-badge-label">empresas atendidas</div></div>
          </div>
          <div className="sobre-content reveal">
            <span className="section-tag">Sobre nós</span>
            <h2 className="sobre-title">Somos parceiros de quem leva <em>pessoas a sério.</em></h2>
            <p className="sobre-p">A CapTalento RH nasceu da convicção de que contratar bem transforma empresas. Somos especialistas em recrutamento e seleção humanizado — conectando pessoas certas a oportunidades certas.</p>
            <p className="sobre-p">Atuamos lado a lado com cada cliente, entendendo o contexto real de cada vaga para entregar candidatos que fazem sentido técnica e humanamente.</p>
            <div className="sobre-values">
              <div className="sobre-val sobre-val-1"><div className="sobre-val-title">Humanização</div><div className="sobre-val-desc">Pessoas antes de currículos. Sempre.</div></div>
              <div className="sobre-val sobre-val-2"><div className="sobre-val-title">Critério</div><div className="sobre-val-desc">Rigor no processo, sem perder agilidade.</div></div>
              <div className="sobre-val sobre-val-3"><div className="sobre-val-title">Transparência</div><div className="sobre-val-desc">Comunicação clara do início ao fim.</div></div>
              <div className="sobre-val sobre-val-4"><div className="sobre-val-title">Parceria</div><div className="sobre-val-desc">Seu sucesso é o nosso resultado.</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
