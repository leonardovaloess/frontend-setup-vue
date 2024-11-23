import { ref } from "vue";

export const links = ref([
  {
    id: 0,
    name: "Estatística",
    icon: "pi-chart-line",
    link: "/statistic",
  },
  {
    id: 1,
    name: "Clientes",
    icon: "pi-users",
    link: "/clients",
  },
  {
    id: 2,
    name: "Cobranças",
    icon: "pi-dollar",
    link: "/payment-charges",
  },
]);
