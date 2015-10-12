interface IMy {
	name: string;
	getName(): string;
}

class MyClass implements IMy {
	name = "Matt";
	getName(): string {
		return this.name;
	}
	lastname = "Landers"
}

var c = new MyClass();
console.log(c.getName());