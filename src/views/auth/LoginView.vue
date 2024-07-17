<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const { userLogin } = authStore;

const router = useRouter();

const email = ref(null);
const password = ref(null);

const handleSubmit = async () => {
  const payload = {
    email: email.value,
    password: password.value,
  };

  const login = await userLogin(payload);
  console.log("a", login);

  if (login) {
    localStorage.setItem("token-auth", login.token);
    localStorage.setItem("user_id", login.user_id);

    router.push({ path: "/home" });
  }
};
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
          :value="email"
          @input="(ev) => (email = ev.target.value)"
        />
      </div>
      <div class="flex column input-container">
        <label>Senha</label>
        <input
          type="text"
          placeholder="Insira seu email"
          :value="password"
          @input="(ev) => (password = ev.target.value)"
        />
      </div>

      <div class="flex input-container w-100">
        <RouterLink class="password-span-text" to="/register"
          >Esqueceu a senha?</RouterLink
        >
      </div>

      <button @click="handleSubmit">Entrar</button>
      <span>
        Não tem uma conta?
        <RouterLink class="login-span-text" to="/register"
          >Cadastre-se</RouterLink
        >
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  }
}
@media (min-width: 0px) and (max-width: 768px) {
  .page {
    margin-left: 0px;
  }
}
</style>
