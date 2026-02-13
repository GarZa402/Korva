// ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Reloj } from "@/types/reloj";

const mapaColores: { [key: string]: string } = {
  negro: "#1a1a1a",
  azul: "#1E40AF",
  dorado: "#D4AF37",
  oro: "#D4AF37",
  plata: "#C0C0C0",
  plateado: "#C0C0C0",
  rojo: "#B91C1C",
  acero: "#71797E",
  verde: "#15803D",
  cafe: "#78350F",
  marron: "#78350F",
  blanco: "#F5F5F5",
};

export default function WatchCard({ reloj }: { reloj: Reloj }) {
  const precioFormateado = Number(reloj.precio).toLocaleString("es-CO");
  const tieneVariantes = reloj.variantes && reloj.variantes.length > 0;

  return (
    <div
      className="group relative flex flex-col h-full overflow-hidden transition-all duration-500 hover:[border-color:#D4AF3735]"
      style={{
        background: "linear-gradient(160deg, #131313 0%, #0d0d0d 100%)",
        border: "1px solid #ffffff0a",
      }}
    >
      {/* Invisible full-card link */}
      <Link
        href={`/reloj/${reloj.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver ${reloj.nombre}`}
      />

      {/* ── Image container ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "1/1", background: "#0a0a0a" }}
      >
        {/* Ambient glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 85%, #D4AF3715 0%, transparent 70%)",
          }}
        />

        <Image
          src={reloj.imagen_url || "/placeholder.jpg"}
          alt={reloj.nombre}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{  }}
        />

        {/* Gradient veil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0d0d0d 0%, transparent 45%)",
          }}
        />

        {/* Variants badge */}
        {tieneVariantes && (
          <div
            className="absolute top-3 left-3 z-20"
            style={{
              background: "#0d0d0dcc",
              backdropFilter: "blur(8px)",
              border: "1px solid #D4AF3740",
              padding: "3px 8px",
            }}
          >
            <p
              className="uppercase font-bold"
              style={{
                color: "#D4AF37",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
              }}
            >
              +{reloj.variantes?.length} Colores
            </p>
          </div>
        )}

        {/* Ref number — bottom of image */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <span
            className="uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              color: "#D4AF3780",
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
            }}
          >
            {reloj.marca || "KORVA"}
          </span>
        </div>
      </div>

      {/* ── Info area ── */}
      <div
        className="flex flex-col flex-1 px-4 py-4"
        style={{ borderTop: "1px solid #ffffff06" }}
      >
        {/* Brand */}
        <p
          className="uppercase font-bold mb-1.5"
          style={{
            color: "#ffffff25",
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
          }}
        >
          {reloj.marca || "Premium"}
        </p>

        {/* Name */}
        <h3
          className="font-bold uppercase leading-tight mb-3 transition-colors duration-300"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
            color: "#e2e8f0",
            lineHeight: 1.25,
          }}
        >
          {reloj.nombre}
        </h3>

        {/* Divider */}
        <div
          className="h-px mb-3 flex-shrink-0"
          style={{
            background:
              "linear-gradient(to right, #D4AF3725, transparent)",
          }}
        />

        {/* Price + color swatches */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p
              style={{
                color: "#ffffff20",
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Precio
            </p>
            <p
              style={{
                color: "#D4AF37",
                fontSize: "1rem",
                fontWeight: 800,
                fontFamily: "'Georgia', serif",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              ${precioFormateado}
            </p>
          </div>

          {/* Color swatches */}
          {tieneVariantes && (
            <div className="flex gap-1.5 items-center">
              {reloj.variantes?.slice(0, 4).map((v) => {
                const colorCss =
                  mapaColores[v.color.toLowerCase()] || v.color.toLowerCase();
                return (
                  <div
                    key={v.id}
                    title={v.color}
                    className="rounded-full transition-transform duration-200 group-hover:scale-110"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: colorCss,
                      border: "1px solid #ffffff20",
                      boxShadow:
                        colorCss === "#D4AF37"
                          ? "0 0 6px #D4AF3750"
                          : "none",
                    }}
                  />
                );
              })}
              {(reloj.variantes?.length ?? 0) > 4 && (
                <span
                  style={{
                    color: "#ffffff25",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  +{(reloj.variantes?.length ?? 0) - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}