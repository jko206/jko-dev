<template>
  <div
    :class="['section', { hidden: item.hidden }]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="h3-row">
      <ResumeSectionHeader
        v-if="isExperience || isProject"
        :icon="isExperience ? 'briefcase' : 'rocket'"
      >
        {{ item.title }}
      </ResumeSectionHeader>
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
import ResumeSectionHeader from './ResumeSectionHeader.vue'

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

h3
  font-size: calc(16px + var(--font-offset, 0px))
  font-weight: 800
  color: #0f172a
  margin: 0
</style>
