<template>
  <schoolPage
    name="ISI Dublin"
    title="Bem-vindos à "
    logo="ISI/Logo-black-PNG.png"
    logo-height="75"
    img="ISI/ISI landing page.png"
    first-paragraph="A <b> ISI Dublin</b>  é uma renomada escola de inglês localizada no coração de Dublin, Irlanda. Fundada em 2001 e credenciada pela <b> Eaquals</b> , a escola é reconhecida por oferecer educação de alta qualidade a estudantes internacionais."
    second-paragraph="A <b>Bespoke Bridge</b> escolheu a ISI Dublin como parceira por seu compromisso com a excelência acadêmica e inovação no ensino de idiomas. Essa parceria proporciona aos nossos alunos acesso a uma experiência educacional enriquecedora, alinhada aos mais altos padrões globais."
    courses-description=""
    :courses="courses"
    :galery="imgs"
    :locations="locations"
  />

</template>

<script setup lang="ts">
import schoolPage from '@/components/school/schoolPage.vue';
import type { KeyValueModel } from '@/Models/keyValueModel';

const imgs = [
  '/ISI/isiSchool1.jpg',
  '/ISI/isiSchool2.jpg',
  '/ISI/isiSchool3.jpg',
  '/ISI/isiSchool4.jpg',
  '/ISI/isiSchool5.jpg',
  '/ISI/isiSchool6.jpg',
  '/ISI/isiSchool7.jpg',
  '/ISI/isiSchool8.jpg',
]

const locations= [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9527.04557945594!2d-6.283838187833765!3d53.3475273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c282dd2cb2b%3A0xcd82525c8ff047b0!2sISI%20Dublin%20-%20English%20Language%20School!5e0!3m2!1sen!2sus!4v1760487834045!5m2!1sen!2sus" ,
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32433.277661548895!2d-6.277173703394153!3d53.351251684336084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8118e2b727%3A0xf2149c200bf70408!2s39%20Parnell%20Square%20W%2C%20Parnell%20St%2C%20Rotunda%2C%20Dublin%201%2C%20D01%20W7P9%2C%20Ireland!5e0!3m2!1sen!2sus!4v1760487936528!5m2!1sen!2sus"
]

const courses: Array<KeyValueModel> = [
  { key: 'Ano Acadêmico', value: 'O programa do Ano Acadêmico é uma experiência abrangente para estudantes que desejam estudar inglês por um período prolongado, com benefícios adicionais como oportunidade de trabalho legalmente na Irlanda durante os estudos (para alunos com visto adequado).' },
  { key: 'Inglês Geral', value: 'Ideal para quem deseja desenvolver habilidades fundamentais (leitura, escrita, audição e fala) e ganhar confiança na comunicação cotidiana.' },
  { key: 'Inglês Intensivo', value: 'Uma versão ampliada do curso de Inglês Geral, focada em um progresso mais rápido.' },
  { key: 'Preparação para Exames', value: 'Projetado para quem busca certificações internacionais, como IELTS, Cambridge e TOEIC.' },
  { key: 'Inglês para Negócios', value: 'Voltado para profissionais que desejam melhorar sua comunicação em contextos corporativos.' },
  { key: 'Inglês Acadêmico', value: 'Perfeito para quem deseja se preparar para universidades no exterior ou contextos acadêmicos internacionais.' },
  { key: 'Programas Personalizados', value: 'A ISI Dublin também oferece pacotes de cursos ajustados às metas individuais de cada aluno, proporcionando uma experiência totalmente personalizada.' }
];


</script>
