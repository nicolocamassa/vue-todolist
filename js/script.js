const { createApp } = Vue;

createApp({
    data(){
        return{
                todo: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Cercare il cane',
                    done: false
                },
                {
                    text: 'Fare un pisolino',
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
        },
        remove(index){
            this.todo.splice(index, 1);
        }
    },
}).mount('#app')