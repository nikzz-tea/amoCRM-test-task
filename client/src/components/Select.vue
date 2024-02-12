<script setup lang="ts">
interface Entity {
  name: string;
  value: string;
}

defineProps<{
  options: Entity[];
}>();
</script>

<template>
  <select
    class="w-[300px] rounded-sm border border-neutral-400 bg-neutral-300 py-2 pl-3 pr-10 duration-200 sm:text-sm"
  >
    <option value="0">Не выбрано</option>
    <option v-for="{ value, name } in options" :value="value" :key="value">
      {{ name }}
    </option>
  </select>
</template>
