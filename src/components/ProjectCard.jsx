import { useRef } from 'react'
import useInView from '../hooks/useInView.js'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  imagen,
  alt = '',
  titulo,
  detalle,
  descripcion,
  enlace,
  textoEnlace = 'Ver más',
}) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <article className={styles.card} ref={ref}>
      <img className={styles.imagen} src={imagen} alt={alt} loading="lazy" />
      <div className={`${styles.info} ${inView ? styles.visible : ''}`}>
        {detalle && <span className={styles.detalle}>{detalle}</span>}
        {titulo && <h3 className={styles.titulo}>{titulo}</h3>}
        {descripcion && <p className={styles.descripcion}>{descripcion}</p>}
        {enlace && (
          <a className={styles.enlace} href={enlace} target="_blank" rel="noreferrer">
            {textoEnlace}
          </a>
        )}
      </div>
    </article>
  )
}
