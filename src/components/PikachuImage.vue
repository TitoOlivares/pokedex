<template>
  <v-container>
    <div class="text-center">
      <div id="container">
        <img
          class="ellipse"
          src="../assets/ellipse.svg"
          height="206"
          width="206"
        />
        <img
          src="../assets/pikachu.svg"
          height="288"
          width="325"
          class="pikachu"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PikachuImage",
};
</script>

<style lang="scss">
#container {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.ellipse {
  position: relative;
  z-index: 1;
  top: 96px;
  left: 155px;
}
.pikachu {
  position: relative;
  z-index: 2;
  top: 25px;
  right: 100px;
}
</style>
