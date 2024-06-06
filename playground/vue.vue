<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: '',
  },
  multiple: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <view>
    <view>
      12312
    </view>
  </view>
</template>
