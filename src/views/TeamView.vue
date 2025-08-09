<template>
  <ds-container>
    <div class="d-flex justify-space-around align-center">
      <h1>Nosso time</h1>
      <v-img src="TEAM.png" min-width="300" max-width="300"></v-img>
    </div>

    <p class="md">
      Na <b> Bespoke Bridge</b>, acreditamos que a excelência no ensino começa com um time altamente
      qualificado e comprometido com o sucesso dos nossos alunos.
    </p>

    <div class="d-flex align-center justify-space-around flex-wrap" style="width: 100%">
      <TopicCard class="mt-8" img="Cambridge-Trinity.png" title="" :max-width="500" :img-min-width="400">
        <p class="mt-8" style="text-align: justify">
          Todos os nossos professores possuem qualificações reconhecidas internacionalmente, como o
          prestigiado CELTA da Universidade de Cambridge e Trinity TESOL da Trinity College London.
          Essas certificações refletem a dedicação e o alto padrão de nossos profissionais,
          garantindo uma base sólida para o ensino de inglês como língua estrangeira.
        </p>
      </TopicCard>
      <TopicCard img="learners.png" title="" :max-width="500" :img-min-width="200">
        <p style="text-align: justify">
          Além disso, nossos professores estão em constante aperfeiçoamento. Participam de
          treinamentos mensais conduzidos por especialistas renomados no ensino de idiomas,
          mantendo-se atualizados com as mais recentes metodologias e ferramentas educacionais. Isso
          não apenas eleva o nível das nossas aulas, mas também torna nossos profissionais únicos no
          mercado.
        </p>
      </TopicCard>
    </div>
    <p class="mb-6  mt-6 sm">
      Combinando experiência, formação de excelência e inovação, nosso time está pronto para ajudar
      você a alcançar seus objetivos com confiança e sucesso.
    </p>
  </ds-container>
  <ds-quote phase="O professor é a ponte entre o conhecimento e o aluno." />

  <ds-container>
    <h1>Conheça nosso time</h1>
    <memberDescription img="./Luis.png" name="Luís Patrocínio" description="Fundador, Professor e Diretor de Ensino"
      email="luispatrocinio@bespokebridge.com" linkedin="https://linkedin.com/in/fabianadgomes"
      facebook="https://www.facebook.com/teacherluispatrocinio"
      instagram="https://www.instagram.com/teacherluispatrocinio/"
      tiktok="https://www.tiktok.com/@teacherluispatrocinio">
      <p>
        Com ampla experiência em ensino de inglês e gestão educacional tanto no Brasil, quanto na
        Europa, Luís Patrocínio é o fundador da Bespoke Bridge, uma escola dedicada a oferecer aulas
        de inglês personalizadas para brasileiros e intercâmbios estudantis culturais. Residente na
        Europa, ele combina sua expertise como professor de idiomas e Diretor de Estudos (DoS) com
        sua paixão por conectar culturas e abrir portas para novas oportunidades.
      </p>
      <p>
        Luís acredita que o aprendizado de inglês é uma ponte essencial para o crescimento pessoal e
        profissional, e sua abordagem combina ensino inovador, comunicação eficaz e uma visão
        centrada no aluno. Além disso, ele está continuamente se especializando para aprimorar os
        serviços oferecidos para garantir que a Bespoke Bridge ofereça serviços de qualidade à seus
        clientes.
      </p>
      <p>
        Formado em Teatro pela Escola de Atores Wolf Maya, certificado por Cambridge como professor
        de inglês (CELTA), atualmente Luís cursa Gestão de Recursos Humanos pela Universidade
        Presbiteriana Mackenzie, onde está adquirindo mais conhecimento para prover um serviço
        exclusivamente especial para seus clientes.
      </p>
      <p>
        Nos momentos livres, Luís gosta de passar o tempo com a família, assistir filmes e explorar
        novos lugares. Sua dedicação em construir conexões pacíficas e impactar positivamente a vida
        de seus alunos é o que inspira a missão da Bespoke Bridge.
      </p>
    </memberDescription>

    <hr class="line-pont mb-8 mt-8" style="width: 70%; align-self: center;" />

    <memberDescription img="./Fabi.png" name="Fabiana Gomes" description="Digital Marketing"
      email="fabianagomes@bespokebridge.com" linkedin="https://linkedin.com/in/fabianadgomes">

      <p>
        Uma sonhadora apaixonada pelas artes da comunicação, Fabiana tem uma trajetória que combina
        experiências culturais e profissionais diversas. Natural de São Paulo, ela iniciou sua
        jornada explorando o mundo ao sair de casa para cursar Relações Públicas na Universidade
        Estadual de Londrina. Após se formar, retornou a São Paulo e acumulou experiências em
        diversos setores, do editorial ao educacional, trabalhando com comunicação interna e
        externa, marketing, assessoria de imprensa e sempre ajudando empresas a alcançarem seu
        potencial máximo em comunicação.
      </p>
      <p>
        Em 2016, realizou o sonho de fazer um intercâmbio, mudando-se para Dublin, na Irlanda. Lá,
        conheceu Luís, então amigo e hoje parceiro de negócios. Após o intercâmbio, Fabiana seguiu
        para Portugal, onde concluiu uma pós-graduação em Comunicação e Marketing Digital,
        consolidando ainda mais sua paixão e expertise na área.
      </p>
      <p>
        Atualmente, Fabiana e Luís trabalham juntos na Bespoke Bridge, oferecendo um ensino de
        idiomas que vai além da sala de aula. A proposta combina vivências no exterior, qualidade de
        ensino e a ideia de que aprender um novo idioma exige mais coragem e autenticidade do que
        perfeição. Para eles, errar é parte do processo, e a exposição a novas experiências — tanto
        no próprio país quanto no exterior — é uma ferramenta poderosa no desenvolvimento
        linguístico.
      </p>
      <p>
        Fora do trabalho, Fabiana é movida por suas paixões: uma boa roda de samba, caminhadas à
        beira-mar, tardes lendo em parques, filmes alternativos e explorar as cidades como uma
        turista, sempre em busca de novas histórias para contar.
      </p>

    </memberDescription>
  </ds-container>

  <ds-container class="bg-ublue">
    <h1>Teachers Parceiros</h1>
    <memberDescription img="./Teacher Sara.png" name="Sara Santos" description="Teacher parceira"
      email="teachersarasantos@bespokebridge.com" :reverse="true">
      <p>
        Sara é professora de inglês com sólida formação acadêmica e ampla experiência no ensino do idioma. Natural de
        Porto Alegre (RS), atualmente leciona aulas presenciais e online, atendendo principalmente alunos adultos que
        precisam do inglês para o trabalho, viagens ou estudos.
      </p>
      <p>
        Ela integra com orgulho a equipe da Bespoke Bridge desde o início deste ano, oferecendo aulas personalizadas e
        adaptadas às necessidades específicas de cada aluno.
      </p>
      <p>
        É graduada em Letras e pós-graduada em Tradução pela <b>University of South Africa (UNISA)</b>. Durante os sete anos em
        que viveu na África do Sul, também estudou Relações Públicas e atuou profissionalmente tanto no setor privado
        quanto em um órgão governamental – vivências que enriqueceram sua bagagem cultural e profissional.
      </p>
      <p>
        Antes de se juntar à Bespoke Bridge, Sara lecionou em escolas de idiomas e em empresas internacionais, incluindo
        uma empresa britânica instalada em um parque tecnológico de uma universidade particular.
      </p>
      <p>
        Sara acredita que o ensino é uma via de mão dupla: enquanto ensina, também aprende. Sua trajetória reforça sua
        capacidade de adaptação e seu entusiasmo crescente por ajudar pessoas a se comunicarem com mais confiança e
        fluência em inglês.
      </p>
      <p><i>
          "Será um prazer acompanhar a sua jornada com o idioma!"

        </i></p>
    </memberDescription>
  </ds-container>

  <ds-container class="bg-ublue">

    <p class="md" style="text-align: center;">
      Para os cursos oferecidos por nossa escola parceira, a The Bridge, o time de professores é
      internacional.
    </p>
    <a href="https://thebridge.sk/en/our-teachers/"><v-img class="ma-6 hover" src="all_team.png"></v-img></a>
    <p class="sm" style="text-align: center;">Para conhecer os professores da The Bridge, clique na imagem acima.</p>

  </ds-container>
</template>

<script setup lang="ts">
import TopicCard from '@/components/Generic/TopicCard.vue'
import memberDescription from '@/components/team/memberDescription.vue'
</script>
