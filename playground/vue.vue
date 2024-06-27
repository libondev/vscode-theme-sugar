<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: '',
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  fn: {
    type: Function,
    default: () => {},
  }
})

const emits = defineEmits(['update:modelValue'])

const state = ref(props.modelValue)

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    state.value = value
    emits('update:modelValue', value)
  }
})

console.log(modelValue.value)

modelValue.value.toString().split('')
</script>

<template>
  <view>
    <view class="123">
      12312
    </view>
  </view>
</template>
