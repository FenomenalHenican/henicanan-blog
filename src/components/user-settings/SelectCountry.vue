<script setup>
import { defineEmits, defineProps, computed } from "vue";
import { getAllCountries } from "../user-settings/countries";
import Dropdown from "primevue/dropdown";

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});

const countries = getAllCountries();
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="model"
      :options="countries"
      filter
      optionLabel="name"
      placeholder="Select a Country"
      class="w-full md:w-14rem"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
