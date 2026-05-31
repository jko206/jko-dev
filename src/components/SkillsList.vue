<template>
  <div class="section">
    <ResumeSectionHeader :icon="icon">{{ title }}</ResumeSectionHeader>
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
import ResumeSectionHeader from './ResumeSectionHeader.vue'

defineProps<{
  title: string
  items: SkillItem[]
  highlightedSkill: string[]
  icon?: 'code' | 'cpu' | 'wrench'
}>()
</script>

<style lang="sass" scoped></style>
