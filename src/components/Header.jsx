import { useState } from 'react'
import logo from '../img/logo.webp'

const WSP = 'https://wa.me/5491162067285'

const estilos = {
  barra: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 40,
    color: '#fff',
  },
  fila: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    padding: '14px 24px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  marcaWrap: { display: 'flex', alignItems: 'center', gap: 12 },
  marcaTexto: { display: 'flex', flexDirection: 'column', lineHeight: 1.15 },
  marcaTitulo: {
    fontSize: '0.95rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  marcaSub: {
    fontSize: '0.62rem',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    color: 'rgba(255,255,255,0.65)',
  },
  nav: { gap: 28 },
  contacto: { alignItems: 'center', gap: 14 },
}

const ENLACES = [
  { href: '#trabajos', texto: 'Trabajos' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="header-barra" style={estilos.barra}>
      <div style={estilos.fila}>
        <div style={estilos.marcaWrap}>
          <img src={logo} alt="Carpintería a medida" className="header-logo" width="42" height="42" />
          <div style={estilos.marcaTexto}>
            <span style={estilos.marcaTitulo}>Carpintería</span>
            <span style={estilos.marcaSub}>a medida</span>
          </div>
        </div>

        <nav className="header-nav" style={estilos.nav}>
          {ENLACES.map((e) => (
            <a key={e.href} className="nav-link" href={e.href}>
              {e.texto}
            </a>
          ))}
        </nav>

        <div className="header-contacto" style={estilos.contacto}>
          <a
            className="header-whatsapp"
            href={WSP}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribinos por WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.77.464 3.43 1.276 4.87L2 22l5.24-1.27a9.94 9.94 0 0 0 4.764 1.213h.004c5.523 0 10-4.477 10-10s-4.477-9.94-10.004-9.94zm0 18.18h-.003a8.19 8.19 0 0 1-4.174-1.14l-.3-.178-3.11.754.83-3.03-.196-.312a8.17 8.17 0 0 1-1.257-4.374c0-4.522 3.68-8.2 8.213-8.2 2.194 0 4.256.855 5.807 2.406a8.15 8.15 0 0 1 2.403 5.802c0 4.523-3.68 8.272-8.213 8.272z" />
            </svg>
          </a>
        </div>

        <button
          className="header-burger"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header-menu-movil ${abierto ? 'abierto' : ''}`}>
        {ENLACES.map((e) => (
          <a
            key={e.href}
            className="nav-link"
            href={e.href}
            onClick={() => setAbierto(false)}
          >
            {e.texto}
          </a>
        ))}
      </div>
    </div>
  )
}
