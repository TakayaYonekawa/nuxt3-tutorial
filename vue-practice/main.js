const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!',
        count:99,
        user: {
            lastName: 'Nakamura',
            firstName: 'Yuta',
            prefecture: 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue']
    })


}).mount('#app')