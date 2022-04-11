/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const userData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        const dt = new Date();
        let myError = new Error(
          `No user data available at ${dt.toLocaleTimeString()}`
        );
        reject(console.log(myError));
      } else {
        let data = {
          id: "asdjn34tuj81r",
          username: "goldmouthdogg88",
          authenticated: "true",
        };
        resolve(data);
      }
    }, 3000);
  });
};

userData()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

// Teacher's Solution

// const userData = new Promise((resolve, reject) => {
//   const error = true;

//   if (error) {
//     reject("500 Level Error");
//   } else {
//     resolve({
//       firstname: "Dylan",
//       age: 32,
//       email: "DylansEmail310@gmail.com",
//     });
//   }
// });

// userData.then((data) => console.log(data)).catch((error) => console.log(error));
