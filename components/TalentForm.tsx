"use client";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  tipo: string;
  setor: string;
  faixa: string;
}

const initial: FormData = { name: "", email: "", phone: "", linkedin: "", tipo: "", setor: "", faixa: "" };

export default function TalentForm() {
  const [f, setF] = useState<FormData>(initial);
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);

  const set = (k: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  function next(e: FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);

    // Salvar no localStorage
    const leads = JSON.parse(localStorage.getItem("captalento_leads") || "[]");
    leads.push({ ...f, date: new Date().toISOString(), id: Date.now().toString(36) });
    localStorage.setItem("captalento_leads", JSON.stringify(leads));

    // TODO: POST /api/talentos quando tiver backend
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    setOk(true);
  }

  if (ok) {
    return (
      <div className="tform-success">
        <div className="tform-success-ico">
          <svg width="32" height="32" fill="none" stroke="#1A8F5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="tform-success-title">Perfil enviado!</h3>
        <p className="tform-success-text">
          Obrigado{f.name ? `, ${f.name.split(" ")[0]}` : ""}. Recebemos seu cadastro e entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.
        </p>
        <button type="button" className="tform-reset" onClick={() => { setF(initial); setStep(1); setOk(false); }}>
          Cadastrar outro perfil
        </button>
      </div>
    );
  }

  // ETAPA 1: Dados de contato
  if (step === 1) {
    return (
      <form className="tform" onSubmit={next}>
        <div className="tform-progress">
          <div className="tform-progress-step active">1. Seus dados</div>
          <div className="tform-progress-step">2. Perfil profissional</div>
        </div>
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
        <button type="submit" className="tform-submit">
          Próximo passo
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </form>
    );
  }

  // ETAPA 2: Perguntas rápidas
  return (
    <form className="tform" onSubmit={submit}>
      <div className="tform-progress">
        <div className="tform-progress-step done">1. Seus dados</div>
        <div className="tform-progress-step active">2. Perfil profissional</div>
      </div>

      <div className="tform-field">
        <label className="tform-label">Regime de trabalho *</label>
        <div className="tform-options">
          {["CLT", "PJ", "Ambos", "Estágio"].map((v) => (
            <label key={v} className={`tform-option${f.tipo === v ? " selected" : ""}`}>
              <input type="radio" name="tipo" value={v} required checked={f.tipo === v} onChange={set("tipo")} />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="tform-field">
        <label className="tform-label">Setor de atuação *</label>
        <div className="tform-options">
          {["Administrativo", "Comercial", "Engenharia", "Logística", "Marketing", "RH", "Tecnologia", "Outro"].map((v) => (
            <label key={v} className={`tform-option${f.setor === v ? " selected" : ""}`}>
              <input type="radio" name="setor" value={v} required checked={f.setor === v} onChange={set("setor")} />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="tform-field">
        <label className="tform-label">Faixa salarial pretendida *</label>
        <div className="tform-options">
          {["Até R$ 3.000", "R$ 3.000 – 5.000", "R$ 5.000 – 8.000", "R$ 8.000 – 12.000", "Acima de R$ 12.000"].map((v) => (
            <label key={v} className={`tform-option${f.faixa === v ? " selected" : ""}`}>
              <input type="radio" name="faixa" value={v} required checked={f.faixa === v} onChange={set("faixa")} />
              {v}
            </label>
          ))}
        </div>
      </div>

      <div className="tform-actions">
        <button type="button" className="tform-back" onClick={() => setStep(1)}>← Voltar</button>
        <button type="submit" className="tform-submit" disabled={busy}>
          {busy ? "Enviando..." : "Cadastrar meu perfil"}
        </button>
      </div>
      <p className="tform-disclaimer">Suas informações são tratadas com sigilo e usadas exclusivamente para oportunidades de recrutamento.</p>
    </form>
  );
}
