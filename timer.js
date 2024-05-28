let counter = 0
const counterSecondsDuration = process.env.npm_config_counter_sec_duration
console.log(`> Start ${counterSecondsDuration}`)
let intervalId = setInterval(() => {
  counter += 1
  console.log(counter)
  if (counter == counterSecondsDuration) {
    clearInterval(intervalId)
    console.log("> Done!")
  }
}, 1000)
