(function(window) {
    'use strict';
    var dom = {

        getParentWithClass: function(element, classSelector) {
            var elementClasses = [].slice.call(element.classList);
            if (elementClasses.indexOf(classSelector) !== -1) {
                return element;
            }
            return (element.parentElement) ? this.getParentWithClass(element.parentElement, classSelector) : false;
        }

    };

    /**********************/
    window.kysela = window.kysela || {};
    window.kysela.dom = dom;

}(window));
