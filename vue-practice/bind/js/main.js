const app = Vue.createApp({
    data: () => ({
        basePrice: 100
    }),
    computed: {
        taxincludedPrice: {
            get:function(){
                return this.basePrice * 1.1
            },
            set: function(value){
                this.basePrice = value / 1.1
            }
        }
    },
    methods: {

    }
})


app.mount('#app')