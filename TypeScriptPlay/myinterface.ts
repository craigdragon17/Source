interface Name {
	firstName: string;
	lastName: string;
	age: number;
	jobTitle?: string;
	getFullName(): string;
};

function greeter(n:Name){
	return "Hi my name is" + n.getFullName() +" and my age is " + n.age.toString();
}
var n: Name = {
	firstName: "Ethan",
	lastName: "Fairweather",
	age: 25,
	getFullName: function getFullName(): string {
		return this.firstName+ " " + this.lastName;
	}
};
console.log(greeter(n));
