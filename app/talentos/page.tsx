import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Reveal from "@/components/Reveal";
import TalentForm from "@/components/TalentForm";

export const metadata: Metadata = {
  title: "Banco de Talentos — CapTalento RH",
  description: "Cadastre seu perfil no Banco de Talentos da CapTalento RH e seja considerado para oportunidades alinhadas à sua experiência.",
};

export default function TalentosPage() {
  return (
    <>
      <Reveal />
      <NavBar />
      <section className="sec sec-white" style={{ marginTop: 60 }}>
        <div className="w">
          <div className="talentos-page">
            <div className="talentos-page-left reveal">
              <span className="section-tag green">Banco de Talentos</span>
              <h1 className="section-title" style={{ fontSize: 32 }}>Cadastre seu perfil e conecte-se a oportunidades reais.</h1>
              <p className="section-sub">
                O Banco de Talentos da CapTalento é a porta de entrada para profissionais que buscam posições alinhadas ao seu momento, experiência e expectativas.
              </p>

              <div className="talentos-benefits">
                <div className="talentos-benefit">
                  <div className="talentos-benefit-ico">
                    <svg width="18" height="18" fill="none" stroke="#1A8F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div className="talentos-benefit-t">Cadastro rápido</div>
                    <div className="talentos-benefit-d">Duas etapas simples, menos de 2 minutos.</div>
                  </div>
                </div>
                <div className="talentos-benefit">
                  <div className="talentos-benefit-ico">
                    <svg width="18" height="18" fill="none" stroke="#1A8F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div className="talentos-benefit-t">Triagem humanizada</div>
                    <div className="talentos-benefit-d">Seu perfil é analisado por especialistas, não por robôs.</div>
                  </div>
                </div>
                <div className="talentos-benefit">
                  <div className="talentos-benefit-ico">
                    <svg width="18" height="18" fill="none" stroke="#1A8F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div className="talentos-benefit-t">Oportunidades alinhadas</div>
                    <div className="talentos-benefit-d">Conectamos você com vagas que fazem sentido pro seu momento.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="talentos-page-right reveal">
              <div className="talentos-form-card">
                <TalentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#080A14", padding: "24px 0", textAlign: "center" }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)" }}>© 2025 CapTalento RH — Recrutamento e Seleção Humanizado.</span>
      </footer>
    </>
  );
}
