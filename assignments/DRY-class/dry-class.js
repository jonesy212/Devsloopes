class Person {
    construuctor(name, age, phoneNumber) { 
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    greet(){
        console.log(`My name is ${this.name} and I'm ${this.age}.`)
    }
        
    textMessage(message) {
        console.log(`Message sent to: ${this.phoneNumber}`)
        console.log(`Msg2: ${message}`)
  
    }
}

class Mechanic extends Person {
    constructor(name, age, phoneNumber) {
        super(name, age, phoneNumber);
    }
    
    repairVehicle() {
        console.log('Lets get it done')
    }
}

class Programmer extends Person {
    constructor(name, age, phoneNumber){
    super(name, age, phoneNumber);
    this.language = language 
    }
}


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password
    }
}

class Developer extends User{
     constructor()
}