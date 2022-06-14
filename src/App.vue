<template>
  <v-app>
    <ToDo/>
  </v-app>
</template>


<script>
  import ToDo from "./components/ToDo.vue"
  export default {
    name: 'App',
    components: {
      ToDo,
    },
  };

</script>