//this. always required

//private property starts with a '#' and must be inside class



let something =  {
    name: "user",
    _age: 23,
};

class User {
    #age = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this.#age
    }

    set age(age){
        if(typeof age === 'number' && age >= 0){
            this.#age = age;
        }else{
            throw new Error("The age must be a positive whole number");
        }
    }

    write(){
        console.log(this.name, this.age);
    }

    login(user, pass){
        return false;
    }
}

let user = new User("User1", 10);

console.log(something instanceof User);
console.log(user instanceof User);
user.write();