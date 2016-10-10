(function(window) {
    'use strict';
    var ajax = {

        get: function(source, callback, json) {
            var xobj = new XMLHttpRequest();
            json = json || false;

            if (json && xobj.overrideMimeType) {
                xobj.overrideMimeType("application/json");
            }

            xobj.open('GET', source, true);
            xobj.onreadystatechange = function() {
                if (xobj.readyState === 4 && xobj.status === 200) {
                    var response = xobj.responseText;
                    if (json) {
                        response = JSON.parse(response);
                    }
                    callback(response);
                }
            };
            xobj.send(null);
        },

        loadJSON: function(source, callback) {
            this.get(source, callback, true);
        }

    };

    /**********************/
    window.kysela = window.kysela || {};
    window.kysela.ajax = ajax;

}(window));
