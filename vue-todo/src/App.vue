<script setup>
import {ref, onMounted, computed, watch} from 'vue'



</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" placeholder="Name here" >
      </h2>
    </section>

    <section class="cteate-todo">
      <h3>Create a todo</h3>

      <form action="" >
        <h4>What's on your todo list?</h4>
        <input type="text" placeholder="e.g. make a video">
     
        <h4>Pick a category</h4>

        <div class="options">
          <label >
            <input type="radio" name="" id="" />
          </label>
        </div>
      </form>
    </section>
  </main>
</template>

