<template>
  <schoolPage
    name="The Bridge"
    title="Bem-vindos à "
    logo="logo-theBridge.png"
    img="BELS/BELS landing page.png"
    first-paragraph="A <b>The Bridge</b>  é um renomado centro de ensino da língua inglesa localizado em Bratislava, no coração da Europa. Com mais de 15 anos de atuação, a escola se destaca na região por seu compromisso não apenas com seus alunos, mas também com toda a comunidade educacional. Esse trabalho consistente e de excelência resultou no credenciamento pela <b> Eaquals</b> , uma das mais respeitadas organizações internacionais de qualidade no ensino de idiomas."
    second-paragraph="A <b>Bespoke Bridge</b> escolheu a The Bridge como parceira por compartilhar os mesmos valores: excelência acadêmica, educação personalizada e desenvolvimento humano genuíno. Por meio dessa parceria, nossos alunos têm acesso a cursos de <b>altíssimo nível</b>, com a possibilidade de estudar <b>online com uma das melhores escolas de inglês da Europa</b>."
    courses-description="A <b>The Bridge</b> oferece uma variedade de cursos de inglês personalizados para adultos, crianças e professores. Mais do que o domínio da língua, sua missão é promover o desenvolvimento humano por meio de uma educação de qualidade, centrada no aluno."
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
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.81967548999552!2d17.10569169871144!3d48.144784203274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c895cef70f62b%3A0xf3be15975e6b6c26!2sThe%20Bridge%20-%20kurzy%20angli%C4%8Dtiny!5e0!3m2!1sen!2sus!4v1760486095957!5m2!1sen!2sus"
]

const courses: Array<KeyValueModel> = [
  { key: 'Inglês Geral', value: 'Ideal para quem deseja aprimorar as principais habilidades linguísticas – leitura, escrita, compreensão auditiva e fala – com foco na comunicação do dia a dia e na construção de confiança para usar o inglês em diferentes situações.' },
  { key: 'Inglês para Negócios', value: 'Desenvolvido para profissionais que precisam se comunicar com segurança em ambientes corporativos. O curso abrange vocabulário técnico, reuniões, apresentações e negociações, preparando o aluno para atuar com fluência no mundo dos negócios.' },
  { key: 'Preparação para Exames', value: 'Voltado para estudantes que buscam certificações internacionais, como o IELTS e os exames de Cambridge. Oferece treinamento específico, estratégias de prova e simulados que aumentam as chances de alcançar as pontuações desejadas.' },
  { key: 'Cursos para Empresas', value: 'Programas para empresas que desejam que seus colaboradores alcancem o nível de proficiência necessário para expandir seus negócios e conquistar novos mercados.' },
  { key: 'Inglês para Crianças', value: 'Por meio da abordagem CLIL (Content and Language Integrated Learning), os alunos não apenas aprendem inglês, mas também exploram temas de ciências, desenvolvendo pensamento crítico e curiosidade em uma segunda língua. Aprender se torna algo natural, significativo e inspirador.' }
];


</script>
