const app = Vue.createApp({
    data: () => ({

    }),
    methods: {
        addItem: function(event){
            console.log('ok');
        }
    }
})


app.mount('#app')