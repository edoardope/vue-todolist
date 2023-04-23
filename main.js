const { createApp } = Vue  

createApp({
  data() {  
    return {
      todos: [
        {
          text: 'Fare i compiti',
          done: false,
          tag: ''
        },
        {
          text: 'Fare la spesa',
          done: true,
          tag: ''
        },
        {
          text: 'Fare il bucato',
          done: false,
          tag: ''
        }
      ],
      valoreInput: '',
      tagSelect: '',
    }
  },

  methods: {
    done(index) {
      this.todos[index].done = !this.todos[index].done;
    },

    addt() { 
      if (this.valoreInput.length >= 1) {
        let nuovaTask = {
          text: this.valoreInput,
          done: false,
          tag: this.tagSelect
        };
        this.todos.push(nuovaTask);
        this.valoreInput = '';
      }
    },

    deleteTask(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#app');