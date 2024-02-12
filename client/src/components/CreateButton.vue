<script setup lang="ts">
defineProps<{
  isDisabled: boolean;
}>();
</script>

<template>
  <button
    :disabled="isDisabled"
    class="bg-primary rounded-[4px] px-6 py-2 font-semibold text-white duration-150 active:translate-y-0.5 disabled:border disabled:border-neutral-200 disabled:bg-transparent disabled:text-black disabled:active:translate-y-0"
  >
    Создать
  </button>
</template>
