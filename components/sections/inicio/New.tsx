"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import New1 from "@/public/images/new1.png"
import New2 from "@/public/images/new2.png"
import New3 from "@/public/images/new3.png"
import New4 from "@/public/images/new4.png"



const newArrivals = [
  {
    id: 1,
    ref: "CR-1250-TIT",
    name: "Chronos Aviator",
    subtitle: "Titanium Edition",
    price: "$1,250.00",
    tagline: "DISPONIBLE AHORA",
    description:
      "Forjado en titanio aeroespacial de grado 5, el Chronos Aviator redefine la precisión en altitud. Resistencia certificada a 200m y mecanismo de cuerda automática de 72 horas.",
    specs: ["Titanio Grado 5", "200m resistencia", "Calibre automático", "72h reserva"],
    image:
      New1,
    accent: "#94a3b8",
  },
  {
    id: 2,
    ref: "RO-3450-GLD",
    name: "Royal Oak Skeleton",
    subtitle: "18K Gold Plated",
    price: "$3,450.00",
    tagline: "EDICIÓN LIMITADA",
    description:
      "Arquitectura esquelética en oro de 18K que expone cada engranaje con maestría artesanal. Solo 50 unidades numeradas, cada una con certificado de autenticidad.",
    specs: ["Oro 18K", "Edición 50 piezas", "Esqueleto manual", "120h reserva"],
    image:
      New2,
    accent: "#D4AF37",
  },
  {
    id: 3,
    ref: "DS-0895-PRO",
    name: "Deep Sea Master",
    subtitle: "Professional Diver",
    price: "$895.00",
    tagline: "DISPONIBLE AHORA",
    description:
      "Construido para las profundidades más extremas. Caja en acero 316L con cristal de zafiro antirreflejo y bisel unidireccional. Compañero de los grandes exploradores.",
    specs: ["Acero 316L", "500m certificado", "Bisel unidireccional", "Cristal zafiro"],
    image:
      New3,
    accent: "#1e40af",
  },
  {
    id: 4,
    ref: "NM-0550-ITA",
    name: "Noir Minimalist",
    subtitle: "Italian Leather",
    price: "$550.00",
    tagline: "NUEVA COLECCIÓN",
    description:
      "La elegancia en su forma más pura. Correa en cuero italiano curtido a mano, esfera lacada en negro profundo. Para quien entiende que lo mejor no necesita demostrar nada.",
    specs: ["Cuero italiano", "Esfera lacada", "Movimiento suizo", "5 años garantía"],
    image:
      New4,
    accent: "#6b7280",
  },
];

export function New() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visible, setVisible] = useState(true);
  const total = newArrivals.length;

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setVisible(false);

      setTimeout(() => {
        setCurrent((prev) =>
          dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total
        );
        setVisible(true);
        setTimeout(() => setAnimating(false), 500);
      }, 300);
    },
    [animating, total]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => navigate("right"), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const product = newArrivals[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #000000ff 0%, #121212ff 60%, #020609 100%)",
        minHeight: "520px",
      }}
    >
      {/* Ambient glow behind watch */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 55% 70% at 52% 50%, ${product.accent}18 0%, transparent 70%)`,
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center min-h-[520px] py-10">
        <div className="grid grid-cols-12 gap-6 w-full items-center">

          {/* ── LEFT COLUMN ── */}
          <Reveal animation="slideRight" className="col-span-12 lg:col-span-3">
          <div className="flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
            {/* Tag */}
            <div>
              <span
                className="uppercase tracking-[0.35em] text-[10px] font-bold"
                style={{ color: "#F1E2C3", letterSpacing: "0.35em" }}
              >
                Just Arrived
              </span>
            </div>

            {/* Title */}
            <div>
              <h2
                className="text-white uppercase leading-none font-black"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontFamily: "'Georgia', serif",
                  letterSpacing: "0.04em",
                }}
              >
                Nueva
                <br />
                <span style={{ color: "#F1E2C3" }}>Colección</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-px w-8" style={{ background: "#D4AF37" }} />
              <span className="text-white/30 text-xs uppercase tracking-widest">
                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-white/40 leading-relaxed"
              style={{ fontSize: "0.8rem", maxWidth: "22ch", margin: "0 auto" }}
            >
              Cada pieza, una obra maestra. Explora nuestra última selección de relojes que
              redefinen el lujo contemporáneo.
            </p>

            {/* CTA Button */}
            <div className="mt-2">
              <button
                className="group relative inline-flex items-center gap-3 px-6 py-3 overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid #D4AF3760",
                  color: "#D4AF37",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37";
                  (e.currentTarget as HTMLButtonElement).style.color = "#020617";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF3760";
                }}
              >
                Descubre la colección
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Carousel dots */}
            <div className="flex gap-2 mt-2 justify-center lg:justify-start">
              {newArrivals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === current) return;
                    setDirection(i > current ? "right" : "left");
                    setAnimating(true);
                    setVisible(false);
                    setTimeout(() => {
                      setCurrent(i);
                      setVisible(true);
                      setTimeout(() => setAnimating(false), 500);
                    }, 300);
                  }}
                  className="transition-all duration-300"
                  style={{
                    height: "2px",
                    width: i === current ? "24px" : "8px",
                    background: i === current ? "#D4AF37" : "#ffffff30",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
          </Reveal>

          {/* ── CENTER COLUMN — Watch image ── */}
          <Reveal animation="fadeUp" className="col-span-12 lg:col-span-6">
          <div className="relative flex items-center justify-center">
            {/* Nav arrows */}
            <button
              onClick={() => navigate("left")}
              className="absolute left-0 z-20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #ffffff15",
                background: "#0a1628cc",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => navigate("right")}
              className="absolute right-0 z-20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #ffffff15",
                background: "#0a1628cc",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronRight size={16} />
            </button>

            {/* Watch container */}
            <div
              className="relative transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateX(0) scale(1)"
                  : direction === "right"
                  ? "translateX(-40px) scale(0.96)"
                  : "translateX(40px) scale(0.96)",
                width: "100%",
                maxWidth: "480px",
              }}
            >
              {/* Image */}
              <div className="relative" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  style={{ borderRadius: "4px", mixBlendMode: "screen" }}
                  priority
                />







                {/* NEW badge if applicable */}
                {product.tagline === "EDICIÓN LIMITADA" && (
                  <div
                    className="absolute top-[38%] left-4 z-10"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <span
                      style={{
                        background: "#D4AF37",
                        color: "#020617",
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        letterSpacing: "0.25em",
                        padding: "3px 8px",
                        textTransform: "uppercase",
                      }}
                    >
                      New
                    </span>
                  </div>
                )}
              </div>

              {/* Watch name overlay at bottom */}
              <div
                className="absolute bottom-0 inset-x-0 flex flex-col items-center pb-6 z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.4s ease 0.2s",
                }}
              >
                <p
                  style={{
                    color: "#D4AF37",
                    fontSize: "0.65rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {product.ref}
                </p>
                <h3
                  className="text-white text-center font-bold uppercase"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    letterSpacing: "0.08em",
                    lineHeight: 1.1,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#ffffff50",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {product.subtitle}
                </p>
              </div>
            </div>
          </div>
          </Reveal>

          {/* ── RIGHT COLUMN — Elegant text ── */}
          <Reveal animation="slideLeft" className="col-span-12 lg:col-span-3">
          <div
            className="flex flex-col justify-center items-center lg:items-start gap-6 transition-all duration-500 text-center lg:text-left"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
            }}
          >
            {/* Availability tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade8099" }}
              />
              <span
                style={{
                  color: "#4ade80",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {product.tagline}
              </span>
            </div>

            {/* Price */}
            <div>
              <p
                style={{
                  color: "#ffffff30",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Precio
              </p>
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {product.price}
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                color: "#ffffff55",
                fontSize: "0.78rem",
                lineHeight: 1.8,
                borderLeft: "1px solid #D4AF3730",
                paddingLeft: "16px",
              }}
            >
              {product.description}
            </p>

            {/* Specs */}
            <div className="flex flex-col gap-2">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3">
                  <div
                    className="w-4 h-px flex-shrink-0"
                    style={{ background: "#D4AF3760" }}
                  />
                  <span
                    style={{
                      color: "#ffffff60",
                      fontSize: "0.68rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full" style={{ background: "#ffffff08" }} />

            {/* CTA secundario */}
            <button
              className="flex items-center justify-center lg:justify-start gap-2 transition-all duration-200 group"
              style={{
                color: "#ffffff40",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingLeft: 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#D4AF37")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#ffffff40")
              }
            >
              Ver detalles completos
              <ChevronRight size={12} />
            </button>
          </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #D4AF3730 30%, #D4AF3730 70%, transparent)",
        }}
      />
    </section>
  );
}