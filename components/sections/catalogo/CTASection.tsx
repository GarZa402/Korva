const pillars = [
  {
    number: "01",
    title: "Autenticidad Certificada",
    body: "Cada pieza en nuestra colección viene acompañada de su certificado de origen y documentación completa del fabricante. Cero réplicas. Cero compromisos.",
  },
  {
    number: "02",
    title: "Garantía Real",
    body: "Dos años de garantía directa sobre cada reloj. Si algo falla en el mecanismo, nosotros respondemos — sin letras pequeñas ni condiciones ocultas.",
  },
  {
    number: "03",
    title: "Envío Asegurado",
    body: "Packaging de joyería premium con seguro de transporte incluido. Tu inversión protegida desde nuestra vitrina hasta tu muñeca.",
  },
  {
    number: "04",
    title: "Valor que Permanece",
    body: "Los relojes de alta relojería no son gastos — son activos. Marcas como Rolex, Omega y Patek Philippe históricamente aprecian su valor con el tiempo.",
  },
];

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 100%, #0f0a00 0%, #0a0a0a 50%, #050505 100%)",
      
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, #D4AF3710 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

        {/* ── Central declaration ── */}
        <div className="text-center mb-20 md:mb-28">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <span
              className="uppercase font-bold"
              style={{ color: "#D4AF3790", fontSize: "0.6rem", letterSpacing: "0.45em" }}
            >
              Por qué elegirnos
            </span>
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          {/* Headline */}
          <h2
            className="uppercase mx-auto leading-none font-black mb-8"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              maxWidth: "14ch",
            }}
          >
            <span style={{ color: "#f0ebe0" }}>No vendemos</span>
            <br />
            <span
              style={{
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #F1E2C3 0%, #D4AF37 60%, #F1E2C3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              relojes.
            </span>
            <br />
            <span style={{ color: "#f0ebe0" }}>Transferimos</span>
            <br />
            <span style={{ color: "#ffffff30" }}>legado.</span>
          </h2>

          <p
            className="mx-auto"
            style={{
              color: "#ffffff7b",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              maxWidth: "48ch",
              letterSpacing: "0.01em",
            }}
          >
            Cada guardatiempos tiene una historia antes de llegar a ti —
            décadas de ingeniería, artesanos anónimos, y una obsesión
            colectiva por la precisión. Aquí no vendemos objetos. Conectamos
            personas con esa historia.
          </p>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #D4AF3725 30%, #D4AF3725 70%, transparent)",
        }}
      />
    </section>
  );
}