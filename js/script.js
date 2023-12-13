const { createApp } = Vue;

createApp({
    data(){
        return{
                todo: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                }
            ]
        }
    },
    methods: {
        
    },
}).mount('#app')