<template>
  <ds-container class="bg-bblue">
    <image-with-card
      v-for="school in getSchool"
      :key="school.link"
      :img="school.img"
      :description="school.description"
      :link="school.link"
    />
  </ds-container>
</template>

<script setup lang="ts">
import ImageWithCard from '@/components/Generic/ImageWithCard.vue'

import { defineProps, computed } from 'vue'

const props = defineProps<{
  isi?: boolean
  bridge?: boolean
  belst?: boolean,
  atc?: boolean
}>()

const getSchool = computed(() => {
  const schoolList = []

  if (props.bridge) {
    schoolList.push({
      img: '/logo-theBridge.png',
      description:
        'A <b>The Bridge</b> é um centro de treinamento <b>especializado no ensino de inglês</b>, localizado no coração de Bratislava, Eslováquia. Fundada em 2009, a escola possui mais de 15 anos de experiência no mercado, oferecendo cursos de inglês de alta qualidade para alunos de todas as idades e níveis, e com diversas necessidades e objetivos. <br>A escola é reconhecida internacionalmente por sua excelência em educação linguística, sendo o primeiro centro de idiomas na Eslováquia a obter a acreditação da EAQUALS em 2020. Além disso, a The Bridge é membro ativo de organizações profissionais nacionais e internacionais, o que reforça seu compromisso com a melhoria contínua da qualidade de ensino.',
      link: '/',
    })
  }
  if (props.isi) {
    schoolList.push({
      img: '/ISI/Logo-black-PNG.png',
      description:
        'Fundada em 2001, a ISI Dublin oferece há mais de 20 anos programas educacionais da mais alta qualidade para estudantes internacionais. A escola é acreditada pela <b>Eaquals</b> e reconhecida pela <b>ACELS</b>, um serviço do <b>Quality and Qualifications Ireland (QQI)</b> para ensino de inglês (ELE). Além disso, a ISI Dublin é membro da principal associação de escolas de idiomas de qualidade da Irlanda, a <b>English Education Ireland (EEI)</b>. <br>A escola é reconhecida internacionalmente por sua abordagem inovadora ao ensino, uso integrado de tecnologia em sala de aula, foco no desenvolvimento profissional contínuo de sua equipe e professores, bem como pelo design interno encantador de seus prédios.',
      link: '/',
    })
  }
  if (props.belst) {
    schoolList.push({
      img: '/BELS/BELS Main RGB-01.png',
      description:
        'A BELS abriu suas portas  em 1997, com uma pequena escola de inglês administrada por uma família na ilha de Gozo. Hoje, sua paixão pelo inglês se expandiu <b>para duas animadas escolas</b> de idiomas que funcionam durante todo o ano, <b>uma em Gozo e outra em Malta</b>. Ao longo desse crescimento, A BELS manteve seus valores e princípios fundamentais: fornecer educaçãoe serviços de qualidade e optaram por permanecer pequenas e focadas nos clientes. Em suas escolas, conhecem cada aluno pelo nome e entendem suas necessidades individuais de aprendizado. A BELS é uma escola credenciada por <b>EAQUALS</b>, o que garante a qualidade de seus serviços educacionais,',
      link: '/',
    })
  }
    if (props.atc) {
    schoolList.push({
      img: '/ATC/ATCLogoBlueTRANSPARENT-Web.png',
      description:
        'A ATC Language Schools, fundada em 1973, é uma instituição renomada dedicada ao ensino de inglês de alta qualidade na Irlanda. Com duas escolas abertas durante todo o ano, localizadas em Bray e Dublin, a ATC oferece uma variedade de cursos de inglês para estudantes de diferentes idades e níveis de proficiência. A instituição é uma das maiores fornecedoras de programas de verão para jovens, com oito centros em todo o país. Todos os cursos são aprovados pela <b>Quality and Qualifications Ireland (QQI)</b> para o ensino de inglês como língua estrangeira. A ATC é credenciada pela <b>ACELS, EAQUALS, English Education Ireland, Quality English e Select Ireland</b>. Com professores qualificados e um ambiente acolhedor, a ATC proporciona uma experiência completa de aprendizado e imersão cultural.',
      link: '/',
    })
  }
  return schoolList
})
</script>
