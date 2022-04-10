const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};

// console.log(player.address.city); old syntax

// Object destructuring allows us, to
// pass in name of keys you want to destructure to the curly braces

const {
  name,
  club,
  address: { city },
} = player;

// player.name
// player.club

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);
