export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center pt-20" // <-- Añadido pt-20 para compensar la Navbar
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, #1a1400 0%, #0f0f0f 55%, #020609 100%)",
        minHeight: "400px", // He subido un poco el minHeight para que luzca mejor con el espacio extra
      }}
    >
      {/* ... (resto de los elementos de fondo se mantienen igual) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24"> 
        {/* Ajusté py-16 a py-12/py-24 para equilibrar el espacio visual */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"> 
          {/* Aumenté el gap a 10 para que en móvil no se vea tan amontonado */}

          {/* Left: Eyebrow + Title */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-px w-8 flex-shrink-0"
                style={{ background: "#D4AF37" }}
              />
              <span
                className="uppercase font-bold"
                style={{
                  color: "#F1E2C3",
                  fontSize: "0.65rem",
                  letterSpacing: "0.35em",
                }}
              >
                Catálogo · 2026
              </span>
            </div>

            <h1
              className="text-white uppercase leading-none font-black"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              Masterpiece
              <br />
              <span
                style={{
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, #F1E2C3 0%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Collection
              </span>
            </h1>
          </div>

          {/* Right: Descriptor */}
          <div
            className="md:max-w-xs border-l-[1px] md:border-l-[1px] border-l-transparent md:border-[#D4AF3730] pl-0 md:pl-5"
            /* He movido los estilos de borde a clases de Tailwind para manejarlos mejor en móvil */
          >
            <p
              style={{
                color: "#ffffffff",
                fontSize: "0.82rem",
                lineHeight: 1.85,
                letterSpacing: "0.01em",
              }}
            >
              La ingeniería de precisión se encuentra con la elegancia atemporal.
              Explora nuestra selección curada de excelencia relojera —
              cada pieza un testimonio de siglos de artesanía.
            </p>

            {/* Stat row */}
            <div className="flex items-center gap-6 mt-8"> {/* Aumentado mt-5 a mt-8 */}
              {/* ... (los stats se mantienen igual) */}
              <div>
                <p style={{ color: "#D4AF37", fontSize: "1.25rem", fontWeight: 800, fontFamily: "'Georgia', serif" }}>142</p>
                <p style={{ color: "#ffffff30", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Timepieces</p>
              </div>
              <div className="h-8 w-px" style={{ background: "#ffffff10" }} />
              <div>
                <p style={{ color: "#D4AF37", fontSize: "1.25rem", fontWeight: 800, fontFamily: "'Georgia', serif" }}>12</p>
                <p style={{ color: "#ffffff30", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Marcas</p>
              </div>
              <div className="h-8 w-px" style={{ background: "#ffffff10" }} />
              <div>
                <p style={{ color: "#D4AF37", fontSize: "1.25rem", fontWeight: 800, fontFamily: "'Georgia', serif" }}>6</p>
                <p style={{ color: "#ffffff30", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Limitadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}