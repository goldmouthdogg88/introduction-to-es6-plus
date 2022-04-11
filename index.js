const photos = [];

const photoUpload = async () => {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("profile pic");
      resolve("photo uploaded");
    }, 3000);
  });

  let result = await uploadStatus;
  console.log(result);
  console.log(photos.length);
};

photoUpload();
