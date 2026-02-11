"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  imagenes,
  nombre,
}: {
  imagenes: string[];
  nombre: string;
}) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* ── Imagen principal ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "4/5",
          background: "#0a0a0a",
          border: "1px solid #ffffff08",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 90%, #D4AF3710 0%, transparent 70%)",
          }}
        />

        {/* Corner ornaments */}
        <div
          className="absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none"
          style={{
            borderTop: "1px solid #D4AF3740",
            borderLeft: "1px solid #D4AF3740",
          }}
        />
        <div
          className="absolute top-0 right-0 w-6 h-6 z-20 pointer-events-none"
          style={{
            borderTop: "1px solid #D4AF3740",
            borderRight: "1px solid #D4AF3740",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-6 h-6 z-20 pointer-events-none"
          style={{
            borderBottom: "1px solid #D4AF3740",
            borderLeft: "1px solid #D4AF3740",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-6 h-6 z-20 pointer-events-none"
          style={{
            borderBottom: "1px solid #D4AF3740",
            borderRight: "1px solid #D4AF3740",
          }}
        />

        <Image
          src={imagenSeleccionada || "/placeholder.jpg"}
          alt={nombre}
          fill
          priority
          className="object-cover transition-all duration-700"
          style={{  }}
        />

        {/* Bottom veil */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to top, #0a0a0a 0%, transparent 30%)",
          }}
        />
      </div>

      {/* ── Miniaturas ── */}
      {imagenes.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {imagenes.map((img, index) => (
            <button
              key={index}
              onClick={() => setImagenSeleccionada(img)}
              className="relative flex-shrink-0 overflow-hidden transition-all duration-300"
              style={{
                width: "72px",
                height: "72px",
                border:
                  imagenSeleccionada === img
                    ? "1px solid #D4AF37"
                    : "1px solid #ffffff0a",
                opacity: imagenSeleccionada === img ? 1 : 0.4,
                background: "#0a0a0a",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                if (imagenSeleccionada !== img) {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF3740";
                }
              }}
              onMouseLeave={(e) => {
                if (imagenSeleccionada !== img) {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.4";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#ffffff0a";
                }
              }}
            >
              <Image
                src={img}
                alt={`${nombre} variante ${index + 1}`}
                fill
                className="object-cover"
                style={{  }}
              />

              {/* Active indicator */}
              {imagenSeleccionada === img && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "#D4AF37" }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* ── Counter ── */}
      {imagenes.length > 1 && (
        <div className="flex items-center gap-2 justify-end">
          <div className="h-px flex-1" style={{ background: "#ffffff06" }} />
          <span
            className="uppercase"
            style={{
              color: "#ffffff20",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
            }}
          >
            {imagenes.indexOf(imagenSeleccionada) + 1} /{" "}
            {imagenes.length}
          </span>
        </div>
      )}
    </div>
  );
}