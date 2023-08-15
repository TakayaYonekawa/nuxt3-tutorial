

const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods: {
        clickHandler: function(event){
            this.counter++
            console.log(event.target.type);
        }
    },
    watch:{

    },


        
})


app.mount('#app')