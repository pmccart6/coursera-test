(function() {

    angular.module('MenuApp')
    .component('items',{
        templateUrl:'/templates/items.html',
        controller:'ItemsController as itCtrl',
        params:{
            items: '<'
        }
    });

}());