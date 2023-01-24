import { defineStore } from "pinia";
export const useStore = defineStore("storex", {
  state: () => ({ title: "Pinia Vilax", tasks: [] }),
  actions: {
    add(item) {
      this.tasks.push(item);
    },
    deleteItem(i) {
      console.log("clicked", i);
      console.log(this.tasks);
      this.tasks = this.tasks.filter((t) => t !== i);
      console.log(this.tasks);
    },
  },
});
