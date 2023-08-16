const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addTodo: function(e){
            if(this.newItem === '') return
            let todo = {
                item : this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteTodo: function(index){
            this.todos.splice(index, 1)
        }

    }
  })
  app.mount('#app')