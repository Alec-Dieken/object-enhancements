// Same keys and values //
// ES2015 Version //
let firstName = "John"
let lastName = "Smith"

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}


// Computed property names //
// ES2015 Version //
let favoriteNumber = 42

let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite!"
}


// Object Methods //
// ES2015 Version //
instructor = {
    firstName: "Colt",
    sayHello() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
}


// createAnimal function //
function createAnimal(species, v, n) {
    return {
        species,
        [v]() {
            return n
        }
    }
}

const d = createAnimal('dog', 'bark', 'Woof!')
console.log(d.bark())