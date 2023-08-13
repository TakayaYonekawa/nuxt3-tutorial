const app = Vue.createApp({
    data: () => ({
        now: '-'
    }),
    methods: {
        onClick: function(){
            // console.log('onClick');
            this.now = new Date().toLocaleString()
        }
    }


}).mount('#app')