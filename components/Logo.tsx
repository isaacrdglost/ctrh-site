interface Props {
  variant?: "dark" | "light";
  size?: number;
}

export default function Logo({ variant = "dark", size = 32 }: Props) {
  const src = variant === "dark" ? "/img/brand/logo-dark.png" : "/img/brand/logo-light.png";
  const textColor = variant === "dark" ? "#0D0F1A" : "#FFFFFF";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img src={src} alt="" width={size} height={size} style={{ objectFit: "contain" }} />
      <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-.02em", color: textColor, lineHeight: 1 }}>
        Cap<span style={{ color: "#1A3FD4" }}>Talento</span>
      </span>
    </div>
  );
}
