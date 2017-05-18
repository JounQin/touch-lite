'use strict';

var demoEl = document.getElementById('demo');

var currPosition = function currPosition() {
  var left = void 0;
  var top = void 0;

  var style = demoEl.currentStyle ? demoEl.currentStyle : getComputedStyle(demoEl);
  left = style.left;
  top = style.top;

  left = left === 'auto' ? 0 : +left.replace('px', '');
  top = top === 'auto' ? 0 : +top.replace('px', '');

  return {
    left: left,
    top: top
  };
};

var leftStart = void 0,
    topStart = void 0;

var touch = new Touch(demoEl).on('moveStart', function () {
  var position = currPosition();

  leftStart = position.left;
  topStart = position.top;
}).on('moving', function () {
  demoEl.style.left = leftStart + this.changedX + 'px';
  demoEl.style.top = topStart + this.changedY + 'px';
});
//# sourceMappingURL=index.js.map