//laptopn with describe
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This Laptop is a ".concat(this.year, "  ").concat(this.make, " ").concat(this.model, " ."));
    }
};
laptop.describe();
