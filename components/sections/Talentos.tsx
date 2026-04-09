import Link from "next/link";

export default function Talentos() {
  return (
    <section className="sec sec-gray" id="talentos">
      <div className="w">
        <div className="talentos-sec reveal">
          <span className="section-tag green">Banco de Talentos</span>
          <h2 className="section-title">Quer ser encontrado pela empresa certa?</h2>
          <p className="section-sub" style={{ maxWidth: 540 }}>
            Cadastre seu perfil e entre no radar de oportunidades alinhadas à sua experiência e momento de carreira.
          </p>

          <div className="talentos-grid">
            <div className="talentos-card">
              <div className="talentos-card-n">01</div>
              <div className="talentos-card-t">Cadastre seu perfil</div>
              <div className="talentos-card-d">Preencha o formulário com suas informações e experiências profissionais.</div>
            </div>
            <div className="talentos-card">
              <div className="talentos-card-n">02</div>
              <div className="talentos-card-t">Triagem humanizada</div>
              <div className="talentos-card-d">Analisamos cada perfil com atenção, critério e respeito pela sua trajetória.</div>
            </div>
            <div className="talentos-card">
              <div className="talentos-card-n">03</div>
              <div className="talentos-card-t">Oportunidades alinhadas</div>
              <div className="talentos-card-d">Quando surgir uma vaga compatível com seu perfil, entramos em contato.</div>
            </div>
          </div>

          <Link href="/talentos" className="btn-primary" style={{ marginTop: 28 }}>
            Cadastrar meu currículo
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
