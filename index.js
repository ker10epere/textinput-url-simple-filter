const fs = require("fs")
const path = require("path")

const curPath = (file) => path.join(__dirname, file)
const inputText = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((line) => line.trim())

const urls = inputText.filter((v) => v.includes("https")).join("\n")
const output = inputText.filter((v) => !v.includes("https")).join("\n")

fs.writeFileSync(curPath("urls.txt"), urls, "utf8")
fs.writeFileSync(curPath("output.txt"), output, "utf8")
console.log("Done!")
