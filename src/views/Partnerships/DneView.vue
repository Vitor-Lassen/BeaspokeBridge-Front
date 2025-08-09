<template>
<PartnershipsTemplate
  firstText="Você tem o Cartão <b>DNE</b> ou <b>ISIC</b>? Ou é um professor com a Carteirinha <b>ITIC</b>? A Bespoke Bridge tem uma oferta exclusiva para você!"
  secondText="A <b>Bespoke Bridge</b> firmou parceria com o <b>DNE/ISIC</b> para garantir a estudantes e professores o acesso ao ensino de inglês de qualidade. Estudantes e professores com carteirinhas válidas agora contam com 15% de desconto em nossos cursos em grupo - uma oportunidade de aprender inglês com metodologia personalizada e professores certificados."
  src="isic.png"
  maxHeight="120"
  btnText="Solicite seu desconto"
  :btnLink="dneLink"
>
<h4>Sobre a Parceria</h4>
<p>A <b>Bespoke Bridge</b> tem o compromisso de democratizar o acesso ao ensino de inglês de qualidade, com foco na personalização e no desenvolvimento real dos alunos. Em alinhamento com esse propósito, firmamos uma parceria com o <b>DNE (Documento Nacional do Estudante)</b> e o <b>ISIC (International Student Identity Card)</b> — iniciativas reconhecidas nacional e internacionalmente por incentivarem o acesso à educação, cultura e oportunidades de crescimento.
Essa colaboração tem como objetivo <b>oferecer condições especiais para estudantes e professores</b> que buscam aprimorar suas habilidades no inglês, seja para viagens, carreira ou desenvolvimento pessoal.</p>

<h4>O que esta parceria significa:</h4>
<ul class="base-list">
  <li><b>Desconto exclusivo de 15%</b> em todos os cursos em grupo da Bespoke Bridge</li>
  <li>Válido para portadores do <b>Cartão do Estudante (DNE ou ISIC)</b> e para professores com a <b>Carteirinha ITIC</b></li>
  <li>Acesso ao que a BB oferece: foco na prática real da língua, professores certificados e acompanhamento próximo</li>
  <li> Flexibilidade para estudar online, de onde estiver</li>
</ul>

<h4>Por que esta parceria importa?</h4>
<p>Porque acreditamos que o <b>inglês abre portas — e que essas portas devem estar ao alcance de todos que desejam crescer.</b> Ao unirmos forças com o DNE e o ISIC, estamos criando mais pontes entre estudantes e o mundo. A linguagem não deve ser uma barreira, mas uma ferramenta para alcançar sonhos.</p>

<h4>Como aproveitar o benefício:</h4>

<ol class="base-o-list">
  <li>Acesse o formulário de inscrição clicando no botão abaixo.</li>
  <li>Envie a documentação que comprove sua elegibilidade (cartão DNE/ISIC ou ITIC).</li>
  <li>Nossa equipe entrará em contato para orientar o processo de matrícula e agendar sua entrada em um grupo.</li>
</ol>
<p style="font-size: 10px;">*Vagas limitadas conforme disponibilidade de turmas.</p>
</PartnershipsTemplate>
</template>

<script setup lang="ts">
import PartnershipsTemplate from '@/components/PartnershipsTemplate.vue'
import {dneLink} from '@/config/externalLinks.js'
</script>
