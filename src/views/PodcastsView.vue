<template>
 <FeedBase
    title="Podcasts"
    img-src="temperature.png"
    :posts="posts">
  <p>Explore o inglês autêntico por meio de vozes do mundo todo. Em parceria com a The Bridge, trazemos histórias inspiradoras contadas por pessoas com trajetórias únicas — algumas comoventes, outras provocadoras.</p>
  <p>Mergulhe nos nossos podcasts exclusivos, acompanhados de materiais complementares como exercícios e worksheets personalizados, que ajudam você a interagir com os episódios, ampliar seu vocabulário e desenvolver a compreensão auditiva de forma prática e envolvente.</p>
 </FeedBase>
</template>

<script setup lang="ts">
import FeedBase from '@/components/Posts/FeedBase.vue';

import type { PostsTemplate } from '@/Models/PostsTemplate';

const posts: Array<PostsTemplate> = [
  {
    title: 'A perfumer from Egypt',
    description: 'Welcome to today´s episode! We are hosting Ahmed Hamed, a fascinating guest from Cairo. He studied law, but his family of artists sparked his passion for films. After studying directing and scriptwriting in Prague, he came to Slovakia and his life path took a different direction. Ahmed is a talented perfumer now and has created …',
    to: 'https://thebridge.sk/en/a-perfumer-from-egypt/',
    imgSrc: 'podcasts/a-perfumer-from-egypt.jpg'
  },
  {
    title: 'A podcaster from India',
    description: 'Listen to the latest episode of The Bridge on Air with Divya Thakur, a podcaster from India, living in Slovakia for 15 years…',
    to: 'https://thebridge.sk/en/a-podcaster-from-india/',
    imgSrc: 'podcasts/a-podcaster-from-india.jpg'
  },
  {
    title: 'A capoeirista from Brazil',
    description: 'He left the sandy beaches of Salvador, Brazil, to chase the Slovak dream. A professional teacher of capoeira and a massage therapist – two things he was born to do – his words. Nicholas Santana Dos Santos has been practicing capoeira since he was one and it is him who brought this beautiful game to … ',
    to: 'https://thebridge.sk/en/a-capoeirista-from-brazil/',
    imgSrc: 'podcasts/a-capoeirista-from-brazil.jpeg'
  }
  ,
  {
    title: 'Luís Patrocínio',
    description: 'He could have been a movie star in Brazil, but he chose a different path. He could have been a famous, but very stressed out, actor in São Paulo, now he´s a happy and relaxed English teacher in Bratislava. Luis Patrocinio. Listen to the latest podcast, in which we talk with him. Worksheets are of …',
    to: 'https://thebridge.sk/en/luis-patrocinio/',
    imgSrc: 'podcasts/luis_podcast.jpg'
  }
]
</script>
