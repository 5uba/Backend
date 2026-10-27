// process the callback function 2-sec delay - and return the any data that you have.
const process = (callback) => {
  setTimeout(() => {
    const detail = {
      name: "Suba",
      course: "Full Stack Developer"
    }
    callback(detail)
  }, 2000)
}
process((result) => {
    console.log(result)
})


