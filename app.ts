// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "MAximilian",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// person.role.push("adimn");
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}
const person = {
  name: "MAximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};
let favoriteActivity: any[];
favoriteActivity = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
