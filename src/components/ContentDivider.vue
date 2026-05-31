<template>
  <!-- Hidden ghost container for measuring the slot items at the target width -->
  <div
    class="content-divider-ghost"
    :style="{
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      width: width,
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: -9999
    }"
  >
    <div
      v-for="(vnode, idx) in flattenedChildren"
      :key="`ghost-${idx}`"
      :ref="(el) => setItemRef(el, idx)"
      style="display: flow-root; width: 100%"
    >
      <!-- Teleport moves the element to target selector once calculated -->
      <Teleport :to="targets[idx]" :disabled="!targets[idx]">
        <component :is="vnode" />
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  useSlots,
  watch,
  nextTick,
  onMounted,
  Fragment,
  Comment,
  type VNode
} from 'vue'

const props = withDefaults(
  defineProps<{
    toPrefix: string
    maxHeight?: number
    width?: string
  }>(),
  {
    maxHeight: 1008,
    width: '100%'
  }
)

const emit = defineEmits<{
  (e: 'update:pageCount', count: number): void
}>()

const slots = useSlots()
const pageCount = ref(1)
const targets = ref<string[]>([])
const itemEls = ref<(HTMLElement | null)[]>([])

const setItemRef = (el: any, idx: number) => {
  if (el) {
    itemEls.value[idx] = el as HTMLElement
  }
}

// Recursively flatten children VNodes (handling v-for Fragments, etc.)
const flattenVNodes = (vnodes: VNode[]): VNode[] => {
  const result: VNode[] = []
  for (const vnode of vnodes) {
    if (vnode.type === Fragment && Array.isArray(vnode.children)) {
      result.push(...flattenVNodes(vnode.children as VNode[]))
    } else if (vnode.type !== Comment) {
      result.push(vnode)
    }
  }
  return result
}

const flattenedChildren = computed(() => {
  return slots.default ? flattenVNodes(slots.default()) : []
})

const recalculatePages = async () => {
  // 1. Reset all target selectors to disable Teleport and pull elements back to the ghost container
  targets.value = []
  pageCount.value = 1
  emit('update:pageCount', 1)
  itemEls.value = itemEls.value.slice(0, flattenedChildren.value.length)

  // 2. Wait for Vue to render the elements inside the ghost wrappers
  await nextTick()

  const elements = itemEls.value.filter(Boolean) as HTMLElement[]
  if (elements.length === 0) {
    pageCount.value = 0
    emit('update:pageCount', 0)
    return
  }

  // 3. Measure element heights including vertical margins
  const heights = elements.map((el) => {
    const style = window.getComputedStyle(el)
    const marginTop = parseFloat(style.marginTop) || 0
    const marginBottom = parseFloat(style.marginBottom) || 0
    return el.offsetHeight + marginTop + marginBottom
  })

  // 4. Distribute elements across pages based on maxHeight
  const newAssignments: number[] = []
  let currentHeight = 0
  let currentPage = 0

  heights.forEach((h, idx) => {
    if (currentHeight + h > props.maxHeight && idx > 0) {
      currentPage++
      currentHeight = h
    } else {
      currentHeight += h
    }
    newAssignments.push(currentPage)
  })

  const totalPages = currentPage + 1
  pageCount.value = totalPages
  emit('update:pageCount', totalPages)

  // 5. Wait for the parent component to render the newly created page containers
  await nextTick()

  // 6. Assign target selectors to teleport the items into their page columns
  targets.value = newAssignments.map((pageIdx) => `#${props.toPrefix}-${pageIdx}`)
}

// Watch for children additions, removals, or updates to trigger reflow
watch(
  [flattenedChildren, () => props.maxHeight],
  () => {
    recalculatePages()
  },
  { deep: true }
)

onMounted(() => {
  recalculatePages()
})
</script>
