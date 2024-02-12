<script setup lang="ts">
import { ref } from "vue";
import CreateButton from "./components/CreateButton.vue";
import Select from "./components/Select.vue";

const options = [
  { name: "Сделка", value: "leads" },
  { name: "Контакт", value: "contacts" },
  { name: "Компания", value: "companies" },
];

const selectedValue = ref("0");

const setValue = (value: string) => {
  selectedValue.value = value;
};
</script>
<template>
  <div
    class="mx-auto mt-16 flex min-h-[854px] w-[1200px] flex-col items-center gap-10 rounded-t-3xl bg-white p-8 shadow-lg"
  >
    <Select :set-value="setValue" :options="options" />
    <CreateButton :is-disabled="selectedValue === '0'" />
  </div>
</template>
