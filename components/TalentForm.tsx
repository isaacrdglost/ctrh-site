"use client";
import { useState, FormEvent, ChangeEvent } from "react";

const initial = { name: "", email: "", phone: "", linkedin: "", area: "", level: "", about: "" };

type Field = keyof typeof initial;

export default function TalentForm() {
  const [f, setF] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);

  const set = (k: Field) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    // TODO: POST /api/talentos quando tiver backend
    await new Promise((r) => setTimeout(r, 1000));
    setBusy(false);
    setOk(true);
  }

  if (ok) {
    return (
      <div className="tform-success">
        <div className="tform-success-ico">
          <svg width="32" height="32" fill="none" stroke="#1A8F5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="tform-success-title">Perfil enviado!</h3>
        <p className="tform-success-text">
          Obrigado{f.name ? `, ${f.name.split(" ")[0]}` : ""}. Recebemos seu cadastro e entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.
        </p>
        <button type="button" className="tform-reset" onClick={() => { setF(initial); setOk(false); }}>
          Cadastrar outro perfil
        </button>
      </div>
    );
  }

  return (
    <form className="tform" onSubmit={submit}>
      <div className="tform-row">
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-name">Nome completo *</label>
          <input id="tf-name" className="tform-input" type="text" required placeholder="Seu nome" value={f.name} onChange={set("name")} />
        </div>
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-email">E-mail *</label>
          <input id="tf-email" className="tform-input" type="email" required placeholder="seu@email.com" value={f.email} onChange={set("email")} />
        </div>
      </div>
      <div className="tform-row">
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-phone">WhatsApp *</label>
          <input id="tf-phone" className="tform-input" type="tel" required placeholder="(00) 00000-0000" value={f.phone} onChange={set("phone")} />
        </div>
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-linkedin">LinkedIn</label>
          <input id="tf-linkedin" className="tform-input" type="url" placeholder="linkedin.com/in/seuperfil" value={f.linkedin} onChange={set("linkedin")} />
        </div>
      </div>
      <div className="tform-row">
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-area">Área de atuação *</label>
          <select id="tf-area" className="tform-select" required value={f.area} onChange={set("area")}>
            <option value="">Selecione</option>
            <option>Administrativo / Financeiro</option>
            <option>Comercial / Vendas</option>
            <option>Engenharia / Produção</option>
            <option>Logística / Supply Chain</option>
            <option>Marketing / Comunicação</option>
            <option>Recursos Humanos</option>
            <option>Tecnologia / TI</option>
            <option>Outra</option>
          </select>
        </div>
        <div className="tform-field">
          <label className="tform-label" htmlFor="tf-level">Senioridade *</label>
          <select id="tf-level" className="tform-select" required value={f.level} onChange={set("level")}>
            <option value="">Selecione</option>
            <option>Estágio</option>
            <option>Júnior</option>
            <option>Pleno</option>
            <option>Sênior</option>
            <option>Coordenação / Supervisão</option>
            <option>Gerência / Diretoria</option>
          </select>
        </div>
      </div>
      <div className="tform-field">
        <label className="tform-label" htmlFor="tf-about">Sobre você</label>
        <textarea id="tf-about" className="tform-textarea" placeholder="Conte brevemente sobre sua experiência e o que busca na próxima oportunidade." value={f.about} onChange={set("about")} />
      </div>
      <button type="submit" className="tform-submit" disabled={busy}>
        {busy ? "Enviando..." : "Cadastrar meu perfil"}
      </button>
      <p className="tform-disclaimer">Suas informações são tratadas com sigilo e usadas exclusivamente para oportunidades de recrutamento.</p>
    </form>
  );
}
