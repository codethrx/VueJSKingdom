import { defineStore } from "pinia";
export const useStore = defineStore("storex", {
  state: () => ({ title: "Pinia Vilax", tasks: [1, 2] }),
  actions: {
    add(item) {
      this.tasks.push(item);
    },
  },
});
