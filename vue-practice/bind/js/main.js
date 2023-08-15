const helloComponent = {
    template: '<p>Hello</p>'
}

const app = Vue.createApp({
    data: () => ({
        
    }),
    components: {
        'hello-component': helloComponent
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