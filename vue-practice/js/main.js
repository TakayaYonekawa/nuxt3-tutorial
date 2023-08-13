const app = Vue.createApp({
    data: () => ({
        newItem: '',
        
    }),
    methods: {
        addItem: function(event){
            console.log('ok');
        }
    }
})


app.mount('#app')