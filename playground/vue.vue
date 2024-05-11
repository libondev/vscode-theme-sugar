<script lang="ts" setup>
import { exportConst } from './javascript.js'

const _cls = 'underline'

function onClick() {
  console.log(exportConst)
}
</script>

<template>
  <div class="text-lg" :class="_cls" @click="onClick">
    This is a Vue component

    <span>{{ _cls }}</span>

    <div v-if="true">
      21243
    </div>
  </div>
</template>
