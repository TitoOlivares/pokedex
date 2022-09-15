<template>
  <v-app>
    <bottom-navigation v-if="route" />
    <v-main class="main">
      <v-scroll-x-transition mode="out-in" hide-on-leave>
        <router-view />
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
import BottomNavigation from "./components/BottomNavigation";
export default {
  name: "App",

  components: {
    BottomNavigation,
  },

  data: () => ({
    //
  }),

  computed: {
    route() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.main {
  background-color: #e5e5e5;
}
</style>
