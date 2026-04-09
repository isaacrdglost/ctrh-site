"use client";
import { useEffect } from "react";
import Logo from "./Logo";

export default function NavBar() {
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    const onScroll = () => { nav.style.boxShadow = window.scrollY > 20 ? "0 2px 24px rgba(0,0,0,.07)" : "none"; };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="w">
        <a className="nav-brand" href="#topo" onClick={scrollTop} aria-label="CapTalento RH — Início">
          <Logo variant="dark" />
        </a>
        <div className="nav-links">
          <a href="#como-funciona">Como funciona</a>
          <a href="#vaga-certa">Vaga Certa</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#talentos">Talentos</a>
          <a href="#contato">Contato</a>
        </div>
        <a className="nav-cta" href="https://wa.me/5541992316705" target="_blank" rel="noopener noreferrer">Abrir uma vaga</a>
      </div>
    </nav>
  );
}
