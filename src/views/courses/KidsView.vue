<template>
  <ds-container class="fit-screen" >

    <div class="d-flex align-center justify-center flex-wrap ">
      <v-img src="Logos BB/BB Kids.png" :min-width="300" :max-width="450"></v-img>
      <h1>Muito além do inglês</h1>
    </div>
    <p>
      <v-img class="float-img" src="kids.png" min-width="250"></v-img>Na <b class="tc-b">BB</b> <b
        class="tc-r">Kids</b>, acreditamos que
      aprender inglês pode ser uma experiência divertida, enriquecedora e transformadora para
      crianças. Oferecemos cursos de inglês para crianças que utilizam a metodologia CLIL (Content
      and Language Integrated Learning), um método inovador que <b>ensina o idioma de forma integrada a
        conteúdos de Ciências Naturais e Sociais.</b> Isso significa que as crianças não apenas aprendem
      inglês, mas também expandem seu conhecimento sobre o mundo ao estudar tópicos fascinantes
      usando o idioma.

      <br /><br />

      As aulas são ministradas por professores experientes, treinados regularmente para garantir a
      melhor aplicação do método CLIL, proporcionando uma experiência educacional dinâmica e de alta
      qualidade. Utilizamos materiais exclusivos da renomada <b><i>Oxford University Press</i></b>, cuidadosamente
      escolhidos para atender às necessidades e ao nível de cada grupo de alunos.
      <br /><br />
      Com a BB Kids, seu filho não apenas aprenderá inglês, mas desenvolverá habilidades para pensar
      e se expressar de forma confiante, tudo de maneira lúdica e interativa.
    </p>
  </ds-container>
  <ds-quote phase="Uma língua coloca-te no corredor para a vida. Duas línguas abrem todas as portas pelo caminho."
    actor="Frank Smith" />


  <ds-container class="bg-bblue-v">
    <div class="max-content-width d-flex  justify-space-around mobile">
      <kidsCard title="Inglês para Crianças (7-8 anos)" subtitle="Para quem é o curso?"
        description="Este curso é destinado a crianças de 7 e 8 anos que estão nos estágios iniciais do aprendizado de inglês e procuram uma abordagem mais divertida e prática para complementar o ensino escolar. O foco está no desenvolvimento completo das habilidades de leitura, escrita, fala e compreensão auditiva.">
        <kidsCoursesDescription :item="course7to8">
          <template v-slot:sobre>
            <p>No curso online Kids Club, crianças de 7 a 8 anos aprendem inglês de forma natural, sem decoreba de
              gramática e vocabulário. Acreditamos que aprender brincando é muito mais eficaz, especialmente quando as
              crianças se divertem no processo. Quando unimos isso à curiosidade natural dos pequenos, garantimos que as
              habilidades no idioma serão adquiridas de maneira leve e prazerosa. Utilizamos a renomada metodologia
              <b>CLIL (Content and Language Integrated Learning)</b>, que ensina inglês por meio de tópicos
              interessantes de áreas como natureza, tecnologia e ciência. Dessa forma, as crianças adquirem um
              vocabulário diversificado e desenvolvem confiança para se comunicar sobre diferentes assuntos, sem medo de
              cometer erros.</p>
            <p>As aulas são focadas no desenvolvimento de todas as habilidades linguísticas: leitura, escrita, fala e
              compreensão auditiva. A abordagem lúdica e repleta de temas envolventes não apenas motiva os alunos, mas
              também estabelece as bases para bons hábitos de estudo, essenciais para seu progresso no aprendizado. Além
              disso, por meio da metodologia Task-based Learning (ensino baseado em projetos e tarefas), as aulas
              incentivam o trabalho em equipe, ajudando a construir uma base sólida para habilidades colaborativas.</p>
            <p>As crianças são divididas em grupos de acordo com suas habilidades e níveis de inglês (iniciante a
              básico). Essa divisão ocorre na primeira aula, garantindo que cada aluno seja colocado em um grupo
              adequado ao seu nível, proporcionando um aprendizado personalizado. Durante o curso, utilizamos os
              materiais didáticos CLIL World Natural & Social Sciences 2 ou CLIL World Natural & Social Sciences 3,
              selecionados cuidadosamente pelos nossos professores para atender às necessidades de cada grupo.</p>
          </template>
        </kidsCoursesDescription>
      </kidsCard>
      <kidsCard class="kid2" title="Inglês para Crianças (9-10 anos)" subtitle="Para quem é o curso?"
        description="Este curso é voltado para crianças de 9 a 10 anos que já têm uma noção básica de inglês adquirida na escola, mas gostariam de dedicar mais tempo ao aprendizado do idioma e explorar novas abordagens além das que conhecem da sala de aula. O curso foca no desenvolvimento equilibrado de todas as habilidades linguísticas.">
        <kidsCoursesDescription :item="course9to10">
          <template v-slot:sobre>
            <p>No curso online Kids Club para crianças de 9-10 anos, elas não aprendem inglês apenas decorando gramática
              e vocabulário. Acreditamos que aprender por meio de brincadeiras é muito mais eficaz, especialmente quando
              as crianças se divertem no processo. Se adicionarmos a curiosidade natural das crianças ao jogo,
              garantimos que elas adquirirão as habilidades linguísticas de forma fácil e divertida. Por isso,
              utilizamos o método comprovado <b>CLIL (Content and Language Integrated Learning)</b> no curso, no qual as
              crianças aprendem uma língua estrangeira por meio de temas interessantes de diversas áreas – natureza,
              tecnologia, ciência, e aprendem sobre os temas em inglês. Dessa forma, além de aprimorarem seu inglês,
              elas adquirem um vocabulário variado e a capacidade de se comunicar sobre uma ampla gama de tópicos, sem
              medo de cometer erros. As aulas são focadas no desenvolvimento de todas as habilidades linguísticas –
              leitura, escrita, fala e compreensão auditiva.</p>
            <p>Aulas divertidas e interessantes, carregadas de tópicos atraentes, irão motivar as crianças e estabelecer
              as bases para bons hábitos de estudo que elas utilizarão em sua educação futura. Elas passarão a gostar de
              inglês, o que é a condição mais importante para continuar aprimorando o idioma. Além disso, nas aulas,
              graças ao método de ensino Task-based Learning, também estabelecemos uma boa base para a habilidade das
              crianças de trabalhar em equipe.</p>
            <p>As crianças são divididas em grupos de acordo com suas habilidades linguísticas e nível
              (Iniciante-Básico-Pré-Intermediário). Faremos a divisão dos grupos na primeira aula, para garantir que o
              nível do curso se ajuste perfeitamente a cada aluno. Neste curso, utilizamos os livros didáticos CLIL
              World Natural & Social Sciences 2 ou CLIL World Natural & Social Sciences 3, selecionados especificamente
              para as necessidades do nível do grupo, por nossos professores.</p>
          </template>
        </kidsCoursesDescription>
      </kidsCard>
    </div>
    <div class="max-content-width d-flex justify-space-around mobile">
      <kidsCard class="kid3"
        title="Inglês para Crianças (11-12 anos)" subtitle="Para quem é o curso?"
        description="Este curso é destinado a alunos de 11 e 12 anos que não estão satisfeitos com o inglês aprendido na escola e gostariam de aprimorar suas habilidades de uma maneira diferente. A proposta é desenvolver todas as competências linguísticas e adquirir habilidades adicionais que os ajudarão ao longo dos anos de escolaridade.">
        <kidsCoursesDescription :item="course11to12">
          <template v-slot:sobre>
            <p>Em nosso curso online, jovens de 11 a 12 anos não aprendem inglês apenas memorizando gramática e vocabulário. Acreditamos que o aprendizado por meio da cognição é muito mais eficaz. Ao aprender sobre e discutir conteúdos inspiradores, os jovens desenvolvem habilidades linguísticas com facilidade e prazer. Por isso, utilizamos o método comprovado <b>CLIL (Content and Language Integrated Learning)</b> no curso, no qual os alunos aprendem uma língua estrangeira através de temas interessantes de diversas áreas – natureza, tecnologia, ciência. Assim, eles adquiriram um vocabulário variado e a capacidade de se comunicar sobre uma ampla gama de tópicos, sem medo de cometer erros. As aulas são dedicadas a melhorar todas as habilidades linguísticas – leitura, escrita, fala e compreensão auditiva.</p>
            <p>Aulas inspiradoras e interessantes, repletas de tópicos, irão motivar os alunos e criar as bases de bons hábitos de estudo, que eles utilizarão na sua educação futura. Eles desenvolverão habilidades como argumentação, discussão e pensamento crítico. Além disso, aprenderão a gostar de inglês, o que é o pré-requisito mais importante para que continuem a melhorar seu inglês. E, nas aulas, graças ao método de ensino baseado em projetos <b>Task-based Learning</b>, também estabelecemos uma boa base para a habilidade dos alunos de trabalhar em equipe.</p>
            <p>Os alunos são divididos em grupos dependendo das suas habilidades linguísticas e nível (Básico-Pre-intermediário-Intermediário). A divisão será feita na primeira aula, onde cada aluno será colocado em um grupo para garantir que o nível do curso seja adequado ao seu desenvolvimento. Neste curso, utilizamos os livros didáticos CLIL World Natural & Social Sciences 3, CLIL World Natural & Social Sciences 4 ou CLIL World Natural & Social Sciences 5, selecionados especificamente com base nas necessidades do nível do grupo pelos nossos professores.</p>
          </template>
        </kidsCoursesDescription>
      </kidsCard>
      <kidsCard title="Inglês para Crianças (13-14 anos)" subtitle="Para quem é o curso?"
        description="Este curso é voltado para jovens que, ao final do ensino fundamental, não estão satisfeitos com o inglês aprendido na escola e desejam dedicar mais tempo ao idioma. O foco é desenvolver todas as habilidades linguísticas de forma equilibrada, além de proporcionar o aprendizado de novos conhecimentos sobre si mesmos e o mundo ao seu redor." >
        <kidsCoursesDescription :item="course13to14">
          <template v-slot:sobre>
            <p>No curso online para adolescentes de 13 a 14 anos, o aprendizado do inglês vai além da memorização de gramática e vocabulário. Acreditamos que aprender por meio da cognição é muito mais eficaz. Explorando e discutindo conteúdos inspiradores, os jovens adquirem habilidades linguísticas de forma leve e prazerosa.</p>
            <p>Por isso, utilizamos o comprovado método <b>CLIL (Content and Language Integrated Learning)</b>, no qual os alunos aprendem inglês por meio de tópicos interessantes de diversas áreas – como natureza, tecnologia e ciência. Dessa forma, desenvolvem um vocabulário diversificado e a habilidade de se comunicar sobre uma ampla gama de assuntos, sem medo de errar. As aulas são focadas em aprimorar todas as competências linguísticas: leitura, escrita, conversação e compreensão auditiva.</p>
            <p>OAs aulas, repletas de tópicos envolventes, motivam os alunos e estabelecem as bases para um trabalho eficiente com informações, algo que será valioso nos estudos e na vida profissional. Eles consolidarão habilidades como argumentação, discussão e pensamento crítico. O curso também os ajudará a construir sua identidade no inglês, proporcionando mais oportunidades acadêmicas e profissionais no futuro. Além disso, por meio da metodologia de ensino baseada em projetos do Task-based Learning, os alunos desenvolverão sua capacidade de trabalhar em equipe.</p>
            <p>Os alunos são divididos em grupos de acordo com suas habilidades e nível de proficiência (Pré-intermediário, Intermediário e Intermediário-avançado). Essa divisão será feita na primeira aula, garantindo que cada estudante participe de um curso alinhado às suas necessidades. Utilizamos materiais didáticos da coleção CLIL World Natural & Social Sciences 4 ou CLIL World Natural & Social Sciences 5, selecionados especialmente para atender ao nível de cada grupo, assegurando a melhor experiência de aprendizado.</p>
          </template>
        </kidsCoursesDescription>
      </kidsCard>
    </div>
  </ds-container>




</template>

<script setup lang="ts">
import kidsCard from '@/components/courses/kidsCard.vue';
import kidsCoursesDescription from '@/components/courses/kidsCoursesDescription.vue';
import type { KidsCourseDescription } from '@/Models/KidsCourseDescription';

const course7to8: KidsCourseDescription = {
  title: 'Inglês para Crianças (7-8 anos)',
  description: 'Curso online de inglês para crianças de 7 a 8 anos que estão iniciando o aprendizado da língua na escola. Este curso foi criado para engajar e divertir as crianças, promovendo o desenvolvimento das principais habilidades linguísticas: leitura, fala, escrita e compreensão auditiva, tudo de forma lúdica e interativa na BB Kids.',
  duration: '2 semestres de<br>20 semanas',
  schedule: '2 x por semana<br>1 hora de aula',
  levelImg: 'A1-A2.png',
  gains: [
    'Desenvolvimento de todas as habilidades linguísticas: fala, leitura, escuta e escrita;',
    'Maior rapidez na compreensão e reação em situações reais;',
    'Motivação para aprender inglês e construção de bons hábitos de estudo;',
    'Confiança para se comunicar em inglês, sem medo de errar;',
    'Conhecimento de temas variados e interessantes;',
    'Vocabulário diversificado graças à metodologia CLIL;',
    'Habilidade de trabalhar em equipe, desenvolvida pela metodologia Task-based Learning;',
    'Aulas dinâmicas e lúdicas, adequadas à faixa etária, que as crianças aguardam com entusiasmo;',
    'Alto nível de interação com o professor e colegas da mesma idade;',
    'Avaliação detalhada do professor ao final de cada trimestre.',
  ]
};


const course9to10: KidsCourseDescription = {
  title: 'Inglês para Crianças (9-10 anos)',
  description: 'Um curso online de inglês para crianças de 9 a 10 anos que já têm o básico de inglês aprendido na escola. No nosso <b>Kids Club</b>, elas irão desenvolver todas as habilidades linguísticas de forma divertida – leitura, fala, escrita e compreensão auditiva. No curso, utilizamos o método CLIL comprovado, por meio do qual as crianças aprendem uma língua estrangeira a partir de temas de várias áreas, permitindo que, além de melhorar o inglês, adquiram conhecimentos em Ciências Naturais e Sociais.',
  duration: '2 semestres de<br>20 semanas',
  schedule: '2 x por semana<br>1 hora de aula',
  levelImg: 'A1-A2.png',
  gains: [
    'Melhoria em todas as habilidades linguísticas: fala, leitura, compreensão auditiva e escrita;',
    'Aumento significativo na agilidade de reação e na compreensão de situações do dia a dia;',
    'Motivação para aprender inglês e a construção de bons hábitos de estudo para o futuro;',
    'Perda do medo de se comunicar em inglês, ganhando confiança no uso do idioma;',
    'Novos conhecimentos em uma ampla variedade de tópicos;',
    'Vocabulário enriquecido, graças ao método CLIL (Content and Language Integrated Learning);',
    'Desenvolvimento da capacidade de trabalhar em equipe, através do método Task-based Learning;',
    'Aulas divertidas e adequadas à faixa etária, que seu filho(a) vai ansiar para participar;',
    'Alto nível de interação com o professor e com colegas da mesma idade;',
    'Avaliação contínua e feedback ao final de cada trimestre, para acompanhar o progresso do(a) aluno(a);'
  ]
};


const course11to12: KidsCourseDescription = {
  title: 'Inglês para Crianças (11-12 anos)',
  description: 'Um curso online de inglês para jovens de 11 a 12 anos que não estão satisfeitos com o ensino de inglês da escola. No nosso curso, eles irão desenvolver todas as habilidades linguísticas – leitura, fala, escrita e compreensão auditiva. Utilizamos o método comprovado CLIL (Content and Language Integrated Learning), através do qual os alunos aprendem uma língua estrangeira por meio de temas de diversas áreas. Assim, além de melhorar o inglês, eles também expandem seus conhecimentos. Durante o curso, os alunos serão estimulados ao trabalho em equipe e ao pensamento crítico.',
  duration: '2 semestres de<br>20 semanas',
  schedule: '2 x por semana<br>1 hora de aula',
  levelImg: 'B1-B2.png',
  gains: [
    'Desenvolvimento de todas as habilidades linguísticas: fala, leitura, audição e escrita;',
    'Melhora significativa na rapidez de resposta e compreensão de situações reais;',
    'Motivação para aprender inglês e criação de bons hábitos de estudo para o futuro;',
    'Introdução às bases de argumentação, discussão e pensamento crítico;',
    'Confiança para se comunicar em inglês, sem medo de cometer erros;',
    'Novos conhecimentos sobre uma ampla variedade de tópicos;',
    'Vocabulário variado graças ao método CLIL (Content and Language Integrated Learning);',
    'Capacidade de trabalhar em equipe com o método de ensino baseado em projetos Task-based Learning;',
    'Processo de ensino estruturado com abordagem individualizada;',
    'Alto nível de interação com o professor e colegas da mesma faixa etária;',
    'Avaliação personalizada feita pelo professor ao final de cada trimestre.'
  ]
};

const course13to14: KidsCourseDescription = {
  title: 'Inglês para Crianças (13-14 anos)',
  description: 'Um curso online de inglês para adolescentes de 13 a 14 anos que não estão satisfeitos com o inglês ensinado na escola. Em nosso curso, eles desenvolverão todas as habilidades linguísticas – leitura, conversação, escrita e compreensão auditiva. Utilizamos o comprovado método CLIL (Content and Language Integrated Learning), no qual os alunos aprendem inglês por meio de tópicos de diversas áreas, como natureza, tecnologia e ciência. Assim, além de melhorar o inglês, eles também ampliam seus conhecimentos gerais. Durante o curso, os alunos praticarão habilidades de trabalho em equipe e pensamento crítico, preparando-se para desafios futuros de forma integrada e motivadora.',
  duration: '2 semestres de<br>20 semanas',
  schedule: '2 x por semana<br>1 hora de aula',
  levelImg: 'B2-C1.png',
  gains: [
    'Aperfeiçoamento de todas as habilidades linguísticas: fala, leitura, compreensão auditiva e escrita;',
    'Motivação para desenvolver o inglês e criação de bons hábitos para o aprendizado contínuo;',
    'Confiança para se comunicar em inglês sem medo de errar;',
    'Conhecimento em uma ampla variedade de tópicos interessantes;',
    'Habilidade de analisar e avaliar informações de forma crítica e analítica;',
    'Vocabulário diversificado graças ao método CLIL (Aprendizagem Integrada de Conteúdo e Língua);',
    'Capacidade de trabalhar em equipe com a metodologia Task-based Learning;',
    'Processo de ensino estruturado e com abordagem individualizada;',
    'Alta interação com o professor e colegas da mesma faixa etária;',
    'Avaliação personalizada realizada pelo professor ao final de cada trimestre.'
  ]
};

</script>

<style scoped>
.float-img {
  float: right;
}

@media screen and (min-width: 800px) {
  .kid2{
    margin-top: 180px;
  }
  .kid3{
    margin-top: -180px;
  }
}
</style>
