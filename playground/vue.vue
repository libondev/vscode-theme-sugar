<script lang="ts" setup>
import { exportConst } from './javascript.js'

const _cls = 'underline'

function onClick() {
  console.log(exportConst)
}
</script>

<template>
  <div class="text-lg" :class="_cls" @click="onClick">
    <span>This is a Vue component</span>

    <input v-model="_cls"type="text">

    <div v-if="_cls" clearable class="!w-25 min-w-25 mr-3" filterable>
      {{ _cls }}
    </div>
  </div>
</template>
