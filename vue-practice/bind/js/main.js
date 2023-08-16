

const app = Vue.createApp({
    data: () => ({
        show: true
    }),
    components: {
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