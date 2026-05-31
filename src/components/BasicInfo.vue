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

<style lang="sass" scoped>
h1
  font-size: 40px

h2
  font-size: 18px

.main
  margin-top: 0.125in
  aspect-ratio: 1 / 1
  top: -0.125in
  transition: all 0.1s
  &:after
    content: ''
    display: block
    position: absolute
    width: calc(100% + 0.25in)
    height: calc(100% + 0.25in)
    left: -0.125in
    top: -0.125in
    background-color: var(--jko-blue)
    transition: background-color 0.1s
    z-index: -1

.contact-list
  margin-top: 13px
  a
    color: var(--jko-highlight)
    display: inline-block
    border-bottom: 1px solid rgb(141 173 212)
    &:hover
      border-bottom: 1px solid var(--jko-highlight)
</style>
