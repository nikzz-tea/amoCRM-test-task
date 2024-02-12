<script setup lang="ts">
import Select from "./components/Select.vue";

const options = [
  { name: "Сделка", value: "leads" },
  { name: "Контакт", value: "contacts" },
  { name: "Компания", value: "companies" },
];
</script>
<template>
  <div
    class="mx-auto mt-16 flex min-h-[854px] w-[1200px] flex-col items-center gap-10 rounded-t-3xl bg-white p-8 shadow-lg"
  >
    <Select :options="options" />
  </div>
</template>
