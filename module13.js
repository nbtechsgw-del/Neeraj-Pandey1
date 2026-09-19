// ============================================================
// MODULE 13: INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING
// ============================================================

// 1. Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Neeraj", 23);

console.log(student1);

// 2. this keyword
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.display = function () {
        console.log(this.name, this.salary);
    };
}

const employee1 = new Employee("Rahul", 30000);

employee1.display();

// 3. Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, " + this.name);
};

const person1 = new Person("Neeraj");

person1.greet();

// 4. Class
class StudentClass {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayStudent() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

const student2 = new StudentClass(
    "Neeraj",
    23,
    "MCA"
);

student2.displayStudent();

// 5. Inheritance
class CollegeStudent extends StudentClass {
    constructor(name, age, course, college) {
        super(name, age, course);

        this.college = college;
    }

    displayCollege() {
        console.log("College:", this.college);
    }
}

const student3 = new CollegeStudent(
    "Rahul",
    22,
    "MCA",
    "Graphic Era Hill University"
);

student3.displayStudent();
student3.displayCollege();

// 6. Public property
class User {
    name;

    constructor(name) {
        this.name = name;
    }
}

const user1 = new User("Neeraj");

console.log("Public:", user1.name);

// 7. Private property
class BankAccount {
    #balance = 0;

    constructor(name) {
        this.name = name;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Neeraj");

account.deposit(5000);

console.log("Account holder:", account.name);
console.log("Balance:", account.getBalance());

// account.#balance; // Error because it is private.
