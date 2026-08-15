import { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView.js'
import styles from './Footer.module.css'

const WSP = 'https://wa.me/5491162067285?text=Hola!%20Vi%20el%20portfolio%20y%20quiero%20hacer%20una%20consulta.'
const INSTAGRAM = 'https://www.instagram.com/carpinteria_vazquez_01/'
const UMBRAL_SCROLL = 400

export default function Footer() {
  const footerRef = useRef(null)
  const inView = useInView(footerRef)
  const [mostrarArriba, setMostrarArriba] = useState(false)

  useEffect(() => {
    const onScroll = () => setMostrarArriba(window.scrollY > UMBRAL_SCROLL)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const volverArriba = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className={`${styles.footer} ${inView ? styles.visible : ''}`} ref={footerRef}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.columna}>
            <span className={styles.marca}>Muebles a Medida</span>
            <nav className={styles.nav}>
              <a href="#trabajos">Trabajos</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className={styles.columna}>
            <h4 className={styles.tituloCol}>Dónde trabajamos</h4>
            <p>Adrogué, Zona Sur</p>
            <p>Nos movemos a donde nos necesites</p>
          </div>

          <div className={styles.columna}>
            <h4 className={styles.tituloCol}>Contacto</h4>
            <div className={styles.redes}>
            <a
              className={styles.whatsapp}
              href={WSP}
              target="_blank"
              rel="noreferrer"
              aria-label="Escribinos por WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.77.464 3.43 1.276 4.87L2 22l5.24-1.27a9.94 9.94 0 0 0 4.764 1.213h.004c5.523 0 10-4.477 10-10s-4.477-9.94-10.004-9.94zm0 18.18h-.003a8.19 8.19 0 0 1-4.174-1.14l-.3-.178-3.11.754.83-3.03-.196-.312a8.17 8.17 0 0 1-1.257-4.374c0-4.522 3.68-8.2 8.213-8.2 2.194 0 4.256.855 5.807 2.406a8.15 8.15 0 0 1 2.403 5.802c0 4.523-3.68 8.272-8.213 8.272z" />
              </svg>
            </a>
            <a
              className={styles.whatsapp}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Seguinos en Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <span className={styles.arroba}>@carpinteria_vazquez_01</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`${styles.arriba} ${mostrarArriba ? styles.visible : ''}`}
        onClick={volverArriba}
        aria-label="Volver arriba"
      >
        ↑
      </button>
    </>
  )
}
