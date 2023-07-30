<template>
  <div>
    <h1>To Do</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTask" name="newTask" autocomplete="off" type="text"/>
      <button>Add</button>
    </form>
    <ul>
      <li v-for="(task) in tasks" key="task">
        <span>{{task}}</span>
        <button>Delete</button>
      </li>
    </ul>
    <button>Clear</button>
  </div>
</template>

<script setup>
  const tasks = useCookie(
    'tasks',
    {
      default: () => []
    }
  )
  const newTask = ref('')
  function addTask(){
    if(newTask.value.length >= 1){
      tasks.value.push(newTask.value)
    }
    newTask.value = ''
  }
</script>