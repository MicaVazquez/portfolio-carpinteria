import { useEffect, useRef, useState } from "react";
import { fotos, full, img, xl } from "../fotos.js";
import styles from "./Hero.module.css";

const WSP =
  "https://wa.me/5491162067285?text=Hola!%20Vi%20el%20portfolio%20y%20quiero%20hacer%20una%20consulta.";
const PORTADA = fotos[0];
const PORTADA_CHICA = img(PORTADA.id, 1200);
const PORTADA_MEDIA = xl(PORTADA.id);
const TITULO = "Carpintería de muebles a medida";
const PALABRAS = TITULO.split(" ").map((palabra) => palabra.split(""));

// Las fotos del hero se eligen POR ID: es lo unico que no cambia si
// renombramos, reordenamos o reagrupamos los trabajos en fotos.js.
const porId = (id) => {
  const foto = fotos.find((f) => f.id === id);
  if (!foto) {
    console.warn(`[Hero] La foto ${id.slice(0, 12)}... ya no esta en fotos.js`);
    return fotos[0];
  }
  return foto;
};

// Cuatro columnas que entran desde la izquierda, una atras de la otra.
const COLUMNAS = [
  // Panel de TV con estanteria
  { id: 'AP1GczOw8MZPXgbpPe6YK2JPbLUnni53eAXmP2L_uKt9ywI6oaxN9ZYE7OpCVJlxsdwW9wJEkxv8DrEOo1Z0PL-0fOmM7eq1m88bKESX-Pip87fpVrv9YWnU', delay: 0 },
  // Mueble bajo con tapa de marmol
  { id: 'AP1GczPUKEC085rqVP6BIYRX_4nrvFSoamCe8FtFp0e427vS9FK3A-cM21ST5bFOvNYelgzBJKSfQPje0vg9XJ4LG6vI6lNPXsciyQmrFlCU-GNioHgRfdLC', delay: 180 },
  // Frente de placard ranurado
  { id: 'AP1GczNMnC_zjKnWKSSmyOgXcHXqbz1GiOK71IxraPy6bnl2It87hs0JhwXe7sbo6eDZ5QT9fKpEmS8BFk_LCCTMGpg63JH4mNiNkbk-f_5Ruvd8-NNZbItw', delay: 360 },
  // Revestimiento de hall con nicho
  { id: 'AP1GczP7jwxlTbNsRDMQQQSXAUHibJM9l0i-c5G36UAbMOtCobG-c4lbiaO3C_5iHJWTuZwsMX7cB83fdmfKLB5ucXPtbQsAuPtfCRQnsQbEu7RRqgAc5Nc0', delay: 540 },
].map((c) => ({ foto: full(porId(c.id).id), delay: c.delay }));

export default function Hero() {
  const heroRef = useRef(null);
  // El hero es lo primero que se ve: arranca apenas monta, sin esperar
  // al observador. Asi el titulo se pinta antes y mejora el LCP.
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setInView(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={styles.hero}>
      <header className={styles.marco} ref={heroRef}>
        <div
          className={styles.fondo}
          style={{
            "--bg-chica": `url(${PORTADA_CHICA})`,
            "--bg-grande": `url(${PORTADA_MEDIA})`,
          }}
        />
        <div className={styles.velo} />

        <div className={styles.columnas}>
          {COLUMNAS.map((col, i) => (
            <div
              key={i}
              className={`${styles.columna} ${inView ? styles.visible : ""}`}
              style={{
                backgroundImage: `url(${col.foto})`,
                transitionDelay: `${col.delay}ms`,
              }}
            />
          ))}
        </div>

        <div className={styles.texto}>
          <h1 className={`${styles.titulo} ${inView ? styles.visible : ""}`}>
            {(() => {
              let indice = 0;
              return PALABRAS.flatMap((palabra, pi) => {
                const span = (
                  <span key={`p${pi}`} className={styles.palabra}>
                    {palabra.map((letra) => {
                      const delay = 120 + indice * 16;
                      indice += 1;
                      return (
                        <span
                          key={indice}
                          className={styles.letra}
                          style={{ transitionDelay: `${delay}ms` }}
                        >
                          {letra}
                        </span>
                      );
                    })}
                  </span>
                );
                return pi === 0 ? [span] : [" ", span];
              });
            })()}
          </h1>
          <p className={`${styles.bajada} ${inView ? styles.visible : ""}`}>
            Producción y colocación en laqueado, MDF y melamina. Más de 38 años
            de experiencia. Desde Adrogué a donde nos necesites.
          </p>
          <a
            className={`btn btn-claro ${styles.cta} ${inView ? styles.visible : ""}`}
            style={{
              transition:
                "opacity 700ms ease-out, transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
              transitionDelay: "1150ms",
            }}
            href={WSP}
            target="_blank"
            rel="noreferrer"
          >
            Pedir presupuesto
          </a>
        </div>
      </header>
    </div>
  );
}
