
//statics  methods are only accessable via class not the instance of the class

class Test{
constructor(){

}
//getter 
//setter
//functions

}

//if you want to get access functions within class we need to create instance but if we dont want any instance 


//example of static method 
//statcis word must be mention before function name
class CarFactory{
    constructor(car){
        this.car=car;

        //only statics  // in this way we can use it with instance e.g carone
        this.constructor.accessInventoryRoom();
    }
    //static method
    static accessInventoryRoom(key)
    {
        console.log("this is supply room"+ key);
        
    }
    getCar()
    {
        return this.car;
    }
    somefun()
    {
        console.log("we are mgf Cars");
        
    }
}
let carone= new CarFactory("SUC");
console.log(carone.getCar());
carone.somefun();

CarFactory.accessInventoryRoom("keyone");
