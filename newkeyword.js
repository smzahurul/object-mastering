// new keyword, class and object difference;
class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person('Jalam', 'John', 25000);
console.log(heroPerson);
const friends = new person('Kalam', 'Korim', 20000)
console.log(friends)