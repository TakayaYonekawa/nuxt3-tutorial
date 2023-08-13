const app = Vue.createApp({
    data: () => ({
        message: 'Hello <span style="color:red;">Vue.js</span>'

    }),
    methods: {
        clickHandler: function(event){
            this.message = this.message.split('').reverse().join('')
        }
    }
})


app.mount('#app')