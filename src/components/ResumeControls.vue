<template>
  <div class="controls-fab">
    <!-- Paper Mode Button -->
    <button
      @click="emit('update:isPaper', !isPaper)"
      :class="['fab-btn', { active: isPaper }]"
      title="Toggle Paper Layout (8.5x11 pages)"
      aria-label="Toggle Paper Layout"
    >
      <svg viewBox="0 0 24 24" class="control-icon">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    </button>

    <!-- Interactive Mode Button -->
    <button
      @click="emit('update:isInteractive', !isInteractive)"
      :class="['fab-btn', { active: isInteractive }]"
      title="Toggle Interactive Features"
      aria-label="Toggle Interactive Features"
    >
      <svg viewBox="0 0 24 24" class="control-icon">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 3a10 10 0 0 0-10 10"></path>
        <path d="M9 3a6 6 0 0 0-6 6"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isInteractive: boolean
  isPaper: boolean
}>()

const emit = defineEmits<{
  (e: 'update:isInteractive', val: boolean): void
  (e: 'update:isPaper', val: boolean): void
}>()
</script>

<style lang="sass" scoped>
.controls-fab
  position: fixed
  bottom: 30px
  right: 30px
  display: flex
  flex-direction: column
  gap: 12px
  z-index: 1000

.fab-btn
  width: 56px
  height: 56px
  border-radius: 50%
  background: white
  color: var(--jko-blue-muted)
  border: 1px solid rgba(0, 0, 0, 0.08)
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: all 0.2s ease
  outline: none

  &:hover
    transform: translateY(-2px)
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2)
    color: var(--jko-highlight)

  &:active
    transform: translateY(0)

  &.active
    background: var(--jko-highlight)
    color: white
    border-color: var(--jko-highlight)
    box-shadow: 0 4px 16px rgba(43, 83, 132, 0.4)

    &:hover
      box-shadow: 0 6px 20px rgba(43, 83, 132, 0.5)

.control-icon
  width: 22px
  height: 22px
  fill: none
  stroke: currentColor
  stroke-width: 2
  stroke-linecap: round
  stroke-linejoin: round
</style>
