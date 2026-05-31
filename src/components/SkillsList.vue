<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <ul class="slash-list">
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ active: highlightedSkill.includes(item.id) }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { SkillItem } from '../data/resume'

defineProps<{
  title: string
  items: SkillItem[]
  highlightedSkill: string[]
}>()
</script>

<style lang="sass" scoped>
h2
  font-size: 18px
</style>
