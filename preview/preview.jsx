import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JavaScript',

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const msg = ref('Hello JavaScript');

    return () => (
      <div>
        <p>{ msg } - { props.modelValue }</p>
      </div>
    )
  }
})
