const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: []

    }),
    methods: {
        addItem: function(event){
            console.log('ok');
            let todo = {
                item: this.newItem
            }
            this.todos.push(todo)
            this.newItem = ''
        }
    }
})


app.mount('#app')