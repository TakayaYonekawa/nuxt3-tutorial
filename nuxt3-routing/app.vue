<template>
  <div>
    <NuxtLayout >
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead(
    {
      title: "Nuxt 3 store",
      link:[
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:ital,wght@0,500;0,600;0,700;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300&display=swap"}
      ]
    }
  )
</script>