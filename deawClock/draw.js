/** @type {HTMLCanvasElement} */

function animate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  let hours = now.getHours()
  hours = hours % 12
  const canvas = document.querySelector("#clock")
  const ctx = canvas.getContext("2d")
  ctx.save()
  ctx.clearRect(0, 0, 600, 600)

  ctx.translate(300, 300)
  ctx.rotate(-Math.PI / 2)

  ctx.strokeStyle = "black"
  ctx.lineWidth = 5
  ctx.lineCap = "round"

  ctx.save()
  for (let i = 0; i < 12; i++) {
    ctx.beginPath()
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(100, 0)
    ctx.lineTo(120, 0)
    ctx.stroke()
  }
  ctx.restore()

  ctx.save()
  ctx.lineWidth = 3
  for (let i = 0; i < 60; i++) {
    ctx.beginPath()
    ctx.rotate(Math.PI / 30)
    ctx.moveTo(110, 0)
    ctx.lineTo(120, 0)
    ctx.stroke()
  }
  ctx.restore()

  ctx.save()
  ctx.rotate(
    (Math.PI / 6) * hours + (Math.PI / 360) * minutes + (Math.PI / 21600) * seconds
  )
  ctx.lineWidth = 14
  ctx.moveTo(-20, 0)
  ctx.lineTo(80, 0)
  ctx.stroke()
  ctx.restore()

  ctx.restore()
  window.requestAnimationFrame(animate)
}

//  开始动画循环
window.requestAnimationFrame(animate)