

const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function($event, message){
            this.message = message
            console.log($event);
        }
            
    },
    watch:{

    },


        
})


app.mount('#app')