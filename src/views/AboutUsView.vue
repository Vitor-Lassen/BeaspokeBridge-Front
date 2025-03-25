<template>
  <div class="pa-12 ml-12 mr-12 d-flex flex-column align-center">
    <h1>Construímos Conexões</h1>
    <p>
      Na Bespoke Bridge, acreditamos que o aprendizado vai além das palavras. <b>Nossa missão</b> é
      construir <i>pontes (bridges)</i> entre culturas, idiomas e oportunidades, capacitando pessoas
      a alcançarem seus sonhos com confiança e fluência no inglês.
    </p>
    <hr class="line-pont center" style="width: 200px;" />

    <h2>Acreditamos no poder da personalização</h2>
    <div class="d-flex flex-row-reverse align-center img-flex">
      <img class="ma-6 flex-0-1 img" :src="'./online lessons.png'" />

      <p class="">
        A palavra bespoke significa “feito sob medida”, e é essa a essência dos nossos serviços.
        <br /><br />
        Oferecemos cursos de inglês online criados exclusivamente para atender às suas necessidades
        e objetivos específicos. Diferentemente da maioria das escolas, nossas aulas são 100% ao
        vivo, e vão muito além de materiais pré-estabelecidos. Reconhecemos que cada aluno é único
        e, por isso, personalizamos nossas aulas para se ajustarem ao seu estilo de aprendizado,
        ritmo e metas individuais.<br />
        Nossos profissionais possuem qualificações internacionais, como CELTA ou Trinity TESOL, e
        estão em constante aperfeiçoamento com especialistas renomados no ensino de inglês como
        língua estrangeira.
        <br /><br />
        Inspirados pela excelência da escola parceira The Bridge, na Eslováquia, trazemos ao público
        brasileiro um serviço de ensino de alta qualidade. Nosso objetivo é construir pontes entre
        culturas e ajudar nossos alunos a atingirem seu máximo potencial.
        <br /><br />
        Além de aulas de inglês, oferecemos programas de intercâmbio estudantil em centros de
        excelência que são credenciados pela Eaquals, uma organização que certifica e assegura a
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
            Bespoke — feito sob medida — é mais do que um método; é o nosso lema.
          </p>
        </TopicCard>

        <TopicCard title="Nossa visão" img="./vision.png" :max-width="500">
          <p>
            Ser referência em personalização no ensino de inglês, proporcionando experiências únicas
            e transformadoras que atendem às necessidades individuais de cada cliente.
          </p>
        </TopicCard>
      </div>
      <TopicCard title="Nossos valores" img="./values.png" :max-width="2000">
        <p>
          Ser referência em personalização no ensino de inglês, proporcionando experiências únicas e
          transformadoras que atendem às necessidades individuais de cada cliente.
        </p>
      </TopicCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopicCard from '@/components/Generic/TopicCard.vue'
</script>
<style scoped>
p {
  text-align: justify;
}
.img {
  height: 600px;
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
