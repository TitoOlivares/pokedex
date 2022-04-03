<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "../components/List";

export default {
  name: "ListView",

  components: {
    List,
  },
};
</script>
