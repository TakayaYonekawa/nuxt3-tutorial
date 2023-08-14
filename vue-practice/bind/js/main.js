// const app = Vue.createApp({
//     data: () => ({
//         firstName: '',
//         lastName: '',
//         fullName:''
//     }),
//     computed: {
        
//     },
//     methods: {
//     },
//     watch:{
        
//         firstName: function(value){
//             this.fullName = value + ' ' + this.lastName
//         },
//         lastName: function(value){
//             this.fullName = this.firstName + ' ' + value
//         }

//     }
// })

const app = Vue.createApp({
    data: () => ({
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'},
            
        ]
    }),
    computed: {

        
    },
    methods: {
        onClick:function(event){
            this.colors[1].name = 'White'
        }
    },
    watch:{
        colors: {
            handler: function(newValue, oldValue){
                console.log('Update!');
            },
            deep:true
        },


    }
})


app.mount('#app')