$(document).ready(function() {

    init();

});

var init = function() {
    document.addEventListener('WebComponentsReady', function() {
        var template = document.querySelector('template[is="dom-bind"]');

        template.selected = 0;

        template.tabs = [{
            "icon": "account-box",
            "name": "À propos de moi"
        }/*, {
            "icon": "book",
            "name": "Blog"
        }*/];

        template.jobs = [{
            "img": "../pictures/Ubisoft.png",
            "company": "Ubisoft Divertissements",
            "title": "Programmeur outils - Stagiaire",
            "timespan": "Hiver 2016"
        }, {
            "img": "../pictures/Tyco.png",
            "company": "Tyco Safety Products",
            "title": "Concepteur logiciel - Stagiaire",
            "timespan": "Été 2015"
        }];

        template.scolarships = [{
            "img": "../pictures/Udes.png",
            "institution": "Université de Sherbrooke",
            "formation": "Génie informatique",
            "timespan": "Automne 2014 à Automne 2018"
        }, {
            "img": "../pictures/Cegep.png",
            "institution": "Cégep de Sherbrooke",
            "formation": "Sciences informatiques et mathématiques",
            "timespan": "Automne 2011 à Automne 2013"
        }];

        

    })
}