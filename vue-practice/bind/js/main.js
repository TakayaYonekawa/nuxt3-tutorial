

const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function(message){
            this.message = message
        
        }
            
    },
    watch:{

    },


        
})


app.mount('#app')