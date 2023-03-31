let colorVal

const colorSelector = document.querySelector("input#colorSelector")
const colorLabel = document.querySelector("label#colorLabel")

colorSelector.value ? colorVal = colorSelector.value : colorVal = "#000"

colorSelector.onchange = e => {
  colorVal = e.target.value
  colorLabel.textContent = e.target.value
}

export {
  colorVal
}