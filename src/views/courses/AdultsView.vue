<template>
  <AdultsOptions
    title="Curso de Inglês Geral"
    subtitle="General English"
    firstText="O curso de Inglês Geral é projetado para ensinar a língua inglesa de maneira abrangente, abordando todos os aspectos essenciais para o desenvolvimento das habilidades dos alunos. Este tipo de curso inclui:"
    secondText="Como nossos cursos são feitos sob medida, o aluno escolhe qual foco quer dar na aula, e o professor planeja a aula de acordo com as necessidades e escolhas do aluno. Gramática pode ser ensinada implicitamente ou explicitamente."
    :itemList="generalEnglish"
    image="./book.png"
    btnName="Estou interessado neste curso"
    pathTo="/contact-us?course=adults-general-english"
  />

  <AdultsOptions
    title="Curso de Inglês para Negócios"
    subtitle="Business English"
    firstText="O curso de Inglês para Negócios é projetado para desenvolver as habilidades linguísticas necessárias para o ambiente corporativo, capacitando os alunos a se comunicarem de maneira eficaz em contextos empresariais. Este curso inclui:"
    secondText="Este curso é focado em um contexto geral e abrange várias áreas do mundo corporativo. Na Bespoke Bridge, o aluno escolhe se quer focar em todas as habilidades, ou em alguma em específico."
    :itemList="businessEnglish"
    image="./briefcase.png"
    btnName="Estou interessado neste curso"
    pathTo="/contact-us?course=adults-business-english"
    reverse
    color
  />

  <AdultsOptions
    title="Preparatórios para Exames"
    subtitle="IELTS & Cambridge"
    firstText="O curso de Inglês para Exames de Proficiência é projetado para preparar os alunos para os principais testes de proficiência na língua inglesa, como o IELTS e os exames de Cambridge. Este curso inclui:"
    secondText="O curso utiliza uma combinação de materiais autênticos, simulados de exames, exercícios práticos e feedback detalhado para garantir que os alunos estejam bem preparados para alcançar altas pontuações nos testes de proficiência."
    :itemList="examPreparation"
    image="./Prep centre logo_RGB.png"
    btnName="Estou interessado neste curso"
    pathTo="/contact-us?course=adults-general-english"
  />

  <AdultsOptions
    title="Curso de Inglês para Propósitos Específicos"
    subtitle="English for Specific Purposes"
    firstText="O curso de Inglês para Propósitos Específicos (ESP) é voltado para o desenvolvimento de habilidades linguísticas específicas que atendam às necessidades de determinadas áreas profissionais ou acadêmicas. Este curso inclui:"
    secondText="O curso de ESP utiliza uma abordagem focada e prática, garantindo que os alunos desenvolvam as habilidades necessárias para se destacarem em seus campos de atuação específicos. Este tipo de curso, depende também da formação e conhecimento técnico do professor. Nada impede que o professor aprenda os termos a serem ensinados, mas depende muito da área e expertise de nossos professores. Caso não possamos atender suas necessidades, nos prontificamos a fazer uma pesquisa e indicar empresas que possam te ajudar a conquistar seus objetivos."
    :itemList="specialized"
    btnName="Estou interessado neste curso"
    pathTo="/contact-us?course=adults-business-english"
    color
  />
  <AdultsOptions
    title="Curso de inglês para viagens"
    subtitle="English for Travel"
    firstText="O curso de Inglês para Viagens é projetado para fornecer aos alunos as habilidades linguísticas necessárias para se comunicarem de maneira eficaz e confiante durante suas viagens internacionais. Este curso inclui:"
    secondText="O curso utiliza uma combinação de recursos multimídia, diálogos interativos, role-plays e exercícios práticos para garantir que os alunos estejam bem preparados para qualquer situação que possam encontrar durante suas viagens."
    :itemList="forTrip"
    image="./aviao.png"
    btnName="Estou interessado neste curso"
    pathTo="/contact-us?course=adults-general-english"
  />
</template>

<script setup lang="ts">
import AdultsOptions from '@/components/courses/AdultsOptions.vue'
import type { KeyValueModel } from '@/Models/keyValueModel'

const generalEnglish: KeyValueModel[] = [
  {
    key: 'Gramática e Vocabulário',
    value: 'Instrução sobre as regras gramaticais do inglês e expansão do vocabulário.',
  },
  {
    key: 'Habilidades de Audição',
    value:
      'Prática de compreensão do inglês falado através de diversos recursos auditivos, como conversas, palestras e mídia.',
  },
  {
    key: 'Habilidades de Fala',
    value: 'Atividades para melhorar a pronúncia, fluência e habilidade de conversação.',
  },
  {
    key: 'Habilidades de Leitura',
    value:
      'Exercícios para aprimorar a compreensão de leitura, velocidade e interpretação de diferentes tipos de textos.',
  },
  {
    key: 'Habilidades de Escrita',
    value:
      'Orientação para escrever de forma clara e eficaz para diversos propósitos, incluindo redações, relatórios e escrita criativa.',
  },
  {
    key: 'Compreensão Cultural',
    value:
      'Exposição aos aspectos culturais dos países de língua inglesa, o que pode incluir costumes, tradições e vida cotidiana.',
  },
]

const businessEnglish: KeyValueModel[] = [
  {
    key: 'Comunicação Empresarial',
    value:
      'Técnicas para apresentações, negociações, e-mails, chamadas telefônicas e reuniões de negócios.',
  },
  {
    key: 'Vocabulário Específico',
    value:
      'Termos e expressões usados no mundo dos negócios, cobrindo áreas como finanças, marketing, recursos humanos e gerenciamento de projetos.',
  },
  {
    key: 'Habilidades de Escrita',
    value: 'Redação de relatórios, propostas, cartas comerciais e outros documentos formais.',
  },
  {
    key: 'Habilidades de Audição',
    value: 'Compreensão de discursos, entrevistas e conferências no contexto empresarial.',
  },
  {
    key: 'Habilidades de Leitura',
    value: 'Análise de relatórios, artigos de negócios e estudos de caso.',
  },
  {
    key: 'Cultura Corporativa',
    value:
      'Entendimento das práticas e etiquetas em diferentes ambientes de negócios internacionais.',
  },
  {
    key: 'Desenvolvimento de Carreira',
    value:
      'Preparação para entrevistas de emprego, elaboração de currículos e cartas de apresentação.',
  },
]

const examPreparation: KeyValueModel[] = [
  {
    key: 'Estrutura dos Exames',
    value: ' Explicação detalhada do formato, seções e tipos de questões de cada exame.',
  },
  {
    key: 'Habilidades de Audição',
    value:
      ' Prática intensiva de compreensão auditiva com áudios semelhantes aos usados nos exames, incluindo diálogos, palestras e entrevistas.',
  },
  {
    key: 'Habilidades de Leitura',
    value:
      ' Técnicas para melhorar a velocidade e compreensão de leitura, análise de textos acadêmicos e jornalísticos, e prática com perguntas de múltipla escolha, verdadeiro/falso e correspondência de informações.',
  },
  {
    key: 'Habilidades de Escrita ',
    value:
      ' Orientação para redigir redações, relatórios e cartas, com foco na estrutura, coerência e coesão textual, além de prática com temas comuns nos exames.',
  },
  {
    key: 'Habilidades de Fala ',
    value:
      ' Desenvolvimento da fluência e precisão na fala, prática com perguntas típicas da entrevista oral dos exames e simulações de exames orais.',
  },
  {
    key: 'Vocabulário Acadêmico ',
    value:
      'Expansão do vocabulário necessário para os exames, com foco em termos acadêmicos e expressões idiomáticas.',
  },
  {
    key: 'Estratégias de Prova',
    value:
      ' Técnicas para gerenciar o tempo, lidar com o nervosismo e otimizar o desempenho em cada seção do exame.',
  },
]

const specialized: KeyValueModel[] = [
  {
    key: 'Conteúdo Personalizado',
    value:
      ' O currículo é adaptado para atender aos objetivos específicos dos alunos, seja em áreas como medicina, engenharia, aviação, direito, turismo, entre outras.',
  },
  {
    key: 'Vocabulário Técnico',
    value:
      ' Ensino de terminologia e expressões usadas no campo específico de estudo ou trabalho do aluno.',
  },
  {
    key: 'Habilidades de Comunicação',
    value:
      ' Desenvolvimento de competências para se comunicar de forma eficaz em contextos profissionais, como apresentações, reuniões, e-mails e negociações.',
  },
  {
    key: 'Leitura e Compreensão',
    value:
      ' Análise de documentos técnicos, artigos acadêmicos, relatórios e outros materiais relevantes à área específica.',
  },
  {
    key: 'Escrita Profissional',
    value:
      ' Orientação para redigir documentos específicos da área, como relatórios técnicos, artigos científicos, pareceres e projetos.',
  },
  {
    key: 'Simulações Práticas',
    value:
      ' Atividades e exercícios que simulam situações reais do ambiente de trabalho ou acadêmico do aluno.',
  },
  {
    key: 'Cultura e Etiqueta Profissional',
    value:
      ' Entendimento das práticas e comportamentos apropriados dentro do contexto profissional específico.',
  },
]

const forTrip: KeyValueModel[] = [
  {
    key: 'Vocabulário Essencial',
    value:
      '  Ensino de palavras e frases úteis para situações comuns de viagem, como aeroportos, hotéis, restaurantes, transporte público e compras.',
  },
  {
    key: 'Interações Cotidianas',
    value:
      '  Prática de diálogos em cenários reais de viagem, como fazer reservas, pedir direções, solicitar informações turísticas e resolver problemas em situações inesperadas.',
  },
  {
    key: 'Cultura e Etiqueta',
    value:
      '  Compreensão das práticas culturais e comportamentos apropriados em diferentes países para garantir uma experiência de viagem mais confortável e respeitosa.',
  },
  {
    key: 'Simulações Práticas',
    value:
      '  Exercícios e atividades que simulam situações reais de viagem, permitindo aos alunos praticarem e ganharem confiança antes de viajarem.',
  },
  {
    key: 'Compreensão Auditiva',
    value:
      '  Desenvolvimento de habilidades de audição para entender anúncios em aeroportos, instruções em hotéis, menus em restaurantes e outras comunicações importantes durante a viagem.',
  },
  {
    key: 'Expressões Úteis',
    value:
      '  Aprendizagem de expressões idiomáticas e frases comuns que facilitam a comunicação com falantes nativos em diferentes contextos de viagem.',
  },
  {
    key: 'Problemas e Soluções',
    value:
      '  Preparação para lidar com imprevistos, como perder documentos, solicitar ajuda médica, ou lidar com serviços de atendimento ao cliente em diferentes idiomas.',
  },
]
</script>

<style scoped></style>
