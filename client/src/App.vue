<script setup lang="ts">
import { ref } from "vue";
import createEntity from "./utils/createEntity.ts";
import CreateButton from "./components/CreateButton.vue";
import Select from "./components/Select.vue";
import ResultSection from "./components/ResultSection.vue";

const options = [
  { name: "Сделка", value: "leads" },
  { name: "Контакт", value: "contacts" },
  { name: "Компания", value: "companies" },
];

const selectedValue = ref("0");

const result = ref();

const setValue = (value: string) => {
  selectedValue.value = value;
};

const handleCreate = async () => {
  const data = await createEntity(selectedValue.value);
  result.value = data;
};
</script>
<template>
  <div
    class="mx-auto mt-16 flex min-h-[854px] w-[1200px] flex-col items-center gap-10 rounded-t-3xl bg-white p-8 shadow-lg"
  >
    <Select @set-value="setValue" :options="options" />
    <CreateButton @click="handleCreate" :is-disabled="selectedValue === '0'" />
    <div
      :class="[
        result ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        'grid duration-150',
      ]"
    >
      <div class="min-h-0 overflow-hidden">
        <ResultSection :result="result" />
      </div>
    </div>
  </div>
</template>
