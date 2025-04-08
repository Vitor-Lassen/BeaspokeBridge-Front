<template>
  <terms
    title="Termos e Condições de Uso de Nosso Site"
    :items="items"
    date="25/12/2024"/>
</template>

<script setup lang="ts">
import terms from '@/components/terms.vue';

const items = [
  {
    title: 'Aceitação dos Termos',
    description: 'Ao acessar e utilizar o site da Bespoke Bridge, propriedade de 58.383.080 Luis Eduardo de Oliveira Patrocinio, você concorda em cumprir e estar vinculado a estes Termos e Condições de Uso. Caso não concorde com qualquer parte destes termos, você deve interromper imediatamente o uso do site.',
  },
  {
    title: 'Uso Permitido',
    description: 'O site da Bespoke Bridge é destinado a:<br><br><ol><li>Acesso às informações sobre nossos serviços educacionais.</li><li>Contratação de cursos e outros serviços relacionados.</li><li>Comunicação com a nossa equipe.</li></ol><br>Você se compromete a utilizar o site apenas para fins legais e de acordo com a legislação aplicável.',
  },
  {
    title: 'Propriedade Intelectual',
    description: 'Todos os conteúdos do site, incluindo textos, imagens, logotipos, gráficos e outros materiais, são propriedade exclusiva da Bespoke Bridge ou licenciados a ela. É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização prévia por escrito.',
  },
  {
    title: 'Cadastro de Usuários',
    description: 'Para acessar determinados serviços, pode ser necessário criar uma conta no site. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas na sua conta.',
  },
  {
    title: 'Política de Privacidade',
    description: 'O uso dos seus dados pessoais está sujeito à nossa Política de Privacidade, que pode ser acessada no site. Recomendamos a leitura para compreender como protegemos suas informações.',
  },
  {
    title: 'Uso de Cookies',
    description: 'Nosso site utiliza cookies para melhorar sua experiência de navegação, analisar o uso do site e fornecer conteúdo personalizado. Para mais detalhes, consulte nossa Política de Cookies.',
  },
  {
    title: 'Limitação de Responsabilidade',
    description: 'A Bespoke Bridge não se responsabiliza por:<ol><li>Erros ou interrupções no funcionamento do site.</li><li>Danos causados por acesso ou uso indevido.</li><li>Conteúdo externo acessado por meio de links no site.</li></ol>',
  },
  {
    title: 'Modificações nos Termos',
    description: 'A Bespoke Bridge reserva-se o direito de alterar estes Termos e Condições a qualquer momento. As alterações serão publicadas no site e entrarão em vigor imediatamente.',
  },
  {
    title: 'Lei Aplicável e Foro',
    description: 'Estes Termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da comarca de São Paulo, salvo disposição legal em contrário.',
  },
  {
    title: 'Contato',
    description: 'Para dúvidas ou solicitações relacionadas a estes Termos e Condições, entre em contato pelo e-mail: contato@bespokebridge.com.',
  }

];

</script>
