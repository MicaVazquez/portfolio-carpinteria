const WSP = 'https://wa.me/5491162067285?text=Hola!%20Vi%20el%20portfolio%20y%20quiero%20pedir%20un%20presupuesto.'

const estilos = {
  seccion: {
    background: 'var(--tinta)',
    color: 'var(--crema)',
  },
  titulo: {
    fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
    fontWeight: 800,
    textTransform: 'uppercase',
    lineHeight: 1.15,
    maxWidth: 560,
    marginBottom: 28,
  },
  tel: {
    display: 'block',
    width: 'fit-content',
    color: 'var(--crema)',
    fontSize: '1.35rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    textDecoration: 'none',
    marginBottom: 32,
  },
  pie: {
    marginTop: 56,
    paddingTop: 20,
    borderTop: '1px solid rgba(241,236,227,0.2)',
    fontSize: '0.78rem',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: 'rgba(241,236,227,0.55)',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
}

export default function Contacto() {
  return (
    <section id="contacto" style={estilos.seccion}>
      <div className="container">
        <span className="etiqueta">Contacto</span>
        <h2 style={estilos.titulo}>
          ¿Tenés una idea? Te mostramos el render y la hacemos realidad.
        </h2>
        <a style={estilos.tel} href="tel:+5491162067285">
          +54 9 11 6206-7285
        </a>
        <a className="btn btn-claro" href={WSP} target="_blank" rel="noreferrer">
          Escribinos por WhatsApp
        </a>
        <div style={estilos.pie}>
          <span>Muebles a Medida</span>
          <span>Adrogué &middot; Zona Sur</span>
          <span>+38 años de experiencia</span>
        </div>
      </div>
    </section>
  )
}
