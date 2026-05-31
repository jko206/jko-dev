<template>
  <div
    :class="['section', { hidden: item.hidden }]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="h3-row">
      <h2 v-if="isExperience || isProject">
        <svg v-if="isExperience" viewBox="0 0 24 24" class="section-icon">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <svg v-else-if="isProject" viewBox="0 0 24 24" class="section-icon">
          <path d="M12 2S8 7 8 12c0 3 1.5 5 2 6h4c.5-1 2-3 2-6 0-5-4-10-4-10z"></path>
          <path d="M8 14c-1.5.5-3 2-3 4v2h3v-2l1-2"></path>
          <path d="M16 14c1.5.5 3 2 3 4v2h-3v-2l-1-2"></path>
          <circle cx="12" cy="10" r="1.5"></circle>
          <path d="M10 20c0 2 2 4 2 4s2-2 2-4"></path>
        </svg>
        <span>{{ item.title }}</span>
      </h2>
      <h3 v-else>{{ item.title }}</h3>
      <span v-if="item.subtitle || item.period" class="title">
        {{ formatTitleRow(item.subtitle, item.period) }}
      </span>
    </div>
    <div v-if="item.desc" class="desc" v-html="item.desc"></div>
    <ul v-if="item.bullets && item.bullets.length" class="job-desc-list">
      <li v-for="(bullet, index) in item.bullets" :key="index">
        <template v-if="bullet.bold">
          <strong>{{ bullet.bold }}</strong
          >{{ getSeparator(bullet.text, item.title) }}<span v-html="bullet.text"></span>
        </template>
        <template v-else>
          <span v-html="bullet.text"></span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceItem, ProjectItem } from '../data/resume'

const props = withDefaults(
  defineProps<{
    item: ExperienceItem | ProjectItem
    isExperience?: boolean
    isProject?: boolean
  }>(),
  {
    isExperience: false,
    isProject: false
  }
)

const emit = defineEmits<{
  (e: 'highlight-skills', skills: string[]): void
  (e: 'clear-highlight'): void
}>()

const formatTitleRow = (subtitle?: string, period?: string) => {
  if (subtitle && period) {
    return `${subtitle} / ${period}`
  }
  return subtitle || period || ''
}

const getSeparator = (text: string, title: string) => {
  // If the title contains 'Pilot', no colon, just a space.
  // If the first character of text is uppercase (A-Z), we add a colon and space: ': '
  // Otherwise, just a space: ' '
  if (title.includes('Pilot')) {
    return ' '
  }
  return /^[A-Z]/.test(text) ? ': ' : ' '
}

const onMouseEnter = () => {
  if (props.item.skills && props.item.skills.length) {
    emit('highlight-skills', props.item.skills)
  }
}

const onMouseLeave = () => {
  if (props.item.skills && props.item.skills.length) {
    emit('clear-highlight')
  }
}
</script>

<style lang="sass" scoped>
.h3-row
  display: flex
  justify-content: space-between
  align-items: center

h2
  font-size: 18px
  display: flex
  align-items: center
  margin: 0

h3
  font-size: 16px
  font-weight: 800
  color: #0f172a
  margin: 0

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
