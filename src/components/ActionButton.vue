<template>
   <button @click="onClickButton({ isDecrease, number: 100 })"> {{ textButton }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'ActionButton',
  props: {
    isDecrease: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions(['onClickButton'])
  },
  computed: {
    textButton () { return this.isDecrease ? 'Decrease' : 'Increase' }
  }
})
</script>

<style>

</style>
