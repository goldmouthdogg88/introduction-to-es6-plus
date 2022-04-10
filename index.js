// const addressMaker = (address) => {
//   const newAddress = {
//     city: address.city,
//     state: address.state,
//     country: "United States",
//   };
//   console.log(newAddress);
// };

// addressMaker({ city: "Austin", state: "Texas" });

const addressMaker = (address) => {
  const { city, state, country } = address;
  const newAddress = {
    city,
    state,
    country: "United States",
  };
  console.log(`${city} ${state} ${newAddress.country}`);
};

addressMaker({ city: "Austin", state: "Texas" });
