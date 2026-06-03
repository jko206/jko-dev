<template>
  <div :class="['background', { interactive: isInteractive, fluid: !isPaper }]">
    <ResumeControls
      v-model:is-interactive="isInteractive"
      v-model:is-paper="isPaper"
      v-model:is-v2="isV2"
    />
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
        <!-- Teleport target for right column -->
        <div :id="`right-col-${pageIdx - 1}`"></div>
      </div>
    </div>

    <!-- Left Column Content Divider -->
    <ContentDivider
      to-prefix="left-col"
      width="var(--col-1-width)"
      :max-height="isPaper ? pageMaxContentHeight : 999999"
      @update:page-count="(val) => (leftPages = val)"
    >
      <BasicInfo :name="resumeData.name" :role="resumeData.role" :contact="resumeData.contact" />

      <div class="section">
        <ResumeSectionHeader icon="user">Introduction</ResumeSectionHeader>
        <div>{{ resumeData.introduction }}</div>
      </div>

      <div class="section">
        <ResumeSectionHeader icon="book">Education</ResumeSectionHeader>
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
        <ResumeSectionHeader icon="compass">Miscellaneous</ResumeSectionHeader>
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
      width="var(--col-2-width)"
      :max-height="isPaper ? pageMaxContentHeight : 999999"
      @update:page-count="(val) => (rightPages = val)"
    >
      <ResumeItem
        v-for="item in allExperiences"
        :key="item.id || item.title"
        :item="item"
        is-experience
        @highlight-skills="onHighlightSkills"
        @clear-highlight="onClearHighlight"
      />

      <ResumeItem
        v-for="(item, index) in resumeData.projects"
        :key="item.id || item.title"
        :item="item"
        :class="{ 'margin-top': index === 0 }"
        is-project
        @highlight-skills="onHighlightSkills"
        @clear-highlight="onClearHighlight"
      />
    </ContentDivider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { resumeDataV1, resumeDataV2 } from './data/resume'
import SkillsList from './components/SkillsList.vue'
import ResumeItem from './components/ResumeItem.vue'
import ContentDivider from './components/ContentDivider.vue'
import ResumeControls from './components/ResumeControls.vue'
import BasicInfo from './components/BasicInfo.vue'
import ResumeSectionHeader from './components/ResumeSectionHeader.vue'

const isInteractive = ref(false)
const isPaper = ref(true)
const isV2 = ref(true)
const isHoveringOverPaper = ref(false)
const highlightedSkill = ref<string[]>([])

const leftPages = ref(1)
const rightPages = ref(1)
const totalPages = computed(() => {
  if (!isPaper.value) return 1
  return Math.max(leftPages.value, rightPages.value)
})

const pageMaxContentHeight = computed(() => 1235)

const resumeData = computed(() => (isV2.value ? resumeDataV2 : resumeDataV1))
const allExperiences = computed(() => resumeData.value.experiences)

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
  font-size: calc(14px + var(--font-offset, 0px))
  --jko-blue: rgb(220 230 242)
  --jko-blue-muted: rgb(106 128 154)
  --jko-highlight: rgb(43 83 132)

@media print
  body
    --font-offset: -2px
</style>

<style scoped lang="sass">



h3
  font-size: calc(16px + var(--font-offset, 0px))
.small-text
  font-size: calc(9px + var(--font-offset, 0px))
  color: gray
.background
  --page-width: 1000px
  --page-height: calc(var(--page-width) * 11 / 8.5)
  --page-padding: calc(var(--page-width) * 0.25 / 8.5)
  --page-gap: calc(var(--page-width) * 0.25 / 8.5)
  --col-1-width: calc(var(--page-width) * 2.25 / 8.5)
  --col-2-width: calc(var(--page-width) * 5.5 / 8.5)

.section
  font-size: calc(12px + var(--font-offset, 0px))
.paper
  background: white
  width:  var(--page-width)
  height: var(--page-height)
  margin: 80px auto
  padding: var(--page-padding)
  display: grid
  grid-template-columns: var(--col-1-width) var(--col-2-width)
  grid-gap: var(--page-gap)
  line-height: 1.25
  transition: margin 1s, padding 1s, width 1s, height 1s, grid-template-columns 1s, background-color 0.1s

.col2
  transition: all 1s

.section
  position: relative
  z-index: 1
  margin-bottom: calc(var(--page-padding) / 2)
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
  @page
    margin: 0
    size: letter
  .paper
    margin: 0
    box-shadow: none
    font-size: calc(12px + var(--font-offset, 0px))
  .background
    --page-width: 8.5in
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


  .col-2
    .section:hover
      @apply p-3 rounded-lg
      transform: scale(1.05)
      background: white
  .hover
    .de-emphasized
      color: black
</style>
