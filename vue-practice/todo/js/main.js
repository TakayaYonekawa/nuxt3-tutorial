const app = Vue.createApp({
  data: () => ({
      newTodo: '',
      todos: []
      
  }),
  watch:{

  },
  mounted: function(){
      this.todos = JSON.parse(localStorage.getItem('todos'))
      if(!this.todos){this.todos = []}
  },
  methods: {
      addTodo: function(event){
          if(this.newTodo === '') return
          let todo = {
              item: this.newTodo,
              idDone: false
          }
          this.todos.push(todo)
          localStorage.setItem('todos', JSON.stringify(this.todos))
          this.todos = JSON.parse(localStorage.getItem('todos'))
          this.newTodo = ''
      },
      deleteTodo: function(index){
          this.todos.splice(index, 1)
          localStorage.setItem('todos', JSON.stringify(this.todos))

      }
  } 
      
})


app.mount('#app')