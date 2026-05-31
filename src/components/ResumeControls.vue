<template>
  <div class="controls flex justify-center space-x-5 p-2">
    <button
      @click="emit('update:isInteractive', false)"
      :class="['control', { active: !isInteractive }]"
    >
      Paper
    </button>
    <button
      @click="emit('update:isInteractive', true)"
      :class="['control', { active: isInteractive }]"
    >
      Interactive
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isInteractive: boolean
}>()

const emit = defineEmits<{
  (e: 'update:isInteractive', val: boolean): void
}>()
</script>
