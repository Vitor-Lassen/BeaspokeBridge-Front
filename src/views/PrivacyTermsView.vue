<template>
  <terms
    title="Política de Privacidade"
    :items="items"
    date="25/12/2024"/>
</template>

<script setup lang="ts">
import terms from '@/components/terms.vue';

const items = [
  {
    title: 'Introdução',
    description: 'O site da Bespoke Bridge pertence a 58.383.080 Luis Eduardo de Oliveira Patrocinio, e respeitamos sua privacidade e estamos comprometidos com a proteção dos dados pessoais de nossos alunos ou alunos prospectivos, dos responsáveis ou representantes legais de nossos alunos e alunos prospectivos. Esta política de privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).',
  },
  {
    title: 'Controlador de seus Dados Pessoais',
    description: 'A Bespoke Bridge é a controladora de seus dados pessoais no contexto de relação estabelecida com você. Para fins da legislação aplicável, controlador é a quem compete as decisões referentes ao tratamento de dados pessoais.',
  },
  {
    title: 'Dados Coletados',
    description: 'Coletamos os seguintes tipos de informações:<ul><li> <b>Dados fornecidos pelo usuário:</b> Nome completo; data de nascimento do aluno e do responsável legal; gênero; endereço de e-mail; endereço residencial; telefone(s); número do CPF e outras informações que possam ser necessárias para contratação de serviços.</li><li><b>Dados de pagamento:</b> Informações financeiras para processar transações, quando aplicável.</li></ul>',
  },
  {
    title: 'Finalidade do Uso dos Dados',
    description: 'Utilizamos os dados para:<ol><li>Formalizar a contratação e gerenciar nossos serviços educacionais;</li><li>Apoiar os Titulares no momento de rematrícula;</li><li>Comunicar informações importantes, como atualizações de serviços e ofertas;</li><li>Conceder acesso a serviços adicionais e plataformas usadas para que as aulas sejam dadas, tais como o Google Workspace;</li><li>Acompanhar o desempenho do aluno ao longo de sua trajetória acadêmica junto a Bespoke Bridge;</li><li>Controlar a emissão de certificados;</li><li>Promover divulgação junto a parceiros da Bespoke Bridge;</li><li>Analisar dados socioeconômicos, quantitativos e estatísticos para fins de conhecimento dos clientes e alunos da Bespoke Bridge ou para demais estudos pertinentes, conforme permitido pela legislação aplicável;</li><li>Cumprir obrigações legais e regulatórias;',
  },
  {
    title: 'Compartilhamento de Dados',
    description: 'Os dados podem ser compartilhados com:<ul><li>Prestadores de serviços terceirizados, tais como nossos parceiros, processadores de pagamento e provedores de serviços de computação em nuvem e outras tecnologias da informação para fins de gestão da prestação de serviços educacionais;</li><li>Autoridades governamentais, conforme exigido por lei.',
  },
  {
    title: 'Transferências de seus Dados Pessoais para fora do Brasil.',
    description: 'A Bespoke Bridge poderá transferir alguns de seus dados pessoais a prestadores de serviços localizados no exterior, incluindo prestadores de serviços em nuvem, ou outras instituições de ensino em caso de programas internacionais, tais como intercâmbios estudantis culturais, ou cursos providos por nossas escolas parceiras. Quando seus dados forem transferidos para fora do Brasil pela Bespoke Bridge, adotaremos medidas apropriadas para garantir a proteção adequada de seus dados pessoais em conformidade com os requisitos da legislação aplicável de proteção de dados, incluindo por meio de celebração de contratos apropriados de transferência de dados com terceiros, quando necessário.',
  },
  {
    title: 'Direitos dos Titulares',
    description: 'Conforme a LGPD, você tem o direito de:<ol><li>Confirmar a existência de tratamento de dados;</li><li>Receber informações claras e completas sobre o tratamento de seus dados pessoais incluindo mais detalhes sobre as hipóteses de compartilhamento de seus dados pessoais com terceiros, nos termos da Seção 4, 5 e 6 desta Política;</li><li>Acessar e corrigir informações pessoais;</li><li>Solicitar a exclusão dos dados, quando possível.</li><li>Revogar consentimento para o uso de seus dados. Para exercer seus direitos, entre em contato pelo e-mail: contato@bespokebridge.com.</li></ol>',
  },
  {
    title: 'Segurança dos Dados',
    description: 'Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda, alterações ou vazamentos.',
  },
  {
    title: 'Retenção de Dados',
    description: 'Os dados serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei',
  },
  {
    title: 'Alterações na Política de Privacidade',
    description: 'Reservamo-nos o direito de alterar esta política a qualquer momento. As atualizações serão publicadas em nosso site com a data de revisão.',
  },
  {
    title: 'Contato',
    description: 'Para quaisquer dúvidas ou solicitações relacionadas a esta política de privacidade, entre em contato pelo e-mail: contato@bespokebridge.com.',
  }
];

</script>
