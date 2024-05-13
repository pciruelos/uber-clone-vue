<template>
    <div id="map">
       <h1>gello</h1>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

  #map {
    width:100%;
    height: 45vh;
    top: 0px;
    left: 0px;
  }

  .gm-style-cc {
    display: none;
  }

  #VehicleSelection {
    .scrollSection {
      height: calc(50vh - 120px); 
      position: absolute; 
      overflow-y: auto; 
      width: 100%
    }

    .bg-custom-gray {
      background-color: rgb(237, 237, 237);
    }
  }
</style>