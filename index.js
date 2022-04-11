// const photos = [];

// const photoUpload = async () => {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       photos.push("profile pic");
//       resolve("photo uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;
//   console.log(result);
//   console.log(photos.length);
// };

// photoUpload();

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

import fetch from "node-fetch";

const apiUrl = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data["value"]);
};

getJoke();
