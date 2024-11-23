<script setup>
import { Password } from "primevue";
import { RouterLink } from "vue-router";
import LoginImage from "@/components/LoginImage.vue";
</script>

<template>
  <div class="flex w-full h-screen">
    <div class="p-5 w-full h-full flex flex-col items-center justify-center">
      <h1 class="text-large text-5xl mb-5">Login</h1>
      <p class="text-base md:text-xl font-light mb-5">
        Preencha seus dados corretamente.
      </p>
      <div class="w-[80%]">
        <div class="flex flex-col w-full mb-3">
          <label>Email:</label>
          <InputText />
        </div>
        <div class="flex flex-col w-full mb-2">
          <label>Senha:</label>
          <Password
            type="password"
            class="w-full"
            toggleMask
            :feedback="false"
          />
        </div>
        <div class="w-full text-end mb-3">
          <RouterLink to="/recover-password" class="text-blue-500"
            >Esqueceu sua Senha?</RouterLink
          >
        </div>
        <Button class="w-full mb-3 bg-blue-500 text-white" :disabled="false"
          >Entrar</Button
        >
        <div class="w-full mb-3">
          <RouterLink to="/recover-password"
            >Não possui uma conta?
            <span class="text-blue-500">Cadastre-se</span></RouterLink
          >
        </div>
      </div>
    </div>
    <div
      class="bg-blue-500 w-full h-full items-center justify-center hidden md:flex"
    >
      <LoginImage />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.p-password) {
  width: 100%; /* Força o componente a ocupar toda a largura */
}
</style>
