<template>
  <div class="section main">
    <div class="header-group">
      <h1 class="name">{{ name }}</h1>
      <h2>{{ role }}</h2>
    </div>
    <ul class="contact-list">
      <li v-for="item in contact" :key="item.text">
        <a target="_blank" :href="item.href">
          <!-- Globe Icon -->
          <svg
            v-if="getIconComponent(item.href) === 'globe'"
            viewBox="0 0 24 24"
            class="contact-icon"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            ></path>
          </svg>

          <!-- Mail Icon -->
          <svg
            v-else-if="getIconComponent(item.href) === 'mail'"
            viewBox="0 0 24 24"
            class="contact-icon"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>

          <!-- Phone Icon -->
          <svg
            v-else-if="getIconComponent(item.href) === 'phone'"
            viewBox="0 0 24 24"
            class="contact-icon"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>

          <!-- Github Icon -->
          <svg
            v-else-if="getIconComponent(item.href) === 'github'"
            viewBox="0 0 24 24"
            class="contact-icon"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>

          <!-- LinkedIn Icon -->
          <svg
            v-else-if="getIconComponent(item.href) === 'linkedin'"
            viewBox="0 0 24 24"
            class="contact-icon"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>

          <span class="contact-text">{{ item.text }}</span>
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

const getIconComponent = (href: string) => {
  const h = href.toLowerCase()
  if (h.startsWith('mailto:')) return 'mail'
  if (h.startsWith('tel:')) return 'phone'
  if (h.includes('github.com')) return 'github'
  if (h.includes('linkedin.com')) return 'linkedin'
  return 'globe'
}
</script>

<style lang="sass" scoped>
h1
  font-size: 40px

h2
  font-size: 18px

.main
  display: flex
  flex-direction: column
  justify-content: space-between
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
  margin-bottom: 0
  list-style: none
  padding-left: 0

  li
    margin-bottom: 5px
    display: flex
    align-items: center

  a
    color: var(--jko-highlight)
    display: flex
    align-items: center
    text-decoration: none
    &:hover
      .contact-text
        border-bottom-color: var(--jko-highlight)

  .contact-text
    border-bottom: 1px solid rgb(141 173 212)
    transition: border-bottom-color 0.1s

.contact-icon
  width: 14px
  height: 14px
  display: inline-block
  vertical-align: middle
  margin-right: 6px
  stroke: currentColor
  fill: none
  stroke-width: 2
  stroke-linecap: round
  stroke-linejoin: round
</style>
