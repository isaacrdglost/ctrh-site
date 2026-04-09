import Link from "next/link";

export default function Talentos() {
  return (
    <section className="sec sec-gray" id="talentos">
      <div className="w">
        <div className="talentos-inner">
          <div className="talentos-image reveal">
            <img src="/img/photos/talentos.jpg" alt="Profissional buscando oportunidade" />
          </div>
          <div className="reveal">
            <span className="section-tag green">Banco de Talentos</span>
            <h2 className="section-title">Quer ser encontrado pela empresa certa?</h2>
            <p className="section-sub">Cadastre seu perfil e entre no radar de oportunidades alinhadas à sua experiência e momento de carreira.</p>
            <div className="talentos-steps">
              <div className="talentos-step"><div className="talentos-step-n">01</div><div><div className="talentos-step-title">Cadastre seu perfil</div><div className="talentos-step-desc">Preencha o formulário com suas informações e experiências profissionais.</div></div></div>
              <div className="talentos-step"><div className="talentos-step-n">02</div><div><div className="talentos-step-title">Triagem humanizada</div><div className="talentos-step-desc">Analisamos cada perfil com atenção, critério e respeito pela sua trajetória.</div></div></div>
              <div className="talentos-step"><div className="talentos-step-n">03</div><div><div className="talentos-step-title">Oportunidades alinhadas</div><div className="talentos-step-desc">Quando surgir uma vaga compatível com seu perfil, entramos em contato.</div></div></div>
            </div>
            <Link href="/talentos" className="btn-green" style={{ marginTop: 8, display: "inline-flex" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              Cadastrar meu currículo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
