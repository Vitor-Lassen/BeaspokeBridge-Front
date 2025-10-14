<template>
  <schoolPage
    name="BELS"
    title="Bem-vindos à "
    logo="BELS/BELS Main RGB-01.png"
    img="BELS/BELS landing page.png"
    first-paragraph="A <b>BELS</b> é uma renomada escola de idiomas localizada nas deslumbrantes ilhas de Malta e Gozo, com mais de 25 anos de experiência no ensino da língua inglesa. Credenciada pelo <b>Eaquals</b>, a BELS é reconhecida internacionalmente por seu compromisso com a excelência educacional."
    second-paragraph="A <b>Bespoke Bridge</b> escolheu a ISI Dublin como parceira por seu compromisso com a excelência acadêmica e inovação no ensino de idiomas. Essa parceria proporciona aos nossos alunos acesso a uma experiência educacional enriquecedora, alinhada aos mais altos padrões globais."
    courses-description="A <b>BELS</b> oferece uma variedade de cursos de inglês voltados para <b>adultos e famílias</b>, com foco em ensino personalizado e imersão cultural."
    :courses="courses"
    :galery="imgs"
    :locations="locations"
  />

</template>

<script setup lang="ts">
import schoolPage from '@/components/school/schoolPage.vue';
import type { KeyValueModel } from '@/Models/keyValueModel';

const imgs = [
  '/BELS/belsSchool1.jpg',
  '/BELS/belsSchool2.jpg',
  '/BELS/belsSchool3.jpg',
  '/BELS/belsSchool4.jpg',
  '/BELS/belsSchool5.jpg',
  '/BELS/belsSchool6.jpg',
  '/BELS/belsSchool7.jpg',
  '/BELS/belsSchool8.jpg',
]

const locations= [
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51678.84029760062!2d14.403755000000002!3d35.948743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4e6063628b2b%3A0x2757c8eb32be88e2!2sBELS%20Malta!5e0!3m2!1sen!2sus!4v1760413003772!5m2!1sen!2sus",
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51620.69488893225!2d14.219217!3d36.037544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130fb441deafd30b%3A0x14fe3c683048c7ef!2sTriq%20Ta%20Doti%2C%20Ker%C4%8Bem%2C%20Malta!5e0!3m2!1sen!2sus!4v1760413045230!5m2!1sen!2sus"
]

const courses: Array<KeyValueModel> = [
  { key: 'Inglês Geral', value: 'Ideal para quem deseja aprimorar as habilidades essenciais de leitura, escrita, compreensão auditiva e fala, com foco em comunicação cotidiana e confiança no uso da língua inglesa.' },
  { key: 'Inglês Intensivo', value: 'Uma versão ampliada do curso de Inglês Geral, proporcionando um progresso mais rápido com mais horas de estudo por semana, ideal para quem deseja resultados imediatos.' },
  { key: 'Inglês para Negócios', value: 'Voltado para profissionais que buscam melhorar a comunicação em contextos corporativos, como reuniões, apresentações e negociações, com foco em vocabulário e práticas empresariais.' },
  { key: 'Preparação para Exames', value: 'Desenvolvido para estudantes que buscam certificações internacionais, como IELTS, oferecendo treinamentos específicos para ajudar a atingir as pontuações necessárias.' },
  { key: 'Cursos para Famílias', value: 'Programas flexíveis que atendem às necessidades de adultos e crianças (7-15 anos), com atividades adaptadas para toda a família, proporcionando uma experiência de aprendizado divertida e imersiva em um ambiente seguro e acolhedor.' }
];


</script>
