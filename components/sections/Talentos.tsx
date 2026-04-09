import TalentForm from "../TalentForm";

export default function Talentos() {
  return (
    <section className="sec sec-gray" id="talentos">
      <div className="w">
        <div className="talentos-inner">
          <div className="reveal">
            <span className="section-tag green">Banco de Talentos</span>
            <h2 className="section-title">Quer ser encontrado pela empresa certa?</h2>
            <p className="section-sub">Cadastre seu perfil e entre no radar de oportunidades alinhadas à sua experiência e momento de carreira.</p>
            <div className="talentos-steps">
              <div className="talentos-step"><div className="talentos-step-n">01</div><div><div className="talentos-step-title">Cadastre seu perfil</div><div className="talentos-step-desc">Preencha o formulário com suas informações e experiências profissionais.</div></div></div>
              <div className="talentos-step"><div className="talentos-step-n">02</div><div><div className="talentos-step-title">Triagem humanizada</div><div className="talentos-step-desc">Analisamos cada perfil com atenção, critério e respeito pela sua trajetória.</div></div></div>
              <div className="talentos-step"><div className="talentos-step-n">03</div><div><div className="talentos-step-title">Oportunidades alinhadas</div><div className="talentos-step-desc">Quando surgir uma vaga compatível com seu perfil, entramos em contato.</div></div></div>
            </div>
          </div>
          <div className="talentos-form-wrap reveal">
            <TalentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
