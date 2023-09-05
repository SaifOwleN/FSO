/*const prompt=require("prompt-sync")({sigint:true});

const arto = {
    name: '7amo',
    age: 10,
    edu: {
        colors: {
            fav: 'red',
            hated: 'blue'
        }
    },
    greet:function() {
        console.log('hello mr ' + arto.name )
        
    },
    xddfunc: function(a,b){
        console.log(a+b)
    },
}  
arto.growOlder= function() {
    arto.age +=1
    console.log('xddd he is ' + arto.age)


}
const xddMOTS = arto.growOlder
xddMOTS()*/
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 23)
  janja.greet()