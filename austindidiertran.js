$(document).ready(function() {

    init();

});

var init = function() {
    document.addEventListener('WebComponentsReady', function() {
        var template = document.querySelector('template[is="dom-bind"]');

        template.selected = 0;

        template.jobs = [{
            "img": "../pictures/Ubisoft.png",
            "company": "Ubisoft Divertissements",
            "title": "Programmeur outils - Stagiaire",
            "timespan": "Hiver 2016"
        },{
            "img": "../pictures/Tyco.png",
            "company": "Tyco Safety Products",
            "title": "Concepteur logiciel - Stagiaire",
            "timespan": "Été 2015"
        }];

    })
}