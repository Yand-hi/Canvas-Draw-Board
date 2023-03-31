let colorVal
let lineWidth
let toolBarVisible = true

const toolBar = document.querySelector(".tools")
const colorSelector = document.querySelector("input#colorSelector")
const colorLabel = document.querySelector("label#colorLabel")
const lineWidthSelector = document.querySelector("select#lineWidthSelector")
const toggleIcon = document.querySelector("#toggleIcon")

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

toggleIcon.onclick = () => {
  if (toolBarVisible) {
    toolBar.classList.add("hiddenToolBar")
    toggleIcon.classList.add("bottomIcon")
  } else {
    toolBar.classList.remove("hiddenToolBar")
    toggleIcon.classList.remove("bottomIcon")
  }
  toolBarVisible = !toolBarVisible
}

export {
  colorVal,
  lineWidth
}