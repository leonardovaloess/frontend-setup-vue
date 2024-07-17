<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <header>
    <div>
      <h1>Olá {{ user.name }}</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(233, 233, 233);
  border-bottom: 1px solid rgba(77, 77, 77, 0.192);
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
