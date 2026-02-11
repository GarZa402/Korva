import { supabase } from "@/lib/supabaseClient";
import { Reloj } from "@/types/reloj";
import WatchCard from "./ProductCard";

export default async function CatalogoSection() {
  const { data: relojes, error } = await supabase
    .from("relojes")
    .select(`
      *,
      variantes:reloj_variantes(*)
    `)
    .eq("activo", true)
    .order("creado_en", { ascending: false });

  if (error || !relojes || relojes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="h-px w-16" style={{ background: "#D4AF3740" }} />
        <p
          className="uppercase tracking-widest"
          style={{ color: "#ffffff20", fontSize: "0.65rem", letterSpacing: "0.3em" }}
        >
          Sin piezas disponibles
        </p>
        <div className="h-px w-16" style={{ background: "#D4AF3740" }} />
      </div>
    );
  }

  return (
    <section>
      {/* ── Section header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6" style={{ background: "#D4AF37" }} />
            <span
              className="uppercase font-bold"
              style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.35em" }}
            >
              Colección Completa
            </span>
          </div>
          <p style={{ color: "#ffffff20", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <span style={{ color: "#F1E2C3", fontWeight: 700 }}>{relojes.length}</span>{" "}
            {relojes.length === 1 ? "pieza" : "piezas"} disponibles
          </p>
        </div>

        <div
          className="hidden sm:flex items-center gap-3"
          style={{ color: "#ffffff25", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          <span>Ordenado por</span>
          <span style={{ color: "#D4AF37", fontWeight: 700 }}>Más Reciente</span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="mb-10 h-px"
        style={{ background: "linear-gradient(to right, #D4AF3730, #D4AF3710 50%, transparent)" }}
      />

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {relojes.map((reloj: Reloj) => (
          <WatchCard key={reloj.id} reloj={reloj} />
        ))}
      </div>

      {/* ── Bottom ornament ── */}
      <div className="mt-16 flex flex-col items-center gap-3">
        <div
          className="h-px w-24"
          style={{ background: "linear-gradient(to right, transparent, #D4AF3330, transparent)" }}
        />
        <p style={{ color: "#ffffff15", fontSize: "0.55rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
          Fin de colección
        </p>
        <div
          className="h-px w-24"
          style={{ background: "linear-gradient(to right, transparent, #D4AF3330, transparent)" }}
        />
      </div>
    </section>
  );
}