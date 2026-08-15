import { useEffect, useMemo, useRef, useState } from "react";
import { fotos, CATEGORIAS, thumb, full, srcSet } from "../fotos.js";
import useInView from "../hooks/useInView.js";
import styles from "./Galeria.module.css";

// Agrupa las fotos que son del mismo mueble (mismo `proyecto`).
// Las que no tienen `proyecto` quedan como trabajo individual.
function agrupar(lista) {
  const grupos = [];
  const porProyecto = new Map();

  lista.forEach((foto) => {
    if (!foto.proyecto) {
      grupos.push({ portada: foto, fotos: [foto] });
      return;
    }
    const ya = porProyecto.get(foto.proyecto);
    if (ya) {
      // Si esta marcada como portada, manda ella: se muestra en la tarjeta
      // y es la primera que se ve al abrir el visor.
      if (foto.portada) {
        ya.portada = foto;
        ya.fotos.unshift(foto);
      } else {
        ya.fotos.push(foto);
      }
    } else {
      const grupo = { portada: foto, fotos: [foto] };
      porProyecto.set(foto.proyecto, grupo);
      grupos.push(grupo);
    }
  });

  return grupos;
}

function Tarjeta({ grupo, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { portada, fotos: delGrupo } = grupo;

  return (
    <button ref={ref} className={styles.tarjeta} onClick={onClick}>
      <span className={styles.marco}>
        <img
          src={thumb(portada.id)}
          srcSet={srcSet(portada.id)}
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          width="800"
          height="800"
          alt={portada.titulo}
          loading="lazy"
          decoding="async"
          className={styles.img}
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
        {delGrupo.length > 1 && (
          <span className={styles.contador}>{delGrupo.length} fotos</span>
        )}
        <span className={`gal-cortina ${inView ? "activa" : ""}`} />
      </span>
      <span className={styles.titulo}>{portada.titulo}</span>
      {portada.detalle && (
        <span className={styles.detalle}>{portada.detalle}</span>
      )}
    </button>
  );
}


// Visor de la foto grande. Tiene su propio estado y se re-crea con cada foto
// (key), asi no arrastra el estado de la anterior. Si Google falla, reintenta
// un par de veces antes de dar el error: muchas veces es un tropiezo pasajero.
const REINTENTOS = 2;

function Visor({ foto }) {
  const [cargada, setCargada] = useState(false);
  const [intento, setIntento] = useState(0);
  const [fallo, setFallo] = useState(false);
  const imgRef = useRef(null);

  // Si la foto ya estaba en cache, onLoad puede haber pasado antes de que
  // React enganche el handler: lo chequeamos a mano.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setCargada(true);
    }
  }, [intento]);

  const alFallar = () => {
    if (intento < REINTENTOS) {
      const t = setTimeout(() => setIntento((i) => i + 1), 600);
      return () => clearTimeout(t);
    }
    setFallo(true);
  };

  return (
    <span className={styles.visor}>
      <img
        src={thumb(foto.id)}
        className={styles.previa}
        alt=""
        aria-hidden="true"
      />
      {!cargada && !fallo && (
        <span className={styles.spinner} role="status" aria-label="Cargando" />
      )}
      {fallo && <span className={styles.aviso}>No se pudo cargar esta foto</span>}
      {!fallo && (
        <img
          key={intento}
          ref={imgRef}
          src={full(foto.id)}
          alt={foto.titulo}
          className={`${styles.fotoGrande} ${cargada ? styles.lista : ""}`}
          onLoad={() => setCargada(true)}
          onError={alFallar}
        />
      )}
    </span>
  );
}

export default function Galeria() {
  const [filtro, setFiltro] = useState("todos");
  const [abierto, setAbierto] = useState(null); // { grupo, indice }

  // Solo mostramos los filtros que tienen fotos
  const filtros = useMemo(
    () => [
      { id: "todos", nombre: "Todos" },
      ...CATEGORIAS.filter((c) => fotos.some((f) => f.categoria === c.id)),
    ],
    [],
  );

  const grupos = useMemo(() => {
    const visibles =
      filtro === "todos" ? fotos : fotos.filter((f) => f.categoria === filtro);
    return agrupar(visibles);
  }, [filtro]);

  const delGrupo = abierto ? abierto.grupo.fotos : [];
  const fotoActual = abierto ? delGrupo[abierto.indice] : null;

  const mover = (paso) =>
    setAbierto((a) =>
      a
        ? {
            ...a,
            indice: (a.indice + paso + a.grupo.fotos.length) % a.grupo.fotos.length,
          }
        : a,
    );

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e) => {
      if (e.key === "Escape") setAbierto(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <section id="trabajos">
      <div className="container">
        <span className="etiqueta">Proyectos</span>
        <h2 className="titulo-seccion">
          Medimos, fabricamos y colocamos. Estos son los resultados.
        </h2>

        {filtros.length > 2 && (
          <div className={styles.filtros}>
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`${styles.filtro} ${filtro === f.id ? styles.activo : ""}`}
                onClick={() => setFiltro(f.id)}
              >
                {f.nombre}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grilla}>
          {grupos.map((g) => (
            <Tarjeta
              key={g.portada.id}
              grupo={g}
              onClick={() => setAbierto({ grupo: g, indice: 0 })}
            />
          ))}
        </div>
      </div>

      {fotoActual && (
        <div className={styles.overlay} onClick={() => setAbierto(null)}>
          <button className={styles.cerrar} aria-label="Cerrar">
            &times;
          </button>
          {delGrupo.length > 1 && (
            <button
              className={`${styles.navBtn} ${styles.navIzq}`}
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                mover(-1);
              }}
            >
              &lsaquo;
            </button>
          )}
          <figure
            className={styles.figura}
            onClick={(e) => e.stopPropagation()}
          >
            <Visor key={fotoActual.id} foto={fotoActual} />
            <figcaption className={styles.pieFoto}>
              {fotoActual.titulo}
              {fotoActual.detalle && <span> · {fotoActual.detalle}</span>}
              {delGrupo.length > 1 && (
                <span>
                  {" "}
                  · {abierto.indice + 1}/{delGrupo.length}
                </span>
              )}
            </figcaption>
          </figure>
          {delGrupo.length > 1 && (
            <button
              className={`${styles.navBtn} ${styles.navDer}`}
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                mover(1);
              }}
            >
              &rsaquo;
            </button>
          )}
        </div>
      )}
    </section>
  );
}
