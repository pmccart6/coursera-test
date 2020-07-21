(function(){

angular.module('data')
.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http', '$q']
function MenuDataService($http, $q){

    var mdServ = this;

    mdServ.getAllCategories = function () {

        var promise = $http({
            method:"GET",
            url:("https://davids-restaurant.herokuapp.com/categories.json")
        }).then(function (result) {
            console.log(result)
            items = result.data;
            console.log(items);
            return items;
        });

        return promise;

    }

    mdServ.getItemsForCategory = function (categoryShortName) {
        return $http({
            method: "GET",
            url:("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
        });
    }

}

}());