<template>
  <div class="app">
    <div class="flex justify-content-start p-4">
      <Button
        @click="active_sidebar = !active_sidebar"
        icon="pi pi-bars"
        class="p-button-secondary p-button-text"
      />
    </div>
    <SidebarVue />

    <router-view />
  </div>
</template>
<script>
import Button from "primevue/button";
import SidebarVue from "./components/Sidebar.vue";
import { provide, ref } from "vue";

export default {
  setup(props) {
    const active_sidebar = ref(false);
    provide("active_sidebar", active_sidebar);

    return {
      active_sidebar,
    };
  },
  components: {
    Button,
    SidebarVue,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html,
.app {
  padding: 0;
  margin: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
