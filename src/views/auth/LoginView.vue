<script setup>
import { Password } from "primevue";
import { RouterLink } from "vue-router";
import LoginImage from "@/components/LoginImage.vue";
</script>

<template>
  <div class="flex w-full h-screen justify-center relative">
    <div class="p-5 flex flex-col justify-center w-full items-center">
      <div class="w-full flex justify-center">
        <img src="../../assets/png/Logo.png" alt="" width="150px" />
      </div>

      <div class="w-[100%] md:w-[500px]">
        <h1 class="text-large text-3xl mt-5 mb-5 font-medium">Login</h1>
        <p class="text-base md:text-xl font-light mb-5">
          Preencha seus dados corretamente para acessar.
        </p>
      </div>
      <div class="w-[100%] md:w-[500px]">
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
        <div class="w-full mb-4">
          <RouterLink to="/register"
            >Não possui uma conta?
            <span class="text-blue-500">Cadastre-se</span></RouterLink
          >
        </div>
      </div>
    </div>
    <div class="w-full hidden md:flex items-center justify-center bg-black">
      <!--<LoginImage />-->
      <img
        class="w-full h-full object-cover opacity-30"
        src="../../assets/png/login-image-background.jpg"
        alt="background"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.p-password) {
  width: 100%; /* Força o componente a ocupar toda a largura */
}
</style>
