<template>
  <div class="home">
    <div class="flex justify-content-center">
      <Button
        @click="dialog_add = !dialog_add"
        class="p-button-text"
        icon="pi pi-plus"
        label="Add Task"
      />
    </div>
    <DialogAddTaskVue />

    <!-- Agregar en un componente -->
    <div class="flex flex-wrap px-3">
      <div class="sm:col-12 md:col-4">
        <h3 class="text-center">Not completed</h3>
        <draggable
          :list="tasks.not_completed"
          group="people"
          @change="log"
          itemKey="title"
        >
          <template #item="{ element }">
            <CardTask
              :title="element.title"
              :desc="element.desc"
              :mindate="element.mindate"
              :maxdate="element.maxdate"
            />
          </template>
        </draggable>
      </div>

      <!-- Agregar en un componente -->
      <div class="sm:col-12 md:col-4">
        <h3 class="text-center">In process</h3>
        <draggable
          :list="tasks.in_process"
          group="people"
          @change="log"
          itemKey="title"
        >
          <template #item="{ element }">
            <CardTask
              :title="element.title"
              :desc="element.desc"
              :mindate="element.mindate"
              :maxdate="element.maxdate"
            />
          </template>
        </draggable>
      </div>

      <!-- Agregar en un componente -->
      <div class="sm:col-12 md:col-4">
        <h3 class="text-center">Completed</h3>
        <draggable
          :list="tasks.completed"
          group="people"
          @change="log"
          itemKey="title"
        >
          <template #item="{ element }">
            <CardTask
              :title="element.title"
              :desc="element.desc"
              :mindate="element.mindate"
              :maxdate="element.maxdate"
            />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import Draggable from "vuedraggable";
import Button from "primevue/button";
import CardTask from "../components/CardTask.vue";

import DialogAddTaskVue from "../components/DialogAddTask.vue";

import { provide, ref } from "vue";

export default {
  name: "Tasks",
  setup(props) {
    const dialog_add = ref(false);
    provide("dialog_add", dialog_add);

    const tasks = ref({
      not_completed: [],
      in_process: [],
      completed: [],
    });

    provide("tasks", tasks);
    return {
      tasks,
      dialog_add,
    };
  },
  components: {
    Draggable,
    Button,
    CardTask,
    DialogAddTaskVue,
  },
  methods: {
    log: function (evt) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  created() {
    moment.locale("es-mx");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {
      not_completed: [],
      in_process: [],
      completed: [],
    };

    this.tasks = tasks;
  },
};
</script>
<style>
.home {
  width: 100%;
}
</style>
