<template>
  <div class="p-card">
    <div>
      <img class="img-board border-round" alt="user header" :src="img" />
    </div>
    <div class="p-card-title p-2 mb-0">{{ title }}</div>
    <div class="p-card-footer px-2 pb-3">
      <router-link
        style="text-decoration: none"
        class="p-button p-button-text p-button-success"
        to="/tasks/1#ad42s$$3a54$"
      >
        <i class="pi pi-eye mr-2"></i>
        View
      </router-link>
      <button class="p-button p-button-text p-button-danger">
        <i class="pi pi-trash mr-2"></i>
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
  },
};
</script>

<style scoped>
.img-board {
  height: 250px;
  width: 400px;
}
</style>