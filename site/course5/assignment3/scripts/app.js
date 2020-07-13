(function(){
'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItemsDir.html',
            scope:{
                items:'<',
                onRemove:'&'
            },
            controller: 'NarrowItDownController as ctrl',
            bindToController: true,
            restrict:'E'
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var ctrl = this;

        ctrl.clickedButton = false;

        ctrl.searchTerm = "";
       
        ctrl.searchMenu = function () {

            ctrl.clickedButton = true;

            if (ctrl.searchTerm == ""){
                ctrl.found = [];
                return;
            }

            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.toLowerCase());

            promise.then(function (response){
                ctrl.found = response;
            });
        };

        ctrl.removeItem = function(index){
            ctrl.found.splice(index,1);
        };

    };

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http){
        var mss = this;

        mss.getMatchedMenuItems = function (searchTerm) {
            
            return $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (result) {
                var foundItems = result.data.menu_items;

                foundItems = foundItems.filter(function(value, index, arr){
                    return value.description.toLowerCase().indexOf(searchTerm) != -1
                });

                return foundItems;
            });
        }
    };

}())