import {ImageResponse} from "next/og";

export const alt = "Wakama Open Graph";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 18% 22%, rgba(53,245,155,0.22), transparent 30%), radial-gradient(circle at 80% 20%, rgba(99,224,232,0.2), transparent 24%), linear-gradient(135deg, #081120 0%, #0E1730 58%, #13203A 100%)",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#63E0E8",
          }}
        >
          <div
            style={{
              height: 14,
              width: 14,
              borderRadius: 999,
              background: "#35F59B",
              boxShadow: "0 0 24px rgba(53,245,155,0.5)",
            }}
          />
          Agricultural credit infrastructure
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: 26, maxWidth: 920}}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Wakama
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              lineHeight: 1.18,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Field data, agricultural scoring and auditable files for institutions in Côte d’Ivoire,
            UEMOA and Africa.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            fontSize: 24,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          <div style={{display: "flex"}}>IMF / Banks / Insurance / Cooperatives / Agricultural programs</div>
          <div style={{display: "flex", color: "#35F59B"}}>wakama.farm</div>
        </div>
      </div>
    ),
    size,
  );
}
