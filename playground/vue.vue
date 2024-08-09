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


<style scoped lang="scss">
.progress-wrapper ::v-deep {
  .process-container {
    height: 200px !important;
    transform: translateZ(0);
    will-change: max-height;
  }
}

.circular{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.COMPLETED{
  background-color: var(--success-7);
}
.ACTIVE{
  background-color: var(--primary-7);
}
.NOT_START{
  background-color: var(--info-7);
}
.person-box{
  width: 220px;
  min-height: 30px;
  overflow: hidden;
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 6px;
  border: 1px solid var(--info-7);
  border-radius: 6px;
  cursor: pointer;
  &:hover{
    border-color: var(--primary);
  }
}
.node-view-wrapper{
  height: 100%;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  transition: all 0.2s;
}
.node-view-wrapper-close{
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s;
}
.node-view-wrapper-full{
  max-height: 98vh;
  // overflow-y: auto;
  transition: all 0.2s;
}

.fullscreen{
  position:fixed;
  left: 0.5vw;
  right: 0.5vw;
  margin: auto;
  width: 99vw !important;
  height: 98vh;
  max-height: 98vh;
  overflow-y: auto;
  top: 1vh;
  background-color: white;
  z-index: 20;
  box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
  padding: 15px 20px;
  border-radius: 6px;
}

</style>
