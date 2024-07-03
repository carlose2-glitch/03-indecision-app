import { ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  // const squareCounter = computed(() => counter.value * counter.value);
  const counter = ref(initialValue);
  return {
    counter,

    //read-only
    squareCounter: computed(() => counter.value * counter.value),
  };
};
