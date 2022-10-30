import { defineStore } from "pinia";

const useAuthUserStore = defineStore("user", {
  state: () => ({
    userInfo: JSON.parse(window.localStorage.getItem("userInfo") || "{}"),
    isLogged: false,
  }),
  getters: {},
  actions: {
    setUserInfo() {
      console.log("getUserInfo");
    },
  },
});
export default useAuthUserStore;
