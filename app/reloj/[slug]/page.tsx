import { supabase } from "@/lib/supabaseClient";
import { Reloj, RelojVariante } from "@/types/reloj";
import { notFound } from "next/navigation";
import ProductGallery from "@/app/reloj/ProductGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

export default async function RelojPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: reloj, error } = await supabase
    .from("relojes")
    .select(`*, variantes:reloj_variantes(*)`)
    .eq("slug", slug)
    .eq("activo", true)
    .maybeSingle();

  if (error || !reloj) notFound();

  const imagenesGaleria = [
    reloj.imagen_url,
    ...(reloj.variantes?.map((v: RelojVariante) => v.imagenes).filter(Boolean) || []),
  ].filter((img: unknown): img is string => typeof img === "string" && img !== "");

  const mensajeWhatsApp = encodeURIComponent(
    `Hola, estoy interesado en el modelo: ${reloj.nombre}`,
  );

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(ellipse at 40% 0%, #0f0a00 0%, #080808 50%, #050505 100%)",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* ── Grain overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-24">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-3 mb-14">
          <a
            href="/catalogo"
            className="uppercase transition-colors duration-200 hover:text-[#D4AF37]"
            style={{ color: "#ffffff25", fontSize: "0.58rem", letterSpacing: "0.3em" }}
          >
            Catálogo
          </a>
          <span style={{ color: "#ffffff15", fontSize: "0.6rem" }}>—</span>
          <span
            className="uppercase"
            style={{ color: "#ffffff35", fontSize: "0.58rem", letterSpacing: "0.3em" }}
          >
            {reloj.nombre}
          </span>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* ── LEFT: Gallery ── */}
          <div className="w-full">
            {/* Thin gold line above gallery */}
            <div
              className="mb-6 h-px"
              style={{ background: "linear-gradient(to right, #D4AF3740, transparent)" }}
            />
            <ProductGallery imagenes={imagenesGaleria} nombre={reloj.nombre} />
          </div>

          {/* ── RIGHT: Product info ── */}
          <div className="flex flex-col md:sticky md:top-24">

            {/* Brand + ref */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5" style={{ background: "#D4AF37" }} />
              <span
                className="uppercase font-bold"
                style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.4em" }}
              >
                {reloj.marca || "Premium Collection"}
              </span>
            </div>

            {/* Title */}
            <h1
              className="uppercase leading-none font-black mb-8"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                color: "#f0ebe0",
              }}
            >
              {reloj.nombre}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#D4AF37",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                ${Number(reloj.precio).toLocaleString("es-CO")}
              </p>
              <span
                className="uppercase"
                style={{ color: "#ffffff25", fontSize: "0.58rem", letterSpacing: "0.3em" }}
              >
                IVA incluido
              </span>
            </div>

            {/* Divider */}
            <div
              className="mb-10 h-px"
              style={{
                background:
                  "linear-gradient(to right, #ffffff15, transparent)",
              }}
            />

            {/* ── Variantes ── */}
            {reloj.variantes && reloj.variantes.length > 0 && (
              <div className="mb-10">
                <p
                  className="uppercase font-bold mb-5"
                  style={{ color: "#ffffff25", fontSize: "0.58rem", letterSpacing: "0.3em" }}
                >
                  Colores disponibles
                </p>
                <div className="flex flex-wrap gap-4">
                  {reloj.variantes.map((v: RelojVariante) => {
                    const colorCss =
                      mapaColores[v.color.toLowerCase()] || v.color.toLowerCase();
                    const isGold = colorCss === "#D4AF37";
                    return (
                      <div key={v.id} className="group/swatch flex flex-col items-center gap-2">
                        <div
                          className="rounded-full transition-all duration-300 cursor-pointer group-hover/swatch:scale-110"
                          style={{
                            width: "36px",
                            height: "36px",
                            backgroundColor: colorCss,
                            border: "1px solid #ffffff15",
                            boxShadow: isGold ? "0 0 12px #D4AF3750" : "none",
                          }}
                          title={v.color}
                        />
                        <span
                          className="uppercase"
                          style={{ color: "#ffffff25", fontSize: "0.5rem", letterSpacing: "0.2em" }}
                        >
                          {v.color}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Descripción ── */}
            {reloj.descripcion && (
              <div className="mb-12">
                <p
                  className="uppercase font-bold mb-4"
                  style={{ color: "#ffffff25", fontSize: "0.58rem", letterSpacing: "0.3em" }}
                >
                  Especificaciones
                </p>
                <p
                  style={{
                    color: "#ffffff55",
                    lineHeight: 1.9,
                    fontSize: "0.9rem",
                    borderLeft: "1px solid #D4AF3730",
                    paddingLeft: "16px",
                    fontStyle: "italic",
                  }}
                >
                  {reloj.descripcion}
                </p>
              </div>
            )}

            {/* ── Garantía row ── */}
            <div
              className="flex items-center gap-6 mb-10 px-5 py-4"
              style={{ background: "#ffffff04", border: "1px solid #ffffff08" }}
            >
              {[
                { label: "Envío gratuito", icon: "→" },
                { label: "Garantía 2 años", icon: "◈" },
                { label: "Devolución 30d", icon: "↺" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span style={{ color: "#D4AF3760", fontSize: "0.8rem" }}>
                    {item.icon}
                  </span>
                  <span
                    className="uppercase"
                    style={{ color: "#ffffff30", fontSize: "0.55rem", letterSpacing: "0.15em" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── CTA WhatsApp ── */}
            <div style={{ borderTop: "1px solid #ffffff08", paddingTop: "28px" }}>
              <a
                href={`https://wa.me/57TU_NUMERO?text=${mensajeWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full gap-3 uppercase font-bold transition-all duration-300 active:scale-[0.98] hover:bg-[#1ebd5b]"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  padding: "18px 32px",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  boxShadow: "0 8px 32px #25D36620",
                }}
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Me interesa este modelo
              </a>

              {/* Subtext */}
              <p
                className="text-center mt-3 uppercase"
                style={{ color: "#ffffff15", fontSize: "0.52rem", letterSpacing: "0.25em" }}
              >
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom decorative line ── */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #D4AF3720 30%, #D4AF3720 70%, transparent)",
        }}
      />
    </main>
  );
}