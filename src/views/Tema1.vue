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
       
</template>
