<template>
 <FeedBase
    title="Webnairs"
    img-src="temperature.png"
    :posts="posts">
  <p>Aprofunde-se no aprendizado contínuo em todas as fases da vida com os workshops e webinários online da The Bridge, conduzidos por educadores experientes. Voltados tanto para professores quanto para alunos, esses eventos oferecem oportunidades valiosas de crescimento. Fique atento aos convites e aproveite conteúdos que abrem portas para novos horizontes.</p>
 </FeedBase>
</template>

<script setup lang="ts">
import FeedBase from '@/components/Posts/FeedBase.vue';

import type { PostsTemplate } from '@/Models/PostsTemplate';

const posts: Array<PostsTemplate> = [
  {
    title: 'The Path of Productivity: Keep What Works Online Workshop',
    description: 'Walk the path of productivity and keep what works. Join our free online workshop with Colin Kelly and learn how to do less with more results.',
    to: 'https://thebridge.sk/en/path-of-productivity-with-colin-kelly-online-workshop/',
    imgSrc: 'webnairs/colinIG_workshop.png'
  }
]
</script>
