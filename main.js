const { createApp } = Vue  

createApp({
  data() {  
    return {
      todos: [
        {
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ],
      valoreInput: '',

    }
  },
  methods: {
    done(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    addt(){
      let nuovaTask = {
        text: this.valoreInput,
        done: false
      }

      this.todos.push(nuovaTask),
      this.valoreInput = ''
    }

  }

}).mount('#app')