const demoEl = document.getElementById('demo')

const touch = new Touch(demoEl).on('moveStart', function (e) {
  console.log(this)
  console.log(e.changedX, e.changedY, e._clientX, e._clientY)
})
