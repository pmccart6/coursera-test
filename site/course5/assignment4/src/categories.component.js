(function() {

    angular.module('MenuApp')
    .component('categories',{
        templateUrl:'/templates/categories.html',
        controller:'CategoriesController as ctrl',
        params:{
            items:'<'
        }
    });

}());