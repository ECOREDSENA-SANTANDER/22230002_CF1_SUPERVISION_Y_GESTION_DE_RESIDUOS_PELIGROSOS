export default {
  global: {
    componenteFormativo:
      'Prevención, minimización y manejo interno de residuos sólidos peligrosos.',
    descripcionCurso:
      'Para prevenir y/o minimizar los residuos peligrosos dentro de una empresa, es necesario tener claro los procesos, actividades, insumos y materias primas que hacen parte de la planta de producción, con esa información se pueden realizar diferentes análisis y estrategias para llegar a ese objetivo de minimizar los residuos. Por otro lado, pero hacia el mismo objetivo, la empresa se debe comprometer con el buen manejo interno de estos residuos, su alistamiento, rotulado y etiquetado, movilización interna y almacenamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Prevención y minimización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es un residuo peligroso?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              '¿Qué es un plan de gestión integral de residuos peligrosos? ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Identificación de fuentes de generación ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Clasificación e identificación de características de peligrosidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cuantificación de la generación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Alternativas de prevención y minimización.',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo interno de los residuos sólidos peligrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Procedimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aspectos para tener en cuenta',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Contingencias en manejo de residuos peligrosos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_22230002_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'de Los Desechos Peligrosos Y Su Eliminación, S. E. L. C. D. E. L. M. T. (s/f). CONVENIO DE BASILEA. Basel.int. Recuperado el 2 de septiembre de 2024, de',
      link:
        'https://www.basel.int/Portals/4/Basel%20Convention/docs/text/BaselConventionText-s.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Gestión Integral de Residuos o Desechos Peligrosos. Bogotá, Colombia: Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. Decreto 4741 de 2005. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Consultado el 03 de agosto de 2014, en',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
  ],
  glosario: [
    {
      termino: 'Acondicionamiento',
      significado:
        'Es la preparación de un área de la organización para almacenar temporalmente los residuos peligrosos generados dentro de ella. ',
    },
    {
      termino: 'Comburente',
      significado:
        'Son sustancias y preparados que, en contacto con otras sustancias, en especial con sustancias inflamables, produzcan una reacción fuertemente exotérmica.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Un acontecimiento que no está previsto, pero tiene posibilidad de ocurrencia. ',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de protección personal.',
    },
    {
      termino: 'Irritante  ',
      significado:
        'Son aquellas sustancias o preparados no corrosivos que, por contacto inmediato, prolongado o repetido con la piel o mucosas, pueden provocar una reacción inflamatoria. ',
    },
    {
      termino: 'Peligrosidad',
      significado:
        'La capacidad de un objeto, situación o persona para causar daño o riesgo a la salud o la integridad de alguien. ',
    },
    {
      termino: 'PMIRESPEL',
      significado: 'Plan de manejo integral de residuos peligrosos. ',
    },
    {
      termino: 'Plan de Acción',
      significado:
        'Establece los procedimientos que se deben llevar a cabo en caso de una emergencia. ',
    },
    {
      termino: 'RESPEL ',
      significado: 'Residuos peligrosos',
    },
    {
      termino: 'Tóxico',
      significado:
        'Las sustancias y preparados que, por inhalación ingestión o penetración cutánea en pequeñas cantidades puedan provocar efectos agudos o crónicos e incluso la muerte. ',
    },
  ],
  complementario: [
    {
      tema: 'Guía para la gestión integral de residuos peligrosos.',
      referencia:
        '(S/f). Edu.co. Recuperado de https://www.uptc.edu.co/export/sites/default/sig/doc/2018/guia_residuos.pdf ',
      tipo: 'Guía',
      link:
        'https://www.uptc.edu.co/export/sites/default/sig/doc/2018/guia_residuos.pdf',
    },
    {
      tema: 'Etiquetado de materiales peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/1vGRTvAgqso ',
      tipo: 'Video',
      link: 'https://youtu.be/1vGRTvAgqso',
    },
    {
      tema: 'Manejo de residuos peligrosos ',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/AbUirfP7h1Y ',
      tipo: 'Video',
      link: 'https://youtu.be/AbUirfP7h1Y ',
    },
    {
      tema: 'Manejo y transporte seguro de residuos peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/uDJRkt3khpU',
      tipo: 'Video',
      link: 'https://youtu.be/uDJRkt3khpU ',
    },
    {
      tema: 'Materiales peligrosos ',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/79b8q3UCjDc ',
      tipo: 'Video',
      link: 'https://youtu.be/79b8q3UCjDc',
    },
    {
      tema: 'Manejo de residuos peligrosos',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de  https://youtu.be/t-V8qzBoBU0',
      tipo: 'Video',
      link: 'https://youtu.be/t-V8qzBoBU0',
    },
    {
      tema: 'Manual de uso de productos químicos ',
      referencia: '(S/f-b). Edu.co. Recuperado de Zajuna',
      tipo: 'Manual',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Complementaria/institution/SENA/CienciasNaturales/22230002/Contenido/DocArtic/mat_apo_13.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando Enrique Bohórquez Ariza ',
          cargo: 'Experto temático ',
          centro: 'Centro de Gestión Industrial Regional Distrito Capital ',
        },
        {
          nombre: 'Gissela Alvis Norma Buenaventura ',
          cargo: 'Asesoras pedagógicas ',
          centro: 'Centro de Industria y la Construcción ',
        },
        {
          nombre: 'Diana Rocío Possos ',
          cargo: 'Líder ',
          centro: 'Centro de Industria y de la Construcción ',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
