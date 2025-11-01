<template>
<ds-container class="mb-16 mt-6">
  <div class="d-flex align-center justify-space-between ">
  <h1>O que é HLT?</h1>
  <v-btn color="secondary" size="x-large" @click="goHltDigital">Saiba +</v-btn>
  </div>

  <p>
    <b class="tc-b">HLT (Humanistic Language Teaching – Ensino Humanista de Línguas)</b> não é um método. Desde o final dos anos 1970, porém, tem sido fortemente associado a uma série de métodos não convencionais — como The Silent Way, Community Language Learning, Suggestopedia e Total Physical Response — que tinham pouco em comum entre si, exceto talvez por serem criações intencionais de educadores carismáticos vindos de áreas fora do ensino de inglês (ELT), e por utilizarem técnicas e recursos distintos, fora do mainstream. Observar o que realmente acontece em sala de aula e tirar conclusões a partir dessa observação pode ser uma forma de chegar a uma definição — ou pelo menos uma descrição — do HLT. Essa foi a proposta de Diane Larsen-Freeman em <b class="tc-r hover" style="text-decoration:underline" @click="goTILT">Techniques and Principles in Language Teaching </b>(1986; 3ª ed. com Marti Anderson, 2011), onde ela analisou métodos do Gramática-Tradução ao Ensino Baseado em Tarefas por meio da descrição de ações específicas em sala e os princípios por trás delas.
  </p>
  <p>
    HLT também não é uma abordagem única. Embora observar aulas conduzidas por professores que se identificam como humanistas possa revelar pontos em comum, talvez seja mais adequado falar de uma pluralidade de abordagens humanistas. Em Humanism in Language Teaching (1990), Earl Stevick respondeu a críticas acadêmicas sobre o ensino humanista com base em cinco conceitos recorrentes que giram em torno das definições de humanismo:
  </p>
  <ul class="base-list">
    <li>Sentimentos, tanto emocionais quanto estéticos</li>
    <li>Relações sociais, com incentivo à amizade e cooperação</li>
    <li>Responsabilidade</li>
    <li>Intelecto, incluindo o livre exercício do pensamento crítico</li>
    <li>Autorrealização, entendida como a busca pela individualidade, e não pela conformidade</li>
  </ul>
  <p>Esses conceitos — ou valores — parecem ser, em maior ou menor grau, característicos de uma tendência humanista no ensino de línguas. Profissionais de ELT podem reconhecê-los não apenas como formas de ensinar inglês, mas, mais profundamente, como formas de estar em sala de aula e de ser professor.</p>
  <p>HLT não é um conjunto fixo de práticas definíveis, embora se inspire em muitos métodos existentes. Trata-se, na verdade, de um conjunto de crenças, atitudes, filosofias educacionais e disposições.</p>

  <hr class="line-pont align-self-center" style="width: 30vw;">

  <div class="d-flex align-center justify-space-between ">
  <h1>What is HLT?</h1>
  <v-btn color="secondary" size="x-large" @click="goHltDigital">Learn More</v-btn>
  </div>

  <p>
   <b class="tc-b">HLT</b> is not a method, though since the late 1970s, it has been strongly associated with a number of unconventional methods – The Silent Way, Community Language Learning, Suggestopedia, Total Physical Response – that had little in common, except perhaps that they were the purposeful creations of charismatic educators from disciplines outside ELT and employed distinctive, non-mainstream, techniques and resources. Looking at what happens in classrooms and drawing conclusions based on observation might be a way to arrive at a definition, or at least a description, of HLT. This was the guiding principle behind Diane Larsen-Freeman’s <b class="tc-r hover" style="text-decoration:underline;" @click="goTILT">Techniques and Principles in Language Teaching </b>(1986; 3rd ed. with Marti Anderson 2011), in which she surveyed methods from Grammar-Translation to Task-Based Learning by observing and describing individual classroom ‘moves’ and the principles informing them.
  </p>
  <p>
    Nor is HLT an approach, and although it might be interesting to observe classes taught by self-identifying humanistic teachers to see what commonalities emerge, it is probably more accurate to talk about a plurality of humanistic approaches. In Humanism in Language Teaching (1990) Earl Stevick based his response to academic critiques of humanistic approaches on five recurrent concepts that cluster around definitions of humanism:
  </p>
  <ul class="base-list">
    <li>Feelings, both emotional and aesthetic</li>
    <li>Social relations, and the encouragement of friendship and cooperation</li>
    <li>Responsibility</li>
    <li>Intellect, including the free exercise of critical reason</li>
    <li>Self-actualisation, which entails the pursuit of individuality rather than conformity</li>
  </ul>
  <p>These concepts, or values, seem to a greater or lesser extent to be characteristic of a humanistic tendency in language teaching, which ELT practitioners will recognise, not only as ways of doing ELT, but more significantly, as ways of being in a language classroom and ways of being a language teacher.</p>
  <p>HLT is not even a describable and definable body of practices (although it draws upon all kinds of existing methods) – it is rather an assemblage of beliefs, attitudes, educational philosophies and dispositions.</p>
</ds-container>
</template>

<script setup lang="ts">
import { hltDigitalLink, tiltLink } from '@/config/externalLinks'

const goHltDigital = () => {
  window.open(hltDigitalLink, '_blank')
}
const goTILT = () => {
  window.open(tiltLink, '_blank')
}
</script>
