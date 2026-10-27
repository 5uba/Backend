// same process change to the promise method
const processData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detail = {
        name: "Subashini",
        course: "Full Stack Developer",
      };
      resolve(detail);
    }, 2000);
  });
};
processData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
