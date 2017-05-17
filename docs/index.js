'use strict';

var demoEl = document.getElementById('demo');

var touch = new Touch(demoEl).on('moveStart', function (e) {
  console.log(this);
  console.log(e.changedX, e.changedY, e._clientX, e._clientY);
});
//# sourceMappingURL=index.js.map