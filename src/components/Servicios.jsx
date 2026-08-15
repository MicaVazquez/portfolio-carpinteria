import { useEffect, useRef, useState } from "react";

const columnas = [
  {
    titulo: "Más de 38 años de experiencia",
    detalle:
      "Trabajos en distintos ámbitos y con distintas terminaciones: laqueado, MDF y melamina. Cada mueble se fabrica para tu espacio.",
  },
  {
    titulo: "Lo ves antes de fabricarlo",
    detalle:
      "Para tu tranquilidad, hacemos un dibujo o render del mueble que quieras, así ves el resultado antes de que exista.",
  },
  {
    titulo: "De tu idea al mueble terminado",
    detalle:
      "¿Tenés una idea de Pinterest? La adaptamos a tu casa y seguimos el proyecto con vos hasta que quede realizado.",
  },
];

const estilos = {
  titulo: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: 12,
  },
  detalle: { color: "var(--gris)", fontSize: "0.92rem" },
};

export default function Servicios() {
  const [visible, setVisible] = useState(false);
  const seccionRef = useRef(null);

  useEffect(() => {
    const el = seccionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={seccionRef} style={{ paddingBottom: 20 }}>
      <div className="container" style={{ position: "relative" }}>
        <span
          className={`servicios-vertical servicios-vertical-1 ${visible ? "activa" : ""}`}
        />
        <span
          className={`servicios-vertical servicios-vertical-2 ${visible ? "activa" : ""}`}
        />

        <div className="servicios-grid">
          {columnas.map((c) => (
            <div key={c.titulo}>
              <h3 style={estilos.titulo}>{c.titulo}</h3>
              <p style={estilos.detalle}>{c.detalle}</p>
            </div>
          ))}
        </div>

        <div
          className={`servicios-linea ${visible ? "activa" : ""}`}
          style={{ marginTop: 48 }}
        />
      </div>
    </section>
  );
}
