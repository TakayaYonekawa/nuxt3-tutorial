const buttonCounter = {
    template: '<div><span>count: </span><button @click="countUp">{{ count }}</button></div>',
    data: () => ({
        count: 0
    }),
    methods: {
        countUp: function(event){
            this.count++
        }
    }
}

const app = Vue.createApp({
    data: () => ({
        
    }),
    components: {
        'button-counter': buttonCounter
    },
    methods: {

    },
    watch:{

    },


        
})

app.component('hello-component', {
    template: '<p>Hello</p>'
})
app.mount('#app')