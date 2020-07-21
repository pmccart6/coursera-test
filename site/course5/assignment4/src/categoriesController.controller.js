(function(){
'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController)

    CategoriesController.$inject = ['MenuDataService', 'items']
    function CategoriesController(items){
        var catCtrl = this;

        console.log(items);

        catCtrl.items = items;
    }

}());