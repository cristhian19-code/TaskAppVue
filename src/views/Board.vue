<template>
  <div>
    <div class="container-board flex flex-wrap justify-content-center">
      <CardBoardVue
        v-for="(board, index) in boards"
        :key="board.title"
        :title="board.title"
        :img="board.img"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
import CardBoardVue from "../components/CardBoard.vue";
import { provide, ref } from "vue";

export default {
  setup(props) {
    const boards = ref([
      {
        img: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Tareas de la Universidad",
        board: {
          not_completed: [],
          in_process: [],
          completed: [],
        },
      },
      {
        img: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Ideas de mi empresa",
        board: {
          not_completed: [],
          in_process: [],
          completed: [],
        },
      },
      {
        img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Tareas del trabajo",
        board: {
          not_completed: [],
          in_process: [],
          completed: [],
        },
      },
    ]);

    provide("boards", boards);

    return {
      boards,
    };
  },
  components: {
    Card,
    CardBoardVue,
  },
};
</script>

<style>
.container-board {
  grid-gap: 15px;
}
</style>