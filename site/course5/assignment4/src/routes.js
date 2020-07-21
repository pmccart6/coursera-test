(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise = ('/');

    $stateProvider

    .state('home',{
        url:'/',
        templateUrl:'templates/home.html'
    })

    .state('cats',{
        url:'cats',
        templateUrl:'templates/categories.html',
        controller: 'CategoriesController as ctrl',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('specIt',{
        url: '/specIt/{{itemId}}',
        templateUrl: 'templates/item.html',
        controller: 'itemsController as ctrl',
        resolve: {
            items: '<'                
        }
    })
}

}());