<script setup>
import { now } from '@internationalized/date'

defineProps({
  link: {
    type: Object,
    default: () => null,
  },
})

const startAt = ref(date2unix(now().subtract({ days: 7 })))
const endAt = ref(date2unix(now()))

provide('startAt', startAt)
provide('endAt', endAt)
</script>

<template>
  <main class="space-y-6" />
</template>
