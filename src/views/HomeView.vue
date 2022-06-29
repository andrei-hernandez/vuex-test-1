<template>
  <div class="home">
    <h1
    :style="colorCounter">
      My Counter is {{ counter }}
    </h1>
    <ActionButton :isDecrease="true" />
    <ActionButton :isDecrease="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import ActionButton from '@/components/ActionButton.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ActionButton
  },
  computed: {
    ...mapState(['counter']),
    colorCounter (): [ { color: string } ] {
      return [this.counter > 100 ? { color: 'green' } : { color: 'red' }]
    }
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['onIncrement'])
  }
})
</script>
