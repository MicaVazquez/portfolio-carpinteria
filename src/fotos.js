// Fotos del portfolio, tomadas del álbum compartido de Google Fotos "Trabajos".
//
// Campos de cada foto:
//   titulo    nombre del mueble (se ve en negro)
//   detalle   material o terminación (se ve en gris). Si está vacío, no se muestra.
//   categoria una de las de CATEGORIAS, define en qué filtro aparece
//   proyecto  (opcional) si varias fotos son del MISMO mueble, comparten
//             esta etiqueta: se muestran como una sola tarjeta y las demás
//             se ven al abrirla.
//   portada   (opcional) true en la foto del grupo que querés que se vea
//             en la tarjeta y primera en el visor
//
// Para AGREGAR una foto: sumá un bloque. Para SACARLA: borrá su bloque.

const BASE = 'https://lh3.googleusercontent.com/pw/'

export const CATEGORIAS = [
  { id: 'cocinas', nombre: 'Cocinas' },
  { id: 'placares', nombre: 'Placares y vestidores' },
  { id: 'banos', nombre: 'Baños y vanitorys' },
  { id: 'puertas', nombre: 'Puertas y revestimientos' },
  { id: 'muebles', nombre: 'Muebles a medida' },
]

export const fotos = [
  {
    id: 'AP1GczOw8MZPXgbpPe6YK2JPbLUnni53eAXmP2L_uKt9ywI6oaxN9ZYE7OpCVJlxsdwW9wJEkxv8DrEOo1Z0PL-0fOmM7eq1m88bKESX-Pip87fpVrv9YWnU',
    titulo: 'Panel de TV con estantería',
    detalle: '',
    categoria: 'muebles',
    proyecto: 'grupo-1',
  },
  {
    id: 'AP1GczM8N_wx0hYX9p07Xz51vHyUA12wpoNHsHMI9tSnC4spZk26OJBig67HYM9gVMKmt5QAwNBroI0cUg3XX3xR5-zsGKfpPIvc_IUiwWgNx1ZAHOuZoQbF',
    titulo: 'Panel de TV con estantería',
    detalle: '',
    categoria: 'muebles',
    proyecto: 'grupo-1',
  },
  {
    id: 'AP1GczPUKEC085rqVP6BIYRX_4nrvFSoamCe8FtFp0e427vS9FK3A-cM21ST5bFOvNYelgzBJKSfQPje0vg9XJ4LG6vI6lNPXsciyQmrFlCU-GNioHgRfdLC',
    titulo: 'Mueble bajo con tapa de mármol',
    detalle: '',
    categoria: 'muebles',
  },
  {
    id: 'AP1GczPrtIkRv6oOhrvGg-IdUk8EwOGio8phS6cZi1seOJ5-TjI16OJlXO7QBmilBWNi0cu6DsyHzodCkPdPmXm3cyRf7gQzptrrIYLyCmzRpinV6V8DJHbV',
    titulo: 'Revestimiento de living en negro',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-6',
  },
  {
    id: 'AP1GczOJADHepbUl_mM4qGXeDJSmF0E86CCA0G-XXC3WiU7rNU8MqU7TMQEWzrCRYlol2aVPnt7hcUv3A-8sx35OtlR9e7RYlCP8tZLd2o_K6L9yDqjLrdzF',
    titulo: 'Revestimiento de living en negro',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-6',
  },
  {
    id: 'AP1GczPH7MMKTPVJ917L6ZjpcwElrzwTmrR75Cfz0cw4KWQzPMyyo15yuZX7mZP29M96gFaYs-y1ZGgyvsfw8G39tXKm0fbZ9wekpqilkWf5waXIRqOkEP6u',
    titulo: 'Puerta de acceso con ranuras',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-8',
  },
  {
    id: 'AP1GczM4KeAFFpgXADVUSdfrTW53lxjG7I2eyQqvd52x-tmpuQ8mC28ivt6LzeTc3GVDeGqya7RAEZ7KEfh70rqyCa8qiimOLsZfZlf89mpJXl0QCIKssVBp',
    titulo: 'Frente de placard ranurado',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-9',
  },
  {
    id: 'AP1GczNMnC_zjKnWKSSmyOgXcHXqbz1GiOK71IxraPy6bnl2It87hs0JhwXe7sbo6eDZ5QT9fKpEmS8BFk_LCCTMGpg63JH4mNiNkbk-f_5Ruvd8-NNZbItw',
    titulo: 'Frente de placard ranurado',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-9',
    portada: true,
  },
  {
    id: 'AP1GczNoBaylAGmM9uWhb2EmWFcRmpoUAtQP7ez9-1jH5052xcZzATkRQ-orsmi4wAr920yqHgEZ6-blw69jHQWp2AEjIcqL8dhProin4YB2DEWCLdoJMm8x',
    titulo: 'Puerta de acceso con ranuras',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-8',
    portada: true,
  },
  {
    id: 'AP1GczN_Af3FZUaXPAW3k52yLF8yzpzgdQDJ5OXv09n-t5mKKhUg5vxzXNcjUhAikP24aVQlV8ZrbiEis0CInZCZHq8RAgSuvuXkNHIdME3Bo5nZhyJZsfC8',
    titulo: 'Puerta de acceso con ranuras',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-8',
  },
  {
    id: 'AP1GczPu23SL51bDSzInBKlv96G_rFNZQ8ybWHi9UyIpCZq-wCUBz-uv9uuIdW_znnlTlJFuS6t61L_H2WY102GUos5mYDmJnxkbVodxgBkzw9WWOioITDDE',
    titulo: 'Lavadero con mesada de madera',
    detalle: '',
    categoria: 'muebles',
  },
  {
    id: 'AP1GczPNh5Z9vjx4Uplv1yzG6v97cY1BkJTORuUGA-rvw86XnoTKk1Y-e8NhMsIf_Woq6SZtDf6gWVMqdB7_H9qUUWoEHTeDhl7ppGpLO1DsfWr249rgXHXk',
    titulo: 'Revestimiento de hall con nicho',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-14',
  },
  {
    id: 'AP1GczP7jwxlTbNsRDMQQQSXAUHibJM9l0i-c5G36UAbMOtCobG-c4lbiaO3C_5iHJWTuZwsMX7cB83fdmfKLB5ucXPtbQsAuPtfCRQnsQbEu7RRqgAc5Nc0',
    titulo: 'Revestimiento de hall con nicho',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-14',
  },
  {
    id: 'AP1GczN4C9ft8VlPfJ95ZH4oySRtixjgFdL0Txk3FDF-Jf3lJuESLUpHWnfu_P6nbkojq_5SkgHbEPVzTL1iRaMHSC5CCmfWOVlNZkMrDG_JCeFngZ42vgHN',
    titulo: 'Revestimiento de hall con nicho',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-14',
  },
  {
    id: 'AP1GczNejSXQfbAKm0hfWCX_FnPYRCfJDmwxKPc6rPbelunKYFlnSzrrtxKDnfNegs73ZkMMOZHnTj7oh9tXokQo5wkWkUfgjymReJGobf8G4s-7ZnFrYgyR',
    titulo: 'Frente de placard ranurado',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-9',
  },
  {
    id: 'AP1GczPrJsd9z5MkkaXoYcPgVzUQy1HQHMRGgpqtppmac44LwDohT8MC1SyWyJKyaCsRdq2YGEZUpiE28ApHFWWsOxhir8IX8U2nLuyt1wTIM47TTyQ9alMR',
    titulo: 'Frente de placard ranurado',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-9',
  },
  {
    id: 'AP1GczNk-DceWd0Vd2DAr9CyqYcfyMQHfiyH3ZNEeepXUiPWH_NAJxwKlsxfyXwU6UIxtmq8Iet1SxFL3VU_kTdJfy4c9__4H3-FYJfnDSwD_btpZPug8y50',
    titulo: 'Vanitory de toilette con bacha de apoyo',
    detalle: '',
    categoria: 'banos',
  },
  {
    id: 'AP1GczP5y3zVf4g5Wy-I0VTpHQhn1eXhn1TTZxixtQI9WrtJnDfPvJSlg6ghtqlczZJqUd19489HFSpCh5B_R_lx85jSTAjINpbY8thjSvehoy1rEYZV0yi-',
    titulo: 'Frente de placard en gris grafito',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-20',
  },
  {
    id: 'AP1GczNYkNzvre63Ow1GXcOvzRylE69LyZR6Yq2-3Hb2Wfl-9_XM-e1tyqT46gYINrYNKorJrWRrrS_ff8McCpXNXxS53eSS3aPVCLbdosrCzR3-vqyfCmch',
    titulo: 'Frente de placard en gris grafito',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-20',
  },
  {
    id: 'AP1GczM530oyszU9rkwaAhIeMMZkkRHvyEMF64G6NsEUaperlItRzLAocHCPhMUEDfW1M86_bR9Yxu7qGgGFxbsvEGqer_AK3lYBSyO0DzKOKRHa35UIPEUn',
    titulo: 'Mesa de comedor en madera maciza',
    detalle: '',
    categoria: 'muebles',
  },
  {
    id: 'AP1GczNPzPJd3IXnTvUBmhldXCSd2bRNJ7CFr8-Ad5NMqDByoB5AKdcF7VS0EWyxcrd6_EADaZUOxsONlaxQYWlXaoX1SSSSqX4CAVYs0tTiFNXjTAfbuGsG',
    titulo: 'Placard con cajonera',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-23',
  },
  {
    id: 'AP1GczPIyOVPsGI-PID8gZVlqcDPVTfIMpBLa6zehGNaqkPpBC0eKkPL1SFG2GfcSsPitMD-mHaNK-DuBbxaBCfCBLznj5RpJJ5LWQLV08vLx0-iCRHCuDV1',
    titulo: 'Placard con cajonera',
    detalle: '',
    categoria: 'placares',
    proyecto: 'grupo-23',
    portada: true,
  },
  {
    id: 'AP1GczO-MNSCppq3civPPr6o_qFGNuzNFDlwnv8onscGvABj9vfas-8B_zasB-J47edkmbqB-RmUO37RgyPNewnLHJgH-3n84L0SrpjDrJZK5m7GGRSTW0-D',
    titulo: 'Vanitory doble en madera',
    detalle: '',
    categoria: 'banos',
    proyecto: 'grupo-25',
  },
  {
    id: 'AP1GczP6ljt_w1uMSlwSLxIOY5xKadODgp1y0FGM5dFMaJoe_59x3K2NnR_1M658qZ4v6Te8ZjDl5k1wmpSBJtiFXyXj-3yZAaH6tXwtsa3uFGEKLa2BSy7B',
    titulo: 'Vanitory doble en madera',
    detalle: '',
    categoria: 'banos',
    proyecto: 'grupo-25',
  },
  {
    id: 'AP1GczNTe1zlPNgq-npJ9WI9xy3y7mv6PkRVhzyCjgRf6pJe6JsoX936cpv0V9PknU1XN0OAVJ62Iz_7y--xncz9L9unxWlO72UGE9BIeMVAr8rAKKdPXzNu',
    titulo: 'Vanitory flotante con mesada blanca',
    detalle: '',
    categoria: 'banos',
  },
  {
    id: 'AP1GczPKaRg2DpjdgfLi1CvBAHhCvNmYj-WYj2qeZtljRJNhLM7ukSwT9e0DlKwTwS4UmvEeGKhufr0ThaNDvCqEMwTjcNyezfZaXbU0CUxuFroXSSpTekaM',
    titulo: 'Panel de TV con estante flotante',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-28',
  },
  {
    id: 'AP1GczNp-3Lnid7hfNICuVaOb1uNy1JXpubBQQiwLD24izks-bnjVjfqUvaJVzM4j7FuDzo7J2gzoKTAOTwSWHhHkfVX2OiS6QSP1jeCNb2W0DUkBtitgZT1',
    titulo: 'Panel de TV con estante flotante',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'grupo-28',
  },
  {
    id: 'AP1GczPPO07JRTeS4RNJIhDYIBM2CaNX3EWoPIr-LVp25QpGAwwjIgSqpRUya8AUZ-yZiciEx3aAYV7F-06wsNKQB4O-sYhnVfBpNdc4cWJjq54XY-ZkyOeo',
    titulo: 'Rack de TV con frente en medias cañas',
    detalle: '',
    categoria: 'muebles',
    proyecto: 'rack-verde',
  },
  {
    id: 'AP1GczPcajZeCjgB-MDr4c9UotMG1S2v5WuypEebuI0JwEj5xKxJ6hAkfH8anfCzl54TIQ970O2RwmLvD2TU2TtePNhnxnAR4YxfJuhdgMowDlVT_6m2Dmjd',
    titulo: 'Rack de TV con frente en medias cañas',
    detalle: '',
    categoria: 'muebles',
    proyecto: 'rack-verde',
  },
  {
    id: 'AP1GczPEzwc8y1Zg54msY09TI26DtwiPH0ree4iNML1VyPTAS2N6adnyR1T5cwtev6OyaHTA89oqIP_AJKW1VHOIH02HdQIMtEN0IFqIKAEirI96sQghjy31',
    titulo: 'Puerta de entrada en madera con parasol',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'entrada-madera',
  },
  {
    id: 'AP1GczPP_aFyLC7-HtVAGSw_fGDeuoY0bXxMVqbPdffQeMn48Jh9ck4J6zNO5UO3761eDY_a32OXnL9EDDVhuCXjSdR669fuGPcJ9Bx7MQO3o99_WelckelF',
    titulo: 'Puerta de entrada en madera con parasol',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'entrada-madera',
  },
  {
    id: 'AP1GczMzUfFVHY_NJs4MHAy_6VWkOVjy3aJUZIRQgWJK-rAi567TNye_rJIQ-LS1RLzXJws2RelS-JhW8rItXs8QPGFffzt2EjYjeqqbw-_F7hJr-XGuFaih',
    titulo: 'Revestimiento de listones con estantería',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'listones-dormitorio',
  },
  {
    id: 'AP1GczNdWNnHvxY6v80oH7ObQjyQfyK9xUHm7B0CC1FEOg5CjTGR7kbw3UP_v0K3X6TFHXerzwvZc9xVqBzaeVggaUlXe_5mOqY9u2c3pzhGUmbdbWv8QAfE',
    titulo: 'Revestimiento de listones con estantería',
    detalle: '',
    categoria: 'puertas',
    proyecto: 'listones-dormitorio',
  },
  {
    id: 'AP1GczMzB73Rf_nD6CTZRJ5EVLd9M2itP0qW-tBivlIFx9OsePBZ1eZWwkxUWj_emQABpE7BqUakQBbo7HC3D8unm7FZb1ZijELSmH07WDMbwC5jnT8EkoIY',
    titulo: 'Placard con puertas espejadas',
    detalle: '',
    categoria: 'placares',
    proyecto: 'placard-espejado',
  },
  {
    id: 'AP1GczPidiL7K1M9vciAYYUWMGF05aXCZUBnE_cQdtS95p5P25bB4brcpszP081sS0vemJzGI0sDkMpGWOzkRMgCynlXnQbxBUiwkzL149xIo2xe7MBZSAYh',
    titulo: 'Placard con puertas espejadas',
    detalle: '',
    categoria: 'placares',
    proyecto: 'placard-espejado',
  },
  {
    id: 'AP1GczOghuBIRUEaT8laz1hRcMkn0TRO2WGyNG2V1fGZfZ7sPeoCW-7BzOTIybsoh4l6EILMO2bY_GF-Rgipr6Pk6CocSN5jX3GvA2sWnt9dHOjTIf0tq_HE',
    titulo: 'Vestidor con estantería iluminada',
    detalle: '',
    categoria: 'placares',
  },
  {
    id: 'AP1GczMT4cl0gZGulMKFlsnG5N4PN369KNoAJRMKDNL69towFdDQ2VwDzvDZcL9NewuRLZcI7OiU-RjuHfvUT3HoAIFuwvZjk2JzSMg0hHQczfdWj9Ew5qiS',
    titulo: 'Placard con puertas vidriadas',
    detalle: '',
    categoria: 'placares',
  },
  {
    id: 'AP1GczMB2ViWSVNUJADkOLo6oMvtrYm-Vus6ALdo8muCtwT6zLGh8OOBlsRrOhn9eLISaPISXYww3D9xIolY_Nel3GTYI-N41idUtAe9KxCi2-MLV1o6ZqBr',
    titulo: 'Vanitory en madera con herrajes de bronce',
    detalle: '',
    categoria: 'banos',
  },
]

// -rw le pide WebP a Google: pesa 25-35% menos que el JPG, misma calidad.
export const img = (id, ancho) => `${BASE}${id}=w${ancho}-rw-no`

export const thumb = (id) => img(id, 800)
export const full = (id) => img(id, 1600)
export const xl = (id) => img(id, 2600)

// Para que el navegador elija el tamano segun la pantalla
export const srcSet = (id) =>
  [400, 600, 800, 1200].map((w) => `${img(id, w)} ${w}w`).join(', ')
