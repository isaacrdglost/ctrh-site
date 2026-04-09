const WA = "https://wa.me/5541992316705";

export default function CtaFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="cta-final-bg">
        <img src="/img/photos/cta-bg.jpg" alt="" />
      </div>
      <div className="cta-final-inner">
        <h2>Pronto para contratar com mais clareza e segurança?</h2>
        <p>Fale com a CapTalento RH. Vamos entender o seu desafio e encontrar juntos os talentos certos para o seu time.</p>
        <div className="cta-btns">
          <a className="btn-white" href={WA} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            Abrir uma vaga
          </a>
          <a className="btn-outline" href="mailto:contato@rhcaptalento.com.br">contato@rhcaptalento.com.br</a>
        </div>
      </div>
    </section>
  );
}
