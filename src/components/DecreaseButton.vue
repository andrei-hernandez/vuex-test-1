<template>
 <button @click="onDecrease">Decrease</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'DecreaseButton',
  methods: {
    ...mapActions(['onDecrease'])
  }
})
</script>

<style>

</style>
