<script setup lang="ts">
defineProps<{
  result: string;
}>();
</script>

<template>
  <div class="w-full rounded-md bg-neutral-400 p-5">
    Создана сущность<br />
    ID: {{ result }}
  </div>
</template>
