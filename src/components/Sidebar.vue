<template>
  <Sidebar v-model:visible="active_sidebar">
    <div class="flex flex-column">
      <router-link
        class="
          button-link
          d-flex
          p-button p-button-text p-button-secondary
          my-2
        "
        v-for="input in inputs"
        :key="input.label"
        :to="{ name: input.name }"
      >
        <i :class="input.icon" class="mr-2"></i>
        {{ input.label }}
      </router-link>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

import { inject } from "vue";

export default {
  setup() {
    const active_sidebar = inject("active_sidebar");

    return {
      active_sidebar,
    };
  },
  data() {
    return {
      inputs: [
        { label: "Home", icon: "pi pi-home", name: "Home" },
        { label: "Board", icon: "pi pi-bookmark", name: "Board" },
        { label: "Profile", icon: "pi pi-user", name: "Profile" },
        { label: "Session", icon: "pi pi-sign-in", name: "Session" },
      ],
    };
  },
  components: {
    Sidebar,
    Button,
  },
};
</script>

<style>
.button-link {
  text-decoration: none;
}
</style>