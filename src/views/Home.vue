<template>
    <div id="Home" class="flex flex-col h-screen">
        <div class="m-3 mb-auto">
            <div class="my-20">
                <img src="/img/uber/uber2.svg" width="150" alt="">
            </div>
            <div class="grid grid-cols-2 gap-3 my-3">
                <ServiceSelectLarge
                text="ride"
                imageWidth="74"
                image="ride"
                />
                <ServiceSelectLarge
                text="food"
                imageWidth="74"
                image="food"
                promo="true"
                />
                <div class="grid grid-cols-4 gap-3 my-3">
                <ServiceSelectSmall
                text="ride"
                image="ride"
                />
                <ServiceSelectSmall
                text="Transit"
                image="transit"
                />
                <ServiceSelectSmall
                text="Reserve"
                image="reserve"
                />
                <ServiceSelectSmall
                text="2 Wheels"
                image="2wheels"
                />
                </div>
                <div class="w-full bg-custom-color h-14 rounded-full flex items-center p-3">
                    <MagnifyIcon :size="40" />
                    <div class="ml-3 text-xs font-semibold text-gray-700">
                        enter pick up point
                    </div>
                </div>
            </div>
        </div>
        <footer class="w-full z-50 flex justify-around p-1 mb-2 border-t-2 border-t-gray-200">
            <div class="grid place-items-center">
                <HomeIcon :size="30" fillColor="#1f1e1e"/>
                <div class="w-full mt-1 text-sx text-center text-gray-800 font-semibold">Home</div>
            </div>
            <div class="grid place-items-center">
                <MapMarker :size="30" fillColor="#b3b1b1"/>
                <div class="w-full mt-1 text-sx text-center text-gray-400 font-semibold">Destination</div>
            </div>

        </footer>
    </div>
</template>

<script setup>
import ServiceSelectLarge from '../components/ServiceSelectLarge.vue'
import ServiceSelectSmall from '../components/ServiceSelectSmall.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
</script>

<style lang="scss" scoped>
#Home {
  .bg-custom-color {
    background-color: #79ff80;
  }
}
</style>