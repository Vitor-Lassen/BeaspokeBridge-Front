<template>
  <div class="pt-6 d-flex align-center center justify-space-around max-content-width">
    <h1>Nosso time</h1>
    <v-img src="TEAM.png" max-width="300"></v-img>
  </div>
  <div class="d-flex flex-column align-center pa-4 center max-content-width">

    <p class="md"> Na <b> Bespoke Bridge</b>, acreditamos que a excelência no ensino começa com um time altamente qualificado e comprometido com o sucesso dos nossos alunos.</p>

<div class="pt-6 d-flex align-center justify-space-around flex-wrap" style="width: 100%;">
  <TopicCard
      img="learners.png"
      title=""
      :max-width="500"
          :img-min-width="200"
      >
      <p style="text-align: justify;">Além disso, nossos professores estão em constante aperfeiçoamento. Participam de treinamentos mensais conduzidos por especialistas renomados no ensino de idiomas, mantendo-se atualizados com as mais recentes metodologias e ferramentas educacionais. Isso não apenas eleva o nível das nossas aulas, mas também torna nossos profissionais únicos no mercado.</p>
    </TopicCard>
    <TopicCard
      img="learners.png"
      title=""
      :max-width="500"
      :img-min-width="200"
      >
      <p style="text-align: justify;">Além disso, nossos professores estão em constante aperfeiçoamento. Participam de treinamentos mensais conduzidos por especialistas renomados no ensino de idiomas, mantendo-se atualizados com as mais recentes metodologias e ferramentas educacionais. Isso não apenas eleva o nível das nossas aulas, mas também torna nossos profissionais únicos no mercado.</p>
    </TopicCard>
  </div>
  <p class="ma-6 sm">Combinando experiência, formação de excelência e inovação, nosso time está pronto para ajudar você a alcançar seus objetivos com confiança e sucesso.</p>
  </div>
  <div class="bg-dark">
    <div class="center" style="max-width: 500px">
      <p style="text-align: center">
        <b
          ><i
            >"O professor é a ponte entre o conhecimento e o aluno."</i
          ></b
        >
      </p>
    </div>
  </div>
  <div class="pt-6 d-flex align-center flex-column justify-space-around">
    <h1>Conheça nosso time</h1>
    <memberDescription
    img="./Luis.png"
    name="Luís Patrocínio"
    description="Fundador, Professor e Diretor de Ensino"
    email="luispatrocinio@bespokebridge.com"
    linkedin="https://linkedin.com/in/fabianadgomes">
      <p>Com ampla experiência em ensino de inglês e gestão educacional tanto no Brasil, quanto na Europa, Luís Patrocínio é o fundador da Bespoke Bridge, uma escola dedicada a oferecer aulas de inglês personalizadas para brasileiros e intercâmbios estudantis culturais. Residente na Europa, ele combina sua expertise como professor de idiomas e Diretor de Estudos (DoS) com sua paixão por conectar culturas e abrir portas para novas oportunidades.</p>
      <p>Luís acredita que o aprendizado de inglês é uma ponte essencial para o crescimento pessoal e profissional, e sua abordagem combina ensino inovador, comunicação eficaz e uma visão centrada no aluno. Além disso, ele está continuamente se especializando para aprimorar os serviços oferecidos para garantir que a Bespoke Bridge ofereça serviços de qualidade à seus clientes.</p>
      <p>Formado em Teatro pela Escola de Atores Wolf Maya, certificado por Cambridge como professor de inglês (CELTA), atualmente Luís cursa Gestão de Recursos Humanos pela Universidade Presbiteriana Mackenzie, onde está adquirindo mais conhecimento para prover um serviço exclusivamente especial para seus clientes.</p>
      <p>Nos momentos livres, Luís gosta de passar o tempo com a família, assistir filmes e explorar novos lugares. Sua dedicação em construir conexões pacíficas e impactar positivamente a vida de seus alunos é o que inspira a missão da Bespoke Bridge.</p>
    </memberDescription>



    <memberDescription
    img="./Fabi.png"
    name="Fabiana Gomes"
    description="Digital Marketing"
    email="fabianagomes@bespokebridge.com"
    linkedin="https://linkedin.com/in/fabianadgomes">
      <p>Uma sonhadora apaixonada pelas artes da comunicação, Fabiana tem uma trajetória que combina experiências culturais e profissionais diversas. Natural de São Paulo, ela iniciou sua jornada explorando o mundo ao sair de casa para cursar Relações Públicas na Universidade Estadual de Londrina. Após se formar, retornou a São Paulo e acumulou experiências em diversos setores, do editorial ao educacional, trabalhando com comunicação interna e externa, marketing, assessoria de imprensa e sempre ajudando empresas a alcançarem seu potencial máximo em comunicação.</p>
      <p>Em 2016, realizou o sonho de fazer um intercâmbio, mudando-se para Dublin, na Irlanda. Lá, conheceu Luís, então amigo e hoje parceiro de negócios. Após o intercâmbio, Fabiana seguiu para Portugal, onde concluiu uma pós-graduação em Comunicação e Marketing Digital, consolidando ainda mais sua paixão e expertise na área.</p>
      <p>Atualmente, Fabiana e Luís trabalham juntos na Bespoke Bridge, oferecendo um ensino de idiomas que vai além da sala de aula. A proposta combina vivências no exterior, qualidade de ensino e a ideia de que aprender um novo idioma exige mais coragem e autenticidade do que perfeição. Para eles, errar é parte do processo, e a exposição a novas experiências — tanto no próprio país quanto no exterior — é uma ferramenta poderosa no desenvolvimento linguístico.</p>
      <p>Fora do trabalho, Fabiana é movida por suas paixões: uma boa roda de samba, caminhadas à beira-mar, tardes lendo em parques, filmes alternativos e explorar as cidades como uma turista, sempre em busca de novas histórias para contar.</p>
    </memberDescription>


  </div>
</template>

<script setup lang="ts">

import TopicCard from '@/components/Generic/TopicCard.vue';
import memberDescription from '@/components/team/memberDescription.vue';
</script>

