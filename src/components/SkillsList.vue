<template>
  <div class="section">
    <h2>
      <!-- Code Icon -->
      <svg v-if="icon === 'code'" viewBox="0 0 24 24" class="section-icon">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>

      <!-- CPU Icon -->
      <svg v-if="icon === 'cpu'" viewBox="0 0 24 24" class="section-icon">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="15" x2="23" y2="15"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="15" x2="4" y2="15"></line>
      </svg>

      <!-- Wrench Icon -->
      <svg v-if="icon === 'wrench'" viewBox="0 0 24 24" class="section-icon">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        ></path>
      </svg>

      <span>{{ title }}</span>
    </h2>
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
  icon?: 'code' | 'cpu' | 'wrench'
}>()
</script>

<style lang="sass" scoped>
h2
  font-size: 18px
  display: flex
  align-items: center

.section-icon
  width: 18px
  height: 18px
  stroke: currentColor
  fill: none
  stroke-width: 2
  stroke-linecap: round
  stroke-linejoin: round
  margin-right: 8px
  flex-shrink: 0
</style>
