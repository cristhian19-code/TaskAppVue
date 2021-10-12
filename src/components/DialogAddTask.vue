<template>
  <Dialog
    header="Agregar Tarea"
    v-model:visible="dialog_add"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <InputText
      class="col-12 mt-2"
      v-model="task.title"
      placeholder="Titulo de la tarea"
    />
    <Textarea
      class="col-12 mt-2"
      v-model="task.desc"
      :autoResize="true"
      rows="5"
      placeholder="Description de la tarea"
    />
    <div class="flex justify-content-center">
      <Calendar
        dateFormat="dd/mm/yy"
        class="col-6"
        placeholder="Fecha de Inicio"
        :manualInput="false"
        v-model="task.mindate"
        :minDate="new Date()"
      />
      <Calendar
        dateFormat="dd/mm/yy"
        class="col-6"
        placeholder="Fecha de Culminación"
        :manualInput="false"
        v-model="task.maxdate"
        :minDate="task.mindate"
      />
    </div>
    <template #footer>
      <Button label="Yes" icon="pi pi-check" @click="AddTask()" />
    </template>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import moment from "moment";

import { inject } from "vue";
export default {
  components: {
    Dialog,
    InputText,
    Calendar,
    Button,
    Textarea,
  },
  setup(props) {
    const dialog_add = inject("dialog_add");
    const tasks = inject("tasks");
    return {
      tasks,
      dialog_add,
    };
  },
  data() {
    return {
      task: {
        title: "",
        desc: "",
        mindate: new Date(),
        maxdate: "",
      },
      minDate: null,
    };
  },
  methods: {
    AddTask() {
      this.tasks.not_completed.push({
        ...this.task,
        mindate: moment(this.task.mindate).format("L"),
        maxdate: moment(this.task.maxdate).format("L"),
      });

      this.task = {
        title: "",
        desc: "",
        mindate: "",
        maxdate: "",
      };

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.dialog_add = false;
    },
  },
};
</script>

<style>
</style>