<template>
  <v-app>
    <v-main class="main">
      <v-scroll-x-transition mode="out-in" hide-on-leave>
        <router-view />
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.main {
  background-color: #e5e5e5;
  font-family: "Lato";
}
</style>
