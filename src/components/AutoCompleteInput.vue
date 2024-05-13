<template>
  <div id="AutoCompleteInput" class="flex items-center">
    <input :id="theId" v-model="inputComputed" @click="emit('isActive', true)" type="text" :placeholder="placeholder" autocomplete="off"
    class=" text-md
            bg-red-100
            appearance-none 
            rounded 
            w-full 
            py-2.5
            px-3
            text-gray-700 
            leading-tight 
            focus:outline-none 
            focus:shadow-outline
            focus:bg-gray-200
        ">
        <CloseCircleOutline @click="emit('clearInput')" fillColor="2e2e2d"/>

  </div>
</template>

<script setup>
import CloseCircleOutline from 'vue-material-design-icons/CloseCircleOutline.vue'

import { ref, toRef, defineEmits, computed } from 'vue'

const emit = defineEmits(['update:input', 'isActive', 'clearInput'])

const props = defineProps({
  theId: String,
  input: String,
  placeholder: String
})

const { theId, input } = toRef(props)
const placeholder = ref(props.placeholder)

console.log("Placeholder:", placeholder.value);

const inputComputed = computed({
  get: () => input,
  set: (value) => emit('update:input', value)
})

</script>


<style lang="scss" scoped>

</style>
