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
      let nuovaTask = {
        text: this.valoreInput,
        done: false,
        tag: this.tagSelect
      };
      this.todos.push(nuovaTask);
      this.valoreInput = '';

      console.log(tag-select)
    },

    deleteTask(index) {
      console.log('ciao')
      this.todos.splice(index, 1);
      console.log('ciao')
    }
  }
}).mount('#app');