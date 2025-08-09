<template>
<PartnershipsTemplate
  firstText="O <b>TrackTest</b> é uma plataforma internacionalmente reconhecida que avalia a proficiência em inglês com precisão, seguindo os padrões do CEFR (Quadro Europeu Comum de Referência para Línguas)."
  secondText="A <b>Bespoke Bridge</b>  escolheu o <b> TrackTest</b>  para garantir uma avaliação consistente e confiável do nível de inglês de seus alunos, alinhada aos mais altos padrões internacionais. Isso permite um acompanhamento eficaz do progresso e resultados personalizados."
  src="Tracktest transparente.png"
  btnText="Teste seu nível agora"
  :btnLink="trackTestLink"
>
<h4>Sobre o Tracktest:</h4>
<p>Fundado em 2012, o Tracktest é um Centro de Avaliação de Inglês Online que mede as habilidades de inglês de falantes não nativos. Utilizando a escala do Quadro Europeu Comum de Referência para Línguas (CEFR), oferece uma alternativa moderna aos testes tradicionais, proporcionando avaliações acessíveis e precisas.</p>

<h4>Certificação Internacional:</h4>
<p>Além do certificado emitido pela <b>Bespoke Bridge</b>, nossos alunos têm a opção de realizar o teste do Tracktest e obter um certificado internacional que comprova seu nível de inglês. Este certificado é amplamente reconhecido e possui validade vitalícia, sem data de expiração.</p>

<h4>Reconhecimento no Mercado de Trabalho e Internacionalmente:</h4>
<p>O Tracktest é utilizado por empresas, instituições educacionais e indivíduos em mais de 173 países, abrangendo 136 idiomas. Sua confiabilidade e precisão tornam-no uma ferramenta valiosa para processos de recrutamento e desenvolvimento profissional, sendo uma alternativa moderna aos testes tradicionais.</p>

<p>Ao optar pelo certificado internacional do Tracktest, você adiciona um diferencial significativo ao seu currículo, aumentando suas oportunidades no mercado de trabalho global.</p>

</PartnershipsTemplate>
</template>

<script setup lang="ts">
import PartnershipsTemplate from '@/components/PartnershipsTemplate.vue'
import {trackTestLink} from '@/config/externalLinks.js'
</script>
