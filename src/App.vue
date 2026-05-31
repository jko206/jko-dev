<template>
  <div :class="['background', { interactive: isInteractive, fluid: !isPaper }]">
    <ResumeControls v-model:is-interactive="isInteractive" v-model:is-paper="isPaper" />
    <!-- 
    https://chatgpt.com/c/4c764e13-76c7-4042-a049-8a5bbf5aa01a
    has a lot of the writings for what went into this version of the resume.
    -->
    <div
      v-for="pageIdx in totalPages"
      :key="`page-${pageIdx - 1}`"
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isHoveringOverPaper }]"
    >
      <div class="col-1">
        <!-- Teleport target for left column -->
        <div :id="`left-col-${pageIdx - 1}`"></div>
      </div>
      <div class="col-2">
        <!-- Automatically inject continued header on subsequent pages -->
        <h2 v-if="pageIdx > 1" style="margin-top: 0">Experience (continued)</h2>
        <!-- Teleport target for right column -->
        <div :id="`right-col-${pageIdx - 1}`"></div>
      </div>
    </div>

    <!-- Left Column Content Divider -->
    <ContentDivider
      to-prefix="left-col"
      width="2.25in"
      :max-height="isPaper ? 1008 : 999999"
      @update:page-count="(val) => (leftPages = val)"
    >
      <BasicInfo :name="resumeData.name" :role="resumeData.role" :contact="resumeData.contact" />

      <div class="section">
        <h2>
          <svg viewBox="0 0 24 24" class="section-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Introduction</span>
        </h2>
        <div>{{ resumeData.introduction }}</div>
      </div>

      <div class="section">
        <h2>
          <svg viewBox="0 0 24 24" class="section-icon">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <span>Education</span>
        </h2>
        <h3>{{ resumeData.education.school }}</h3>
        <ul class="plain-list">
          <li class="flex justify-between">
            <span>{{ resumeData.education.degree }}</span>
            <span class="small-text">{{ resumeData.education.notes }}</span>
          </li>
          <li>{{ resumeData.education.detail }}</li>
        </ul>
      </div>

      <SkillsList
        icon="code"
        :title="resumeData.skills.languages.title"
        :items="resumeData.skills.languages.items"
        :highlighted-skill="highlightedSkill"
      />

      <SkillsList
        icon="cpu"
        :title="resumeData.skills.paradigms.title"
        :items="resumeData.skills.paradigms.items"
        :highlighted-skill="highlightedSkill"
      />

      <SkillsList
        icon="wrench"
        :title="resumeData.skills.tools.title"
        :items="resumeData.skills.tools.items"
        :highlighted-skill="highlightedSkill"
      />

      <div class="section">
        <h2>
          <svg viewBox="0 0 24 24" class="section-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>Miscellaneous</span>
        </h2>
        <ul class="job-desc-list">
          <li v-for="(item, index) in resumeData.miscellaneous" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </ContentDivider>

    <!-- Right Column Content Divider -->
    <ContentDivider
      to-prefix="right-col"
      width="5.5in"
      :max-height="isPaper ? 1008 : 999999"
      @update:page-count="(val) => (rightPages = val)"
    >
      <h2>
        <svg viewBox="0 0 24 24" class="section-icon">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <span>Experience</span>
      </h2>
      <ResumeItem
        v-for="item in allExperiences"
        :key="item.id || item.title"
        :item="item"
        @highlight-skills="onHighlightSkills"
        @clear-highlight="onClearHighlight"
      />

      <h2 class="margin-top">
        <svg viewBox="0 0 24 24" class="section-icon">
          <path d="M22 2s-3 7-8.5 12H9v-4.5C14.5 4 22 2 22 2zM9 11.5L3 21M12.5 15L3 21"></path>
        </svg>
        <span>Projects</span>
      </h2>
      <ResumeItem
        v-for="item in resumeData.projects"
        :key="item.id || item.title"
        :item="item"
        @highlight-skills="onHighlightSkills"
        @clear-highlight="onClearHighlight"
      />
    </ContentDivider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { resumeData } from './data/resume'
import SkillsList from './components/SkillsList.vue'
import ResumeItem from './components/ResumeItem.vue'
import ContentDivider from './components/ContentDivider.vue'
import ResumeControls from './components/ResumeControls.vue'
import BasicInfo from './components/BasicInfo.vue'

const isInteractive = ref(false)
const isPaper = ref(true)
const isHoveringOverPaper = ref(false)
const highlightedSkill = ref<string[]>([])

const leftPages = ref(1)
const rightPages = ref(1)
const totalPages = computed(() => {
  if (!isPaper.value) return 1
  return Math.max(leftPages.value, rightPages.value)
})

const allExperiences = computed(() => [
  ...resumeData.experiencePage1,
  ...resumeData.experiencePage2
])

setTimeout(() => {
  isInteractive.value = true
}, 3_000)

const setPaperHovering = (val: boolean) => (isHoveringOverPaper.value = val)

const onHighlightSkills = (skills: string[]) => {
  highlightedSkill.value = skills
}

const onClearHighlight = () => {
  highlightedSkill.value = []
}
</script>

<style lang="sass">
body
  background-color: rgb(82, 86, 89) !important
  font-size: 14px
  --jko-blue: rgb(220 230 242)
  --jko-blue-muted: rgb(106 128 154)
  --jko-highlight: rgb(43 83 132)
</style>

<style scoped lang="sass">

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

h3
  font-size: 16px
.small-text
  font-size: 9px
  color: gray
.section
  font-size: 12px
.paper
  background: white
  width:  8.5in
  height: 11in
  margin: 80px auto
  padding: 0.25in
  display: grid
  grid-template-columns: 2.25in 5.5in
  grid-gap: .25in
  line-height: 1.25
  transition: margin 1s, padding 1s, width 1s, height 1s, grid-template-columns 1s, background-color 0.1s

.col2
  transition: all 1s

.section
  position: relative
  z-index: 1
  margin-bottom: 0.125in
  line-height: 1.7
  transition: width 1s, all 0.1s


:deep(.slash-list li)
  display: inline
  word-break: break-word
  &:first-child:before
    display: inline
  &:not(:first-child):before
    content: ' / '
    display: inline
  &.de-emphasized
    color: gray
    &:before
      color: black

.col-1
  top: 0
  transition: all 1s

.h3-row
  display: flex
  justify-content: space-between
  align-items: center
.title
  color: var(--jko-highlight)
.desc
  font-style: italic
.job-desc-list
  list-style-type: square
  padding-left: 20px

@media print
  .paper
    margin: 0
  .background
    transform: scale(1)
  .main:after
    background-color: var(--jko-blue)
    print-color-adjust: exact
  .controls-fab
    display: none

.fluid
  .paper
    margin: 40px auto
    height: auto
    width: 1000px
    grid-template-columns: 1fr 2fr

.interactive
  .paper
    &.hover
      background: gray
      :deep(.main:after)
        background: var(--jko-blue-muted)
      :deep(.main:hover:after)
        background: var(--jko-blue)
      :deep(li.active)
        color: white
        &:before
          color: black

  &:not(.fluid)
    .paper:nth-child(2)
      margin: 50px auto 0
      padding-bottom: 0
      padding-top: 0.25in
    .paper:nth-child(3) .col-1
      top: -88px
      position: relative

  .col-2
    .section:hover
      @apply p-3 rounded-lg
      transform: scale(1.05)
      background: white
  .hover
    .de-emphasized
      color: black
</style>
