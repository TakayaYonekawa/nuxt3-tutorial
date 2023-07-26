<template>
  <div>
    {{title}}
  </div>

</template>

<script setup>
  const title = useState('title', () => 'Hello World')
</script>
