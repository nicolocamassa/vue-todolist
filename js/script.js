const { createApp } = Vue;

createApp({
    data() {
        return {
            textNew: '',
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
        done(index) {
            this.todo[index].done = !this.todo[index].done;
        },
        remove(index) {
            this.todo.splice(index, 1);
        },
        addTask() {

            let newObj = {
                text: this.textNew,
                done: false
            }

            this.todo.push(newObj);

            this.textNew = '';
        }
    },
}).mount('#app')