var app = new Vue({ 
    el: '#app',
    data: {
        data1: 'Hello Vue!'
    },
	created: function () {
    // `this` 指向 vm 实例
    alert('a is: ' + this.data1)
  }
});

app.data1 = "dasdagfas";