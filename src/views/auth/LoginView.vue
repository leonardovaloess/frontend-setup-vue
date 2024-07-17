<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import BaseAlertError from "@/components/Alert/BaseAlertError.vue";
import { watch } from "vue";

const authStore = useAuthStore();
const { userLogin } = authStore;

const error = ref(false)
const router = useRouter();
const disabled = ref(true)



const payload = ref({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  const login = await userLogin(payload.value);

  if (login) {
    localStorage.setItem("token-auth", login.token);
    localStorage.setItem("user_id", login.user_id);

    router.push({ path: "/home" });
  } else {
    error.value = true

    setTimeout(() => {
      error.value = false
    }, 3000)
  }
};

watch(payload.value, () => {
  if(payload.value.email.length > 1 && payload.value.password.length > 1){
    disabled.value = false
  } else {
    disabled.value = true
  }
})
</script>

<template>
  <div class="flex login-view-container">
    <div class="flex column form-container">
      <h1>Login</h1>
      <div class="flex column input-container">
        <label>Email</label>
        <input
          type="text"
          placeholder="Insira seu email"
          :value="payload.email"
          @input="(ev) => (payload.email = ev.target.value)"
        />
      </div>
      <div class="flex column input-container">
        <label>Senha</label>
        <input
          type="text"
          placeholder="Insira seu email"
          :value="payload.password"
          @input="(ev) => (payload.password = ev.target.value)"
        />
      </div>

      <div class="flex input-container w-100">
        <RouterLink class="password-span-text w-100" to="/register"
          >Esqueceu a senha?</RouterLink
        >
      </div>

      <button @click="handleSubmit" :class="disabled === true ? 'disabled' : ''" :disabled="disabled">Entrar</button>
      <span>
        Não tem uma conta?
        <RouterLink class="login-span-text" to="/register"
          >Cadastre-se</RouterLink
        >
      </span>
      <BaseAlertError v-if="error" type="error" text="Usuário ou senha incorretos"/>

    </div>
  </div>
</template>

<style scoped lang="scss">
.disabled{
  opacity: 0.6;
 
}

.password-span-text {
  color: blue;
  text-align: end;
  text-decoration: none;
  margin-left: 2px;
}
.login-span-text {
  color: blue;
  text-align: left;
  text-decoration: none;
}
.login-view-container {
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.form-container {
  width: 500px;
  gap: 0.8rem;
  h1 {
    text-align: center;
    font-size: 45px;
  }
  .input-container {
    gap: 0.3rem;
    input {
      padding: 0.7rem;
      border-radius: 8px;
      border: 1px solid #24242475;
    }
  }

  button {
    background-color: rgba(0, 0, 255, 0.76);
    color: #fff;
    padding: 0.7rem;
    border: 1px solid rgba(83, 83, 83, 0.219);
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }
}
@media (min-width: 0px) and (max-width: 768px) {
  .page {
    margin-left: 0px;
  }
}
</style>
