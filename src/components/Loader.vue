<template>
  <v-container fill-height fluid>
    <v-row align="center" class="screen">
      <v-col class="transparent d-flex justify-center">
        <v-img
          :src="require('../assets/loader.svg')"
          class="pokeball"
          contain
          height="80"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PokeLoader",
};
</script>

<style lang="scss">
// .screen {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   backdrop-filter: blur(2px);
//   z-index: 15;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }

.pokeball {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // width: 120px;
  // height: 120px;
  // margin: -60px 0 0 -60px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 1s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
