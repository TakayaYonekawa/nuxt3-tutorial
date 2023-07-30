<template>
  <div>
    count:{{counter}}

    <!-- <button @click="addCount">+</button>
    <button>-</button>
    <button>Reset</button> -->
  </div>
</template>

<script setup>
  const counter = useCounterState()
</script>