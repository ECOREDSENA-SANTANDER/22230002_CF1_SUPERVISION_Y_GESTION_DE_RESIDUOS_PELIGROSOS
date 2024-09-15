<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prevención y minimización

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1¿Qué es un residuo peligroso?

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-1
        img(src='@/assets/curso/temas/tema1/img01.svg', alt='')
      .col-lg-11 
        p Según la Universidad Pedagógica Nacional un residuo peligroso es aquel que por sus características intrínsecas puede causar daño a la salud humana o al ambiente. Algunas características que otorgan a un residuo el rango de peligroso son:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span
            | Características de los residuos peligrosos

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/infografia.svg', alt='en el diagrama se enuncian las siguientes características: tóxico, corrosivo, infeccioso, explosivo, inflamable, ecotóxico, reactivo.')
    
          .tarjeta.color-primario.p-3(x="52%" y="27%" numero="+")
            .h5.mb-2.text-center Explosivo

          .tarjeta.color-primario.p-3(x="37%" y="43%" numero="+")
            .h5.mb-2.text-center Corrosivo

          .tarjeta.color-primario.p-3(x="34%" y="73%" numero="+")
            .h5.mb-2.text-center Ecotóxico

          .tarjeta.color-primario.p-3(x="44%" y="95%" numero="+")
            .h5.mb-2.text-center Reactivo   

          .tarjeta.color-primario.p-3(x="59%" y="95%" numero="+")
            .h5.mb-2.text-center Inflamable     

          .tarjeta.color-primario.p-3(x="69%" y="73%" numero="+")
            .h5.mb-2.text-center Tóxico  

          .tarjeta.color-primario.p-3(x="67%" y="43%" numero="+")
            .h5.mb-2.text-center Infeccioso     
            
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 ¿Qué es un plan de gestión integral de residuos peligrosos? 
      
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-5
          img(src='@/assets/curso/temas/tema1/img02.png', alt='')
        .col-lg-1
          img(src='@/assets/curso/temas/tema1/img01.svg', alt='')
        .col-lg-6
          p De acuerdo con la normatividad ambiental vigente (Decreto 4741 de 2005) los generadores de residuos peligrosos deben elaborar un plan de gestión integral de los residuos peligrosos. 
          .cajon.color-primario.p-4.mb-4
            p •  Tendiente a prevenir y minimizar la generación de residuos peligrosos (RESPEL).
            p •  Se debe documentar: 
            ul.lista-ul--color
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
              li.text-center
                i.fas.fa-biohazard
                | Las características de peligrosidad. 
      p.mb-5 De acuerdo con los lineamientos para elaborar un Plan de Gestión Integral de Residuos Peligrosos (PGIRESPEL) #[b (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2005)], estos planes deben contemplar los siguientes componentes: 

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-12.col-md-12.col-12
              .tarjeta--container.row
                .col-md.tarjeta.color-acento-contenido.d-none.d-lg-block
                  .row.justify-content-center
                    .col-12
                      figure
                        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img03.png', alt='tema1')
                .col-md.tarjeta.color-adicional.p-0
                  .row.align-items-center.mb-5.p-4
                    .col-lg-12
                      ol.lista-ol--cuadro
                        li
                        .lista-ol--cuadro__vineta
                          span 1
                        | Prevención y minimización. 
                        li
                        .lista-ol--cuadro__vineta
                          span 2
                        | Manejo interno ambientalmente seguro. 
                        li
                        .lista-ol--cuadro__vineta
                          span 3
                        | Manejo externo ambientalmente seguro. 
                        li
                        .lista-ol--cuadro__vineta
                          span 4
                        | Ejecución, seguimiento y evaluación del plan. 
                      .cajon.verde-trans
                        p.p-2 La organización debe generar todos los lineamientos, instructivos, programas o medidas tendientes para cumplir con estos cuatro componentes.
        .col-lg-3
          img(src='@/assets/curso/temas/tema1/img04.png', alt='tema1')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/tema1/icono.svg")
            h3.bg13.py-2.w-card-text Objetivos y metas 
        .py-3
        .col-sm-12.col-lg-7
          .d-flex
            h3.bg131.py-2.w-card-text1 Objetivos
      
      .row.mb-5(data-aos="zoom-in-left")
        .col-lg-12
          p Son los propósitos que se quieren cumplir con el PGIRESPEL y deben estar orientados a todos los componentes de este. 
        .col-lg-5
          h4 Características de los objetivos:
        .py-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            img(src="@/assets/curso/temas/tema1/img05.png")
          .col-lg-5
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 1
                | Viables
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 2
                | Coherentes con la organización
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 3
                | Reales
            .py-2
            .row.bg2
              ol.lista-ol--cuadro
                li
                .lista-ol--cuadro__vineta
                  span 4
                | Que se puedan cumplir     
      .row.justify-content-start.mb-4
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            h3.bg131.py-2.w-card-text Metas 
      
      p.mb-5 Son los medios para alcanzar los objetivos y deben estar en términos de cantidad y tiempo.
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span
              | Características de las metas
        .col-lg-12
          img(src="@/assets/curso/temas/tema1/img06.svg", alt='En el diagrama se mencionan las siguientes características de las metas: -Se pueden implementar -No deben ser superficiales -Reales -Medibles -Deben tener tiempo de cumplimiento -No deben ser muy ambiciosas')
          .py-3
          p.mb-5 Teniendo en cuentas las características de los objetivos y las metas se pueden tomar como ejemplo las siguientes relaciones:
        
      
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8
          img(src="@/assets/curso/temas/tema1/img07.svg")


      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.3 Identificación de fuentes de generación 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p.mb-5 Una fuente es el lugar donde se genera el residuo peligroso y los diferentes tipos de fuentes dependen del origen de generación, teniendo en cuenta esto el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2007 nos presenta los siguientes tipos de fuentes: 
        
        .col-lg-7
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span
              | Fuentes generadoras
          img(src="@/assets/curso/temas/tema1/img08.svg", alt="En la imagen se presentan 4 imágenes que ejemplifican fuentes generadoras de RESPEL: actividades productivas, actividades del sector servicios, consumo de productos con características peligrosas y hogares. ")
        
        .col-lg-12
          p.mb-5 Para identificar fuentes generadoras de RESPEL y etapas donde podrian encontrarse, es importante revisar todo el proceso productivo y las áreas de soporte siguiendo cada uno de los siguientes pasos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .cajon.bg3.p-4.mb-4
            .bg4.p-3
              ul.lista-ul--color
                li
                  i.fas.fa-biohazard
                  | Analizar paso a paso de todos los procesos que se den en la compañía. 
                li
                  i.fas.fa-biohazard
                  | Las características de peligrosidad. 
                li
                  i.fas.fa-biohazard
                  | Identificar procesos y sitios de generación de residuos peligrosos. 
                li
                  i.fas.fa-biohazard
                  | Identificar las materias primas y productos que tienen relación o inciden en la generación de residuos peligros.
                li
                  i.fas.fa-biohazard
                  | Revisar las áreas de soporte.
                li
                  i.fas.fa-biohazard
                  | Relacionar la generación de residuos con la producción de bienes y/o servicios. 
                li
                  i.fas.fa-biohazard
                  | Cuantificar los residuos generados y los productos, bienes y/o servicio.
        .col-lg-3
          img(src="@/assets/curso/temas/tema1/img09.png")

      p.mb-3
        A continuación se presentan ejemplos sobre la manera de realizar el análisis de las fuentes generadoras de RESPEL:

      h5.text-red.mb-5 Ejemplo 1. 

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span
            | Proceso productivo empresa del sector alimentario
        img(src="@/assets/curso/temas/tema1/img10.svg", alt="en la figura se presenta un diagrama del proceso productivo de una empresa de alimentos, donde por medio de varios iconos se enuncian diferentes características de cada etapa. Dentro de esas características se encuentra:  -Produce ruido. -Produce olores -Produce residuos. -Emite gases -Produce vapor. -Se utiliza agua -Se utiliza energía.")
        figcaption #[b Fuente:] Instituto Tecnológico agroalimentario, s.f.
      .py-3
      p.mb-5 Al diagramar el proceso productivo es posible Identificar etapas de generación de residuos peligrosos, se debe garantizar que se contemplan todas las actividades de la organización.
      h5.text-red.mb-5 Ejemplo 2. 
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.  
            span
              | Identificación de materias primas y productos. Cervecería
          img(src="@/assets/curso/temas/tema1/img11.svg", alt="Texto alternativo: El diagrama de flujo describe el proceso de elaboración y empacado de cerveza, señalando con rectángulos azules las etapas que tienen que ver con las materias primas y en un rectángulo verde el producto terminado.")
          figcaption Fuente: Tomado de Quintero, (2009).

      .py-3
      p.mb-5 Al diagramar el proceso productivo es posible identificar las materias primas y productos que tienen relación o inciden en la generación de residuos peligros.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.  
            span
              |  Actividades  y residuos generados. Mecánica automotriz
          .tabla-a.color-acento-contenido.mb-5
            table
              caption Fuente: Tomado de Gonzáles y Gómez,  (2010)
              thead
                tr.text-center
                  th Actividades de mantenimiento
                  th Residuos generados
              tbody.text-center
                tr.gris
                  td Cambio de aceites y filtros.	
                  td Aceite quemado, filtros usados, trapos y estopas
                tr
                  td Lubricación
                  td Lubricantes usados, trapos y estopas
                tr.gris
                  td Cambio de frenos
                  td Pastas, bandas, trapos y estopas
                tr
                  td Sincronización
                  td No hay generación de RESPEL

                tr.gris
                  td Suspensión y dirección
                  td Trapos y estopas, grasa

                tr
                  td Cambio de llantas
                  td Llantas usadas, trapos y estopas

      p.mb-5 Al tomar cada actividad realizada por separado, se pueden analizar más eficazmente los residuos generados en cada una de ellas.
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 6. 
            span
              |  Plano físico de la empresa. Sector salud
          img(src="@/assets/curso/temas/tema1/img12.svg", alt="En el plano se organizan los diferentes lugares del hospital y se señalan con rojos aquellos donde se generan residuos según la actividad que se realice.")
          figcaption Fuente: Tomado de CCB - SDA (2006)
      .py-3
      m.b-3 Al realizar un plano de la organización se pueden identificar los puntos donde se generan los residuos peligrosos.

      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.4 Clasificación e identificación de características de peligrosidad

</template>
