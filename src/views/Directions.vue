<template>
    <div id="Directions">
        <div class="grid grid-cols-12 mt-4 shadow-md">
            <div class="col-span2 mx-auto">
                <div>
                    <ArrowLeft :size="30" />
                </div>
                <div class="h-16 mt-4 w-full">
                    <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']"></div>
                    <div class="line"></div>
                    <div :class="[!isPickupActive ? 'square-black' : 'square-gray']"></div>
                </div>
            </div>
            <div class="col-span-10 pr-4">
                <div class="w-full h-5"></div>
                <div class="mb-2 mt-5">
                    <AutoCompleteInput
                    theId="firstInput"
                    v-model:input="pickup"
                    placeholder="enter pick up point"
                    @isActive="isPickupActive = true"
                     />
                </div>
                <div class="mb-3">
                    <AutoCompleteInput
                    theId="secondInput"
                    v-model:input="destination"
                    placeholder="where?"
                    @isActive="isPickupActive = false"
                     />
                </div>
            </div>
        </div>
        <div class="flex items-center custom-broder-bottom">
            <div class="bg-gray-400 mx-5 my-3 5 p-1 5 rounded-full">
            <MapMarker :size="30" fillColor="#f5f5f5"/>
            </div>
            <div>
                <div class="text-lg text-gray-600">London,Uk</div>
                <div class="text-lg text-gray-400">Uk</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AutoCompleteInput from '../components/AutoCompleteInput.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import MapMarker from 'vue-material-design-icons/MapMarker.vue'


let isPickupActive = ref(true)
let pickup = ref('')
let destination = ref('')

</script>

<style lang="scss" scoped>
#Directions {
  .bg-custom-color {
    background-color: #79ff80;
  }
  .circle-black {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: black;
      border-radius: 100%;
    }
    .circle-gray {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: rgb(191, 191, 191);
      border-radius: 100%;
    }
    .square-black {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: black;
    }

    .square-gray {
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background-color: rgb(191, 191, 191);
    }
    .line {
      margin: 0 auto;
      width: 2px;
      height: 45px;
      background-color: rgb(191, 191, 191);
    }

    .custom-border-bottom {
      border-bottom: 1px solid rgb(230, 230, 230);
    }
}
</style>