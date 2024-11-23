<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import BaseMobileSidebar from "./sidebar/BaseMobileSidebar.vue";
import { ref } from "vue";
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const openedMenu = ref(false);
</script>

<template>
  <header
    class="w-full border-b flex p-4 sticky top-0 justify-between items-center bg-white border-b-gray-300 shadow-2xl"
  >
    <span class="text-2xl font-normal">Estatística</span>
    <div class="flex items-center gap-5">
      <div class="profile flex gap-3 items-center">
        <span>Olá, Leonardo</span>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQF79PtgKZkmnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731898483159?e=1737590400&v=beta&t=Cma6HzVGgAv9CUBCa85Zk8cshZYJWGym_55dtNk_MrQ"
          alt="leo"
          width="40px"
          style="border-radius: 50%"
        />
      </div>
      <i
        class="mobile-menu-btn pi pi-bars"
        style="font-size: 1.35rem"
        @click="openedMenu = !openedMenu"
      ></i>
    </div>
  </header>
  <BaseMobileSidebar v-if="openedMenu" />
</template>

<style scoped lang="scss">
header {
  z-index: 10;
}

.mobile-menu-btn {
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
}
</style>
