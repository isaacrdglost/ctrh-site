"use client";
import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    // Marca o body como pronto — só agora os .reveal ganham opacity:0
    document.body.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = (i % 4) * 0.08 + "s";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
