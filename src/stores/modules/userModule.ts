import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userModule', () => {
  const user = '姓名';

  return {
    user
  };
});
