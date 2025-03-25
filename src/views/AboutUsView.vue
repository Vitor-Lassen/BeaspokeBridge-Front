<template>
  <div class="pa-12 ml-12 mr-12 d-flex flex-column align-center">
    <h1 class="mb-16 mt-10">Construímos Conexões</h1>
    <p>
      Na Bespoke Bridge, acreditamos que o aprendizado vai além das palavras. <b class='text-color-blue-logo'>Nossa missão</b> é
      construir <i><b class='text-color-blue-logo'>pontes </b>(<b class='text-color-secondary'>bridges</b>)</i> entre culturas, idiomas e oportunidades, capacitando pessoas
      a alcançarem seus sonhos com <b class='text-color-blue-logo'>confiança</b> e fluência <b class='text-color-blue-logo'>no inglês</b>.
    </p>
  <v-img  src="./bespoke-line.png" min-width="300" max-width="1200" width="100%"></v-img>

    <hr class="line-pont center ma-6" style="width: 200px;" />

    <h2 class="mt-16">Acreditamos no poder da personalização</h2>
    <div class="d-flex flex-row-reverse align-center img-flex">
      <img class="ma-6 flex-0-1 img" :src="'./online lessons.png'" />

      <p class="">
        A palavra <b class='text-color-blue-logo'>bespoke</b> significa “<b class='text-color-secondary'> <i>feito sob medida</i></b>”, e é essa a essência dos nossos serviços.
        <br /><br />
        Oferecemos <b>cursos de inglês online</b> criados exclusivamente para atender às suas necessidades
        e objetivos específicos. Diferentemente da maioria das escolas, nossas <b>aulas são 100% ao
        vivo</b>, e vão muito além de materiais pré-estabelecidos. Reconhecemos que <b>cada aluno é único</b>
        e, por isso, personalizamos nossas aulas para se ajustarem ao seu estilo de aprendizado,
        ritmo e metas individuais.<br />
        Nossos profissionais possuem qualificações internacionais, como <a href="https://www.cambridgeenglish.org/br/teaching-english/teaching-qualifications/celta/"> CELTA</a> ou <a href="https://www.trinitycollege.com/qualifications/teaching-english/CertTESOL">Trinity TESOL</a>, e
        estão em constante aperfeiçoamento com especialistas renomados no ensino de inglês como
        língua estrangeira.
        <br /><br />
        Inspirados pela excelência da escola parceira <a href="https://thebridge.sk/en/" class='text-color-secondary'>The Bridge</a>, na Eslováquia, trazemos ao público
        brasileiro um <b>serviço de ensino de alta qualidade</b>. Nosso objetivo é construir pontes entre
        culturas e ajudar nossos alunos a atingirem seu máximo potencial.
        <br /><br />
        Além de aulas de inglês, oferecemos programas de intercâmbio estudantil em centros de
        excelência que são credenciados pela <a href="https://www.eaquals.org/"><b>Eaquals</b></a>, uma organização que certifica e assegura a
        qualidade do ensino de línguas.
      </p>
    </div>
  </div>

  <div class="bg-dark">
    <div class="center" style="max-width: 500px">
      <p style="text-align: center">
        <b
          ><i
            >"Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados
            diferentes"</i
          ></b
        >
      </p>
      <p style="text-align: end">Albert Einstein.</p>
    </div>
  </div>
  <div class="bg-blue-v">
    <div class="d-flex flex-column align-center center" style="max-width: 1200px">
      <div class="d-flex img-flex align-center justify-space-between" style="width: 100%">
        <TopicCard title="Nossa Missão" img="./Missao.png" :max-width="500">
          <p>
            Transformar vidas por meio do ensino do inglês com excelência e personalização. O estilo
            <b class='text-color-blue-logo'>Bespoke</b> — <b class='text-color-secondary'>feito sob medida</b> — é mais do que um método; é o nosso lema.
          </p>
        </TopicCard>

        <TopicCard title="Nossa visão" img="./vision.png" :max-width="500">
          <p>
            Ser referência em <b class='text-color-blue-logo'>personalização</b> no ensino de inglês, proporcionando <b class='text-color-secondary'>experiências únicas</b>
            e transformadoras que atendem às necessidades individuais de cada cliente.
          </p>
        </TopicCard>
      </div>
      <TopicCard class="ma-8 pa-4" title="Nossos valores" img="./values.png" :max-width="2000">
          <PImg
          img="excelencia.png"
          p="<b class='text-color-blue-logo'>Excelência</b>: Compromisso inabalável em oferecer serviços de altíssima qualidade, garantindo que cada interação com nossos clientes seja uma experiência positiva e transformadora."/>
          <PImg class="values-ident"
          img="personalizacao.png"
          p="<b class='text-color-secondary'>Personalização</b>: Acreditamos que cada cliente é único. Por isso, adaptamos nossos serviços de maneira a atender suas necessidades e objetivos individuais de forma eficaz e empática."/>
          <PImg
          img="humanizacao.png"
          p="<b class='text-color-blue-logo'>Humanização</b>: Tratamos nossos clientes com respeito e compreensão, reconhecendo suas particularidades e sendo sensíveis aos seus momentos, pois, acima de tudo, colocamos as pessoas em primeiro lugar."/>
          <PImg class="values-ident"
          img="diversidade e inclusao.png"
          p="<b class='text-color-secondary'>Diversidade e Inclusão</b>: Valorizamos as diferenças culturais e acreditamos no impacto enriquecedor que a troca de experiências pode proporcionar, criando ambientes mais amplos e inclusivos."/>
          <PImg
          img="holistico.png"
          p="<b class='text-color-blue-logo'>Visão Holística</b>: Buscamos o desenvolvimento completo de nossos clientes, entendendo que o alcance de seus objetivos depende do equilíbrio entre suas capacidades, necessidades e bem-estar emocional, físico e intelectual."/>

      </TopicCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopicCard from '@/components/Generic/TopicCard.vue'
import PImg from '@/components/Generic/PImg.vue';
</script>
<style scoped lang="scss">
a{
  text-decoration:underline;
  font-style: italic;
}

p {
  text-align: justify;
}
.img {
  height: 600px;
}

@media (min-width: 960px) {
   .values-ident{
     margin-left: 100px;
   }
}

@media (max-width: 960px) {
  .img-flex {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
  .img {
    height: 250px;
  }
}
</style>
