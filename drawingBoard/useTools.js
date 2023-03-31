let colorVal
let lineWidth

const colorSelector = document.querySelector("input#colorSelector")
const colorLabel = document.querySelector("label#colorLabel")
const lineWidthSelector = document.querySelector("select#lineWidthSelector")
colorVal = colorSelector.value
lineWidth = lineWidthSelector.value

colorSelector.onchange = e => {
  colorVal = e.target.value
  colorLabel.textContent = e.target.value
  colorLabel.style.color = e.target.value
}

lineWidthSelector.onchange = e => {
  lineWidth = e.target.value
}

export {
  colorVal,
  lineWidth
}