class User {
    constructor (_firstName, _lastName, _age, _location) {

        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    
    confrontaEtà(altroUtente) {
        if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`; 
        } else {
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
        }
    }
}

const user1 = new User("Mario", "Rossi", 40, "Milano");
console.log(user1);

const user2 = new User("Luigi", "Verdi", 45, "Pisa");
console.log(user2);

console.log(user1.confrontaEtà(user2));

//---------------------------------SECONDO ESERCIZIO---------------------------------//

class Pet {
    constructor (_petName, _ownerName, _species, _breed) {

        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    stessoPadrone(altroPet) {
        return this.ownerName === altroPet.ownerName;
    }

    descrizione() {
        return `${this.petName} (${this.species}) - Breed: ${this.breed}, Owner: ${this.ownerName}`;
    }
}


document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);

    console.log("New Pet:", newPet);

    const petList = document.getElementById("petList");
    const listItem = document.createElement("li");
    listItem.textContent = newPet.descrizione();
    petList.appendChild(listItem);

    document.getElementById("petForm").reset();
});
