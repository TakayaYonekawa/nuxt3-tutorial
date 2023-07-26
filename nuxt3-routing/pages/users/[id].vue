<template>
    <div>
        <h1>users/{{ $route.params.id }}を表示</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        validate: async(route) => {
            return /^\d+$/.test(route.params.id)
        }
    })
</script>