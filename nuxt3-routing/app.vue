<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{user.id}}, {{user.name}}
      </li>
    </ul>
  </div>

</template>

<script setup>
  const {data: users} = await useFetch('https://jsonplaceholder.typicode.com/users/')
</script>