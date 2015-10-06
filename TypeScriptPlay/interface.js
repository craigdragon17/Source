;
function greeter(n) {
    return "Hi my name is" + n.getFullName() + " and my age is " + n.age.toString();
}
var n = {
    firstName: "Ethan",
    lastName: "Fairweather",
    age: 25,
    getFullName: function getFullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(greeter(n));
