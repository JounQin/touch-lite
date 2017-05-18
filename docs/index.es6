const demoEl = document.getElementById('demo')

const currPosition = () => {
  let left
  let top

  const style = demoEl.currentStyle ? demoEl.currentStyle : getComputedStyle(demoEl)
  left = style.left
  top = style.top

  left = left === 'auto' ? 0 : +left.replace('px', '')
  top = top === 'auto' ? 0 : +top.replace('px', '')

  return {
    left,
    top
  }
}

let leftStart, topStart

const touch = new Touch(demoEl)
  .on('moveStart', function () {
    const position = currPosition()

    leftStart = position.left
    topStart = position.top
  })
  .on('moving', function () {
    demoEl.style.left = leftStart + this.changedX + 'px'
    demoEl.style.top = topStart + this.changedY + 'px'
  })
