class Persons {
  constructor() {
    this.users = [];
  }
  addUser(username, gender) {
    const user = {
      username,
      gender,
    };
    if (this.users.length > 10) {
      this.users.shift();
    }
    this.users.push(user);
  }
  getMaleUsers() {
    return this.users.filter((user) => user.gender.toLowerCase() === "male");
  }

  getFemaleUsers() {
    return this.users.filter((user) => user.gender.toLowerCase() === "female");
  }
}

const persons = new Persons();

persons.addUser("John Doe", "male");
persons.addUser("sara Smith", "female");
persons.addUser("Alice Johnson", "female");
persons.addUser("Bob Brown", "male");

console.log("Male Users:", persons.getMaleUsers());
console.log("Female Users:", persons.getFemaleUsers());
