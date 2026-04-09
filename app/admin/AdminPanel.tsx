"use client";
import { useState, useEffect } from "react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  tipo: string;
  setor: string;
  faixa: string;
  date: string;
}

export default function AdminPanel() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("captalento_leads") || "[]");
    setLeads(data.reverse());
  }, []);

  const filtered = leads.filter((l) => {
    if (!filter) return true;
    const q = filter.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.setor.toLowerCase().includes(q) ||
      l.tipo.toLowerCase().includes(q) ||
      l.faixa.toLowerCase().includes(q)
    );
  });

  function exportCSV() {
    const headers = ["Data", "Nome", "Email", "WhatsApp", "LinkedIn", "Regime", "Setor", "Faixa"];
    const rows = leads.map((l) => [
      new Date(l.date).toLocaleDateString("pt-BR"),
      l.name, l.email, l.phone, l.linkedin, l.tipo, l.setor, l.faixa,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-captalento-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearAll() {
    if (confirm("Tem certeza que deseja apagar todos os leads?")) {
      localStorage.removeItem("captalento_leads");
      setLeads([]);
    }
  }

  return (
    <div className="adm">
      <div className="adm-header">
        <div>
          <h1 className="adm-title">Leads — Banco de Talentos</h1>
          <p className="adm-sub">{leads.length} cadastro{leads.length !== 1 ? "s" : ""} registrado{leads.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="adm-actions">
          <button className="adm-btn" onClick={exportCSV} disabled={!leads.length}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Exportar CSV
          </button>
          <button className="adm-btn adm-btn-danger" onClick={clearAll} disabled={!leads.length}>Limpar tudo</button>
        </div>
      </div>

      <input
        className="adm-search"
        type="text"
        placeholder="Filtrar por nome, email, setor, regime, faixa..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filtered.length === 0 ? (
        <div className="adm-empty">
          {leads.length === 0 ? "Nenhum lead cadastrado ainda." : "Nenhum resultado para esse filtro."}
        </div>
      ) : (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>Contato</th>
                <th>Regime</th>
                <th>Setor</th>
                <th>Faixa</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id}>
                  <td className="adm-date">{new Date(l.date).toLocaleDateString("pt-BR")}</td>
                  <td>
                    <div className="adm-name">{l.name}</div>
                  </td>
                  <td>
                    <div className="adm-contact">{l.email}</div>
                    <div className="adm-contact-sub">{l.phone}</div>
                    {l.linkedin && <a className="adm-link" href={l.linkedin.startsWith("http") ? l.linkedin : `https://${l.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
                  </td>
                  <td><span className="adm-tag">{l.tipo}</span></td>
                  <td><span className="adm-tag">{l.setor}</span></td>
                  <td><span className="adm-tag">{l.faixa}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
