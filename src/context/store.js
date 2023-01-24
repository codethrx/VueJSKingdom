import { reactive } from "vue";
const state = reactive({
  name: "A",
  username: "a.username",
});
const changeName = (val) => {
  state.name = state.name === "A" ? "B" : "A";
};
export default {
  state,
  changeName,
};
