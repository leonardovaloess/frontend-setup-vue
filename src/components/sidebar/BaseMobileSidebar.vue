<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { links } from "./partials/links";
import { ref } from "vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const active_link_id = ref(null);
</script>

<template>
  <nav
    class="sidebar h-full w-full flex-col items-center gap-5 p-3 bg-white border-r shadow-2xl border-r-gray-300"
  >
    <div class="flex flex-col gap-4 items-center">
      <div class="header w-full flex items-center justify-center">
        <img src="../../assets/png/Logo.png" alt="logo" width="150px" />
      </div>
      <div class="links w-full p-1 flex flex-col items-center gap-4">
        <div
          v-for="link in links"
          :key="link.id"
          class="pl-5 pt-1.5 pb-1.5 pr-5 link w-full flex items-center gap-3"
          :class="link.id === active_link_id ? 'active' : ''"
          @click="active_link_id = link.id"
        >
          <i
            class="pi pi-chart-line text-md text-gray-500"
            :class="link.icon"
            style="font-size: 1.15rem"
          ></i>
          <span class="text-gray-500 text-md">{{ link.name }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.sidebar {
  animation: slide-in 0.5s forwards;
}
.active {
  background-color: #3b81f6;
  span {
    color: #fff;
  }

  i {
    color: #fff;
  }
}

.link {
  border-radius: 5px;

  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-60px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>
