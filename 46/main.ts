//laptopn with describe
let laptop = {
    make : "Dell",
    model: "XPS 15",
    year : 2021,
    describe :function(){
        console.log(`This Laptop is a ${this.year} ${this.make} ${this.model} .`);
    }

};
laptop.describe();