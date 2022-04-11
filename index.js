// Promises

const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        reject("sorry your payment was not successful");
      } else {
        resolve("Thank you, your payment was successful");
      }
    }, 3000);
  }); // 1. Promise is pending, 2. Promise is fulfilled 3. Promise is rejected
};

buyFlightTicket()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
