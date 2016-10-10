(function(window, document) {
    'use strict';

    var Draw2D = {
        getCanvas: function(elementId, width, height) {
            var canvas = document.getElementById(elementId);
            var context = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            context.clearRect(0, 0, canvas.width, canvas.height);

            if (window.devicePixelRatio > 1) {
                var canvasWidth = canvas.width;
                var canvasHeight = canvas.height;

                canvas.width = canvasWidth * window.devicePixelRatio;
                canvas.height = canvasHeight * window.devicePixelRatio;
                canvas.style.width = canvasWidth + 'px';
                canvas.style.height = canvasHeight + 'px';

                context.scale(window.devicePixelRatio, window.devicePixelRatio);
            }

            return {
                canvas: canvas,
                context: context,
                width: width,
                height: height
            };
        },
        circle: function(context, x, y, radius, fillStyle, lineWidth, strokeStyle) {
            context.beginPath();
            context.arc(x || 5, y || 5, radius || 4, 0, 2 * Math.PI, false);
            context.fillStyle = fillStyle || 'rgb(200,200,200)';
            context.fill();
            context.lineWidth = lineWidth || 1;
            context.strokeStyle = strokeStyle || 'rgba(20,20,20)';
            context.stroke();
        },

    };

    /**********************/
    window.kysela = window.kysela || {};
    window.kysela.Draw2D = Draw2D;

}(window, document));
