<template>
  <Card class="mb-3 bg-cyan-700 text-white">
    <template #title>
      <div class="flex justify-content-around align-items-center">
        <p class="my-2">{{ title }}</p>
        <Button
          style="color: white"
          icon="pi pi-trash"
          class="p-button-rounded p-button-text"
        />
      </div>
    </template>
    <template #content>
      {{ desc }}
    </template>
    <template #footer>
      <Chip class="mx-1" :label="mindate" icon="pi pi-calendar" />
      <Chip class="mx-1" :label="maxdate" icon="pi pi-calendar-times" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Chip from "primevue/chip";
import Button from "primevue/button";

export default {
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    mindate: {
      type: String,
    },
    maxdate: {
      type: String,
    },
  },
  components: {
    Card,
    Chip,
    Button,
  },
};
</script>