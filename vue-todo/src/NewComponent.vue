<script setup lang="ts">
defineProps<{
  todos_asc: never[];
}>();
</script>

<template>v-for="todo in todos_asc"</template>
