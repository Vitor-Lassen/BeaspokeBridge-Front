<template>
  <schoolPage name="ATC Language Schools"
    title="Bem-vindos à "
    logo="ATC/ATCLogoBlueTRANSPARENT-Web.png" logoHeight="150"
    img="ATC/ATC landing page 2.png"
    first-paragraph="A <b>ATC Language Schools</b> é uma instituição renomada na Irlanda, oferecendo cursos de inglês de alta qualidade em Bray e Dublin. Em operação desde 1973 e credenciada por importantes instituições, a ATC oferece programas para todas as idades e níveis, e tem 8 centros de programas de verão para jovens."
    second-paragraph="A <b>Bespoke Bridge</b> escolheu a ATC Language Schools como parceira por sua vasta oferta de cursos em localizações excelentes, além de seu compromisso com o ensino de inglês de ponta. Essa parceria proporciona aos nossos alunos acesso a uma experiência educacional enriquecedora, alinhada aos mais altos padrões globais."
    courses-description="Na <b>ATC Language Schools</b>, os cursos de inglês para adultos são projetados para atender a diversos objetivos e níveis, proporcionando uma experiência de aprendizado enriquecedora e personalizada."
    :courses="courses" :galery="imgs" :locations="locations" />

</template>

<script setup lang="ts">
import schoolPage from '@/components/school/schoolPage.vue';
import type { KeyValueModel } from '@/Models/keyValueModel';

const imgs = [
  '/ATC/atcSchool1.jpg',
  '/ATC/atcSchool2.jpg',
  '/ATC/atcSchool3.jpg',
  '/ATC/atcSchool4.jpg',
  '/ATC/atcSchool5.jpg',
  '/ATC/atcSchool6.jpg',
  '/ATC/atcSchool7.jpg',
  '/ATC/atcSchool8.jpg',
]

const locations = [
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38241.317872949105!2d-6.095543!3d53.198439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867a86760a51927%3A0x8defc19d571f7cb7!2sATC%20Language%20Schools!5e0!3m2!1sen!2sus!4v1760491669379!5m2!1sen!2sus",
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38113.78509970586!2d-6.263416!3d53.341259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9c49fe80a3%3A0x129fc57b5713457b!2sPink!5e0!3m2!1sen!2sus!4v1765846016896!5m2!1sen!2sus"
]

const courses: Array<KeyValueModel> = [
  { key: 'Inglês Geral', value: 'Ideal para quem deseja aprimorar as habilidades fundamentais de leitura, escrita, compreensão auditiva e conversação, ganhando confiança na comunicação cotidiana.' },
  { key: 'Inglês Intensivo', value: 'Uma versão ampliada do curso de Inglês Geral, focada em um progresso mais rápido e aprofundado no domínio do idioma.' },
  { key: 'Inglês Geral Vespertino', value: 'Perfeito para estudantes que preferem estudar no período da tarde, oferecendo flexibilidade sem comprometer a qualidade do ensino.' },
  { key: 'Aulas Individuais', value: 'Sessões personalizadas que atendem às necessidades específicas de aprendizado de cada aluno, permitindo foco em áreas particulares de interesse ou melhoria.' },
  { key: 'Preparação para Exames', value: 'Cursos especializados para aqueles que buscam certificações internacionais, como os exames de Cambridge (B2 First e C1 Advanced) e IELTS, fornecendo estratégias e práticas direcionadas para o sucesso.' },
  { key: 'Bildungsurlaub na Irlanda', value: 'Programas reconhecidos para profissionais alemães que desejam combinar aprendizado intensivo de inglês com a experiência cultural na Irlanda, conforme as diretrizes do Bildungsurlaub.' },
    { key: '', value: 'A ATC Language Schools também oferece programas personalizados, ajustados às metas individuais de cada aluno, garantindo uma experiência de aprendizado totalmente adaptada às suas necessidades.' }
];


</script>
