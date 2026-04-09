import Logo from "../Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div style={{ marginBottom: 12 }}>
              <Logo variant="light" size={32} />
            </div>
            <p className="footer-desc">Recrutamento e seleção humanizado. Conectamos empresas aos talentos certos, com foco em fit cultural e parceria real.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Empresa</div>
            <a href="#sobre">Sobre nós</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#vaga-certa">Vaga Certa</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Candidatos</div>
            <a href="/talentos">Banco de Talentos</a>
            <a href="/talentos">Cadastrar currículo</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contato</div>
            <a href="https://wa.me/5541992316705" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:contato@rhcaptalento.com.br">E-mail</a>
            <a href="https://linkedin.com/company/captalento-rh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/captalento.rh" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 CapTalento RH — Recrutamento e Seleção Humanizado.</span>
          <span className="footer-copy">contato@rhcaptalento.com.br</span>
        </div>
      </div>
    </footer>
  );
}
