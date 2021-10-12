<template>
  <div class="flex flex-column pb-4 align-items-center">
    <div class="portada flex justify-content-center">
      <div
        class="avatar border-round"
        :style="{
          'background-image': `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
        }"
      ></div>
    </div>

    <div class="mt-5 py-5 pl-5">
      <div class="mt-5 flex flex-wrap sm:flex-column md:flex-row gap-4">
        <div class="flex text-left flex-column">
          <div class="label">First Name:</div>
          <div class="text-muted mt-1">Christian Ricardo</div>
        </div>
        <div class="flex text-left flex-column">
          <div class="label">Last Name:</div>
          <div class="text-muted mt-1">Aponte Gutierrez</div>
        </div>
      </div>
      <div class="mt-5">
        <div class="flex text-left flex-column">
          <div class="label">Email:</div>
          <div class="text-muted mt-1">cristhianprozqwerty@gmail.com</div>
        </div>
      </div>
      <div class="mt-5">
        <div class="flex text-left flex-column">
          <div class="label">Age:</div>
          <div class="text-muted mt-1">14</div>
        </div>
      </div>
      <div class="mt-5">
        <div class="flex text-left flex-column">
          <div class="label">Country:</div>
          <div class="text-muted mt-1">Peru</div>
        </div>
      </div>
      <div class="mt-5">
        <div class="flex text-left flex-column">
          <div class="label">Address:</div>
          <div class="text-muted">Mz C lote 19,Surco</div>
        </div>
      </div>
    </div>
    <div>
      <Button
        class="p-button-text mx-2"
        icon="pi pi-user-edit"
        label="Edit"
      ></Button>
      <Button
        class="mx-2 p-button-text p-button-danger"
        icon="pi pi-minus-circle"
        label="Delete Account"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.portada {
  width: 100%;
  height: 60vh;
  background-image: url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.avatar {
  height: 150px;
  width: 150px;
  position: absolute;
  bottom: -70px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 3px solid white;
}

.gap-4 {
  grid-gap: 5rem;
}

.text-muted {
  color: #6c757d;
}

.label {
  font-size: 20px;
}
</style>