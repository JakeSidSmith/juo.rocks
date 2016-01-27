'use strict';

(function () {

  var pupils, pupilPosition;

  var movePupils = function (event) {
    var mousePosition = {
      x: event.clientX,
      y: event.clientY
    };

    var difX = mousePosition.x - pupilPosition.x;
    var difY = mousePosition.y - pupilPosition.y;

    difX = difX / $(window).innerWidth() * 20;
    difY = difY / $(window).innerWidth() * 20;

    pupils.css('transform', 'translate(' + difX + '%, ' + difY + '%)');
  };

  var savePupilPosition = function () {
    pupilPosition = {
      x: (pupils[0].getBoundingClientRect().left + pupils[1].getBoundingClientRect().left) / 2 +
        pupils[0].getBoundingClientRect().width / 2,
      y: (pupils[0].getBoundingClientRect().top + pupils[1].getBoundingClientRect().top) / 2 +
        pupils[0].getBoundingClientRect().height / 2
    };
  };

  var init = function () {
    pupils = $('.pupil');

    savePupilPosition();

    $(window).on('mousemove', movePupils);
    $(window).on('resize', savePupilPosition);
  };

  $(document).ready(init);

})();
