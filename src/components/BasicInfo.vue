<template>
  <div class="section main">
    <h1 class="name">{{ name }}</h1>
    <h2>{{ role }}</h2>
    <ul class="contact-list">
      <li v-for="item in contact" :key="item.text">
        <a target="_blank" :href="item.href">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ContactItem } from '../data/resume'

defineProps<{
  name: string
  role: string
  contact: ContactItem[]
}>()
</script>
