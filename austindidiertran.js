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
        }, {
            "icon": "folder",
            "name": "Projets"
        }, {
            "icon": "book",
            "name": "Blog"
        }];

        template.jobs = [{
            "id": 1,
            "img": "../pictures/Ubisoft.png",
            "company": "Ubisoft Divertissements",
            "title": "Programmeur outils - Stagiaire",
            "timespan": "Hiver 2016",
            "skills": ["Typescript","HTML","CSS","MongoDB"],
            "tasks": [
                "Aider au développement d'un outil servant à afficher les cartes des nombreux jeux de la compagnie"
    
                ]
        }
        , {
            "id" : 2,
            "img": "../pictures/Tyco.png",
            "company": "Tyco Safety Products",
            "title": "Concepteur logiciel - Stagiaire",
            "timespan": "Été 2015",
            "skills": ["MeteorJS", "MongoDB", "AngularJS", "Polymer", "Apache Cordova"],
            "tasks": [
                "Développer une application web pouvant monitorer les différentes alarmes",
                "Développer un serveur qui gère les requêtes de nombreux panneaux",
                "Développer une application mobile pouvant observer les différentes alarmes",
                "Gérer les notifications pushs à l'extérieur de l'application, autant sur iOS qu'Android",
                "Écrire différents scripts afin de préparer l'environnement de développement des futurs stagiaires"
                ]
        }
        ];

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