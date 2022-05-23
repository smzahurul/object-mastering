const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Ali',
    salary: 250000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    teaBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;

    }
}
normalPerson.teaBill(1000);
normalPerson.teaBill(10000);
normalPerson.teaBill(5000);
console.log(normalPerson.salary);