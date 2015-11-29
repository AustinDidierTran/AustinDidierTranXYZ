$( document ).ready(function(){
    
    init();

});

var init = function() {
        document.addEventListener('WebComponentsReady', function() {
                var template = document.querySelector('template[is="dom-bind"]');

                template.selected = 0;
            })
        }
        