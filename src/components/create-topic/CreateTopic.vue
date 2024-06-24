<script setup>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Toast from "primevue/toast";

import { setTopic } from "../../firebase/firestoreService";
import { getUserIdFromLocalStorage } from "../../store/getLocalStorage";

import { defineProps, defineEmits, ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const showAnnountationTopic = () => {
  toast.add({
    severity: "info",
    summary: "Message",
    detail: "Your topic is added",
    life: 3000,
  });
};

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(["update:visible"]);

const inputHeader = ref("");
const inputTextArea = ref("");

const clearFields = () => {
  inputHeader.value = "";
  inputTextArea.value = "";
};

const closeDialog = () => {
  emit("update:visible", false);
};

const saveTopic = async () => {
  const userId = getUserIdFromLocalStorage();
  const topicData = {
    header: inputHeader.value,
    discription: inputTextArea.value,
    userId: userId,
    createdAt: new Date(),
  };
  try {
    await setTopic(topicData);
    console.log("topicData", topicData);
    clearFields();
    closeDialog();
    showAnnountationTopic();
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <Dialog
    v-model:visible="props.visible"
    maximizable
    modal
    header="Create Topic"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    @hide="closeDialog"
    @update:visible="(val) => emit('update:visible', val)"
    ><div class="header-name">
      <span class="header-title">Enter title your topic</span>
      <InputText class="input-header" v-model="inputHeader" />
    </div>
    <div class="textarea">
      <span class="textarea-title"
        >Write discription your topic or question</span
      >
      <Textarea class="input-textarea" v-model="inputTextArea" />
    </div>
    <Button class="btn-save-topic" label="Save Topic" @click="saveTopic" />
  </Dialog>
  <Toast />
</template>

<style>
.header-name,
.textarea {
  display: flex;
  flex-direction: column;
}

.header-title,
.textarea-title {
  font-size: 16px;
  font-family: sans-serif;
  color: #666;
}

.textarea-title {
  margin-top: 20px;
}

.input-header {
  margin-top: 6px;
  border: 1.5px solid #999;
  border-radius: 7px;
  width: 90%;
  min-width: 50%;
  max-width: 100%;
  font-size: 18px;
  padding-left: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.input-textarea {
  width: 100%;
  padding-left: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border: 1.5px solid #999;
  border-radius: 7px;
}

.btn-save-topic {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 20px;
}

.btn-save-topic:hover {
  color: #777;
}
</style>
