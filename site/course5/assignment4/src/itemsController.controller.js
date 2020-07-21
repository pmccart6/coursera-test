(function(){

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['MenuDataService', 'items']
    function ItemsController(MenuDataService){
        var itemCtrl = this;

        itemCtrl.items = items;
        // itemCtrl.$onInit = function () {
        //     var promise = MenuDataService.getItemsForCategory()
            
        //     promise.then(function (result) {
        //         itemCtrl.items = result;
        //     })
        // }
    }

}());