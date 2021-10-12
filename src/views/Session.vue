<template>
  <div class="flex justify-content-center">
    <div v-if="active" class="q-card flex flex-column sm:col-10 md:col-6 p-4">
      <h1>Login</h1>
      <InputText class="my-2" type="email" placeholder="Email" />
      <InputText class="my-2" type="password" placeholder="Password" />
      <div class="flex flex-column align-items-center">
        <Button class="p-button-primary mt-2" label="Login" />
        <Button
          @click="active = !active"
          label="You are not registered yet?"
          class="p-button-link p-button-warning"
        />
      </div>
    </div>
    <div v-else class="q-card flex flex-column sm:col-10 md:col-6 p-4">
      <h1>Signup</h1>
      <div class="flex justify-content-around">
        <InputText class="my-2 col" type="text" placeholder="First Name" />
        <InputText class="my-2 col" type="text" placeholder="Last Name" />
      </div>
      <InputText class="my-2" type="number" placeholder="Age" />
      <InputText class="my-2" type="email" placeholder="Email" />
      <InputText class="my-2" type="password" placeholder="Password" />
      <InputText class="my-2" type="password" placeholder="Repeat Password" />
      <FileUpload
        name="demo[]"
        v-model="files"
        url="./upload.php"
        @upload="onUpload"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
      <div class="flex flex-column align-items-center">
        <Button class="p-button-primary mt-2" label="Signup" />
        <Button
          @click="active = !active"
          label="Do you already have an account?"
          class="p-button-link p-button-warning"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";

export default {
  components: {
    InputText,
    Button,
    FileUpload,
  },
  data() {
    return {
      active: true,
      files: [],
    };
  },
  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>

<style>
.gap-1 {
  grid-gap: 1rem;
}
</style>