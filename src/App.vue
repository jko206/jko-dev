<template>
  <div :class="['background', { interactive: isInteractive }]">
    <div class="controls flex justify-center space-x-5 p-2">
      <button @click="() => setInteractive(false)" :class="['control', { active: !isInteractive }]">
        Paper
      </button>
      <button @click="() => setInteractive(true)" :class="['control', { active: isInteractive }]">
        Interactive
      </button>
    </div>
    <!-- 
    https://chatgpt.com/c/4c764e13-76c7-4042-a049-8a5bbf5aa01a
    has a lot of the writings for what went into this version of the resume.
    -->
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isHoveringOverPaper }]"
    >
      <div class="col-1">
        <div class="section main">
          <h1 class="name">{{ resumeData.name }}</h1>
          <h2>{{ resumeData.role }}</h2>
          <ul class="contact-list">
            <li v-for="item in resumeData.contact" :key="item.text">
              <a target="_blank" :href="item.href">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="section">
          <h2>Introduction</h2>
          <div>{{ resumeData.introduction }}</div>
        </div>

        <div class="section">
          <h2>Education</h2>
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
          :title="resumeData.skills.languages.title"
          :items="resumeData.skills.languages.items"
          :highlighted-skill="highlightedSkill"
        />

        <div class="section">
          <h2>{{ resumeData.skills.paradigms.title }}</h2>
          <ul class="slash-list">
            <li v-for="item in resumeData.skills.paradigms.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <SkillsList
          :title="resumeData.skills.tools.title"
          :items="resumeData.skills.tools.items"
          :highlighted-skill="highlightedSkill"
        />
      </div>

      <div class="col-2">
        <h2>Experience</h2>

        <ResumeItem
          v-for="item in resumeData.experiencePage1"
          :key="item.id || item.title"
          :item="item"
          @highlight-skills="onHighlightSkills"
          @clear-highlight="onClearHighlight"
        />
      </div>
    </div>
    <div
      @mouseover="() => setPaperHovering(true)"
      @mouseleave="() => setPaperHovering(false)"
      :class="['paper', { hover: isHoveringOverPaper }]"
    >
      <div class="col-1">
        <div class="section">
          <h2>Miscellaneous</h2>
          <ul class="job-desc-list">
            <li v-for="(item, index) in resumeData.miscellaneous" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <h2>Experience (continued)</h2>

        <ResumeItem
          v-for="item in resumeData.experiencePage2"
          :key="item.id || item.title"
          :item="item"
          @highlight-skills="onHighlightSkills"
          @clear-highlight="onClearHighlight"
        />

        <h2 class="margin-top">Projects</h2>

        <ResumeItem
          v-for="item in resumeData.projects"
          :key="item.id || item.title"
          :item="item"
          @highlight-skills="onHighlightSkills"
          @clear-highlight="onClearHighlight"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { resumeData } from './data/resume'
import SkillsList from './components/SkillsList.vue'
import ResumeItem from './components/ResumeItem.vue'

const isInteractive = ref(false)
const isHoveringOverPaper = ref(false)
const highlightedSkill = ref<string[]>([])

setTimeout(() => {
  isInteractive.value = true
}, 3_000)

const setInteractive = (val: boolean) => (isInteractive.value = val)
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

h1
  font-size: 40px
h2
  font-size: 18px
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
.main
  margin-top: 0.125in
  height: 2.25in
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

.slash-list li
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
  .controls
    display: none

.controls
  transition: max-height 1s
  position: absolute
  top: 0
  height: 50px
  background: darkgray
  width: 100%

  .control
    @apply py-1 px-3 rounded-md bg-white
    &.active
      @apply bg-blue-500 text-white

.interactive
  .paper:nth-child(2)
    margin: 50px auto 0
    padding-bottom: 0
    padding-top: 0.25in
  .paper
    margin: 0 auto
    height: auto
    padding-top: 0
    width: 1000px
    grid-template-columns: 1fr 2fr
    &.hover
      background: gray
      .main:after
        background: var(--jko-blue-muted)
      .main:hover:after
        background: var(--jko-blue)
      li.active
        color: white
        &:before
          color: black

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
