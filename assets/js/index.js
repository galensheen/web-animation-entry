/**
 * Created by galen on 16/12/4.
 */

$(function() {
    var $scene = $('#scene').parallax();

    var count = 200;
    for (var i = 0; i < 3; i++) {
        var layer = $('#star' + i);
        var width = layer.width();
        var height = layer.height();

        for (var j = 0; j < count; j++) {
            var x = Math.random() * width;
            var y = Math.random() * height;

            var star = document.createElement('div');
            // 300 < speed < 500
            var speed = 1000 * (Math.random() *  100 + 50);
            star.setAttribute('class', 'star' + i);
            layer.append(star);
            //star.style.left = x + 'px';
            star.style.top = y + 'px';

            if (j % 50 === 0) {
                star.style.animation = 'flash ' + (Math.random() * 5 + 1) + 's ease infinite';
            }

            if (j % 101 === 0) {

                star.animate([{transform: 'translate3d(' + x + 'px, ' + '0px, 0)'},
                        {transform: 'translate3d(' + Math.random() * 256 + 'px, ' + Math.random() * 256 + 'px, 0)'}],
                    {delay: 0, duration: 1000, iterations: 1000});

            } else {
                star.animate([{transform: 'translate3d(' + width + 'px, ' + y + 'px, 0)'},
                        {transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + y + 'px, 0)'}],
                    {delay: Math.random() * -speed, duration: speed, iterations: 1000});
            }
        }
    }
});