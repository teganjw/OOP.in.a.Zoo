
//Next, in your zoo file write a sleep() function that takes an argument called name.
// This function should log “<name> sleeps for 8 hours" to the console each time it's called.
function sleep(name) {
    console.log(name + " sleeps for 8 hours");
}


//Next, write a function named eat that takes two arguments: name and food.
// This method should log "<name> eats <food>" to the console each time it's called.
function eat(name, food){
    console.log(name + " eats " + food);

    food == favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);

}

//Then, create a “run” method in your script which calls sleep("Tigger");
function run() {
    // var tigger = new Tiger("Tigger");
    // tigger.eat("meat");
    // tigger.eat("kibble");
    // var pooh = new Bear("Pooh");
    // pooh.eat("fish");
    // pooh.eat("meat");
    // var rarity = new Unicorn("Rarity");
    // rarity.eat("marshmallows");
    var gemma = new Giraffe("Gemma");
    // gemma.eat("meat");
    // gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    // stinger.eat("ice cream");
    stinger.eat("pollen");
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals([stinger, gemma], "sushi");
}

var animalPopulation = 0;

class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours")

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
    static getPopulation() {
        return animalPopulation;
    }

}


class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor(name){
        super(name, "fish")
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months")

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows")
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud")
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUCK!!! " + this.name + " will not eat " + food) : this.sleep();
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "pollen")
    }
    sleep() {
        console.log(this.name + " never sleeps")
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        food !== this.favoriteFood ? console.log("YUCK!!! " + this.name + " will not eat " + food) : this.sleep();
    }
}



class Zookeeper{
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        this.food = food;
        console.log(this.name + " is feeding " + this.food + " of "+ animalPopulation + " total animals");
        for(var i=0; i<animals.length; i++){
            animals[i].eat(this.food);
        }
    }

}