<script setup lang="ts">
import Loader from "./Loader.vue";

defineProps<{
  isDisabled: boolean;
  isLoading: boolean;
}>();
</script>

<template>
  <button
    :disabled="isDisabled || isLoading"
    class="bg-primary flex justify-center rounded-[4px] px-6 py-2 font-semibold text-white duration-150 active:translate-y-0.5 disabled:border disabled:border-neutral-200 disabled:bg-transparent disabled:text-black disabled:active:translate-y-0"
  >
    <span v-if="!isLoading">Создать</span>
    <Loader v-if="isLoading" />
  </button>
</template>
