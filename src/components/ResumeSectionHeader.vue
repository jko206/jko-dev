<template>
  <h2 class="resume-section-header">
    <!-- User Icon -->
    <svg v-if="icon === 'user'" viewBox="0 0 24 24" class="section-icon">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>

    <!-- Book Icon -->
    <svg v-else-if="icon === 'book'" viewBox="0 0 24 24" class="section-icon">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>

    <!-- Compass Icon -->
    <svg v-else-if="icon === 'compass'" viewBox="0 0 24 24" class="section-icon">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>

    <!-- Briefcase Icon -->
    <svg v-else-if="icon === 'briefcase'" viewBox="0 0 24 24" class="section-icon">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>

    <!-- Rocket Icon -->
    <svg v-else-if="icon === 'rocket'" viewBox="0 0 24 24" class="section-icon">
      <path d="M12 2S8 7 8 12c0 3 1.5 5 2 6h4c.5-1 2-3 2-6 0-5-4-10-4-10z"></path>
      <path d="M8 14c-1.5.5-3 2-3 4v2h3v-2l1-2"></path>
      <path d="M16 14c1.5.5 3 2 3 4v2h-3v-2l-1-2"></path>
      <circle cx="12" cy="10" r="1.5"></circle>
      <path d="M10 20c0 2 2 4 2 4s2-2 2-4"></path>
    </svg>

    <!-- Code Icon -->
    <svg v-else-if="icon === 'code'" viewBox="0 0 24 24" class="section-icon">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>

    <!-- CPU Icon -->
    <svg v-else-if="icon === 'cpu'" viewBox="0 0 24 24" class="section-icon">
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
    <svg v-else-if="icon === 'wrench'" viewBox="0 0 24 24" class="section-icon">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>

    <span>
      <slot />
    </span>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  icon?: 'user' | 'book' | 'compass' | 'briefcase' | 'rocket' | 'code' | 'cpu' | 'wrench'
}>()
</script>

<style lang="sass" scoped>
.resume-section-header
  font-size: 18px
  display: flex
  align-items: center
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
