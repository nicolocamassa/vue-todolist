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
        done(index){
            this.todo[index].done = !this.todo[index].done;
        }
    },
}).mount('#app')