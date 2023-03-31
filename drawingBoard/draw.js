
import { colorVal } from "./useTools.js";
console.log(colorVal);
/** @type {HTMLCanvasElement} */

const canvas = document.querySelector("#canvas")
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

const ctx = canvas.getContext("2d")

let painting = false
let startPoint = {
  startX: undefined,
  startY: undefined
}
canvas.onmousedown = e => {
  startPoint.startX = e.x
  startPoint.startY = e.y
  painting = true
}
canvas.onmousemove = e => {
  if (painting) {
    startDraw(startPoint, e.x, e.y)
    startPoint.startX = e.x
    startPoint.startY = e.y
  }
}
canvas.onmouseup = () => {
  painting = false
}
function startDraw({startX, startY}, x, y) {
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  ctx.lineCap = "round";
  ctx.lineWidth = 2
  ctx.lineTo(x, y)
  ctx.strokeStyle = colorVal
  ctx.stroke()
  ctx.closePath()
}