(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var tbc = this;

        tbc.items = ShoppingListCheckOffService.getBuyItems();

        tbc.buyItem = function (itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
        };

        tbc.emptyList = function () {
            if (tbc.items.length === 0) return "Nothing bought yet"
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var abc = this;

        abc.items = ShoppingListCheckOffService.getBoughtItems();

        abc.emptyList = function () {
            if (abc.items.length === 0) return "Nothing bought yet"
        }
    };

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems = [{quantity:10, name:"cookies"}, {quantity:10, name:"cookies"},
            {quantity:10, name:"cookies"},{quantity:10, name:"cookies"},{quantity:10, name:"cookies"}];
        var boughtItems = [];

        service.buyItem = function (itemIndex){
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex,1);
        };

        service.getBoughtItems = function () {
            return boughtItems
        };

        service.getBuyItems = function () {
            return toBuyItems
        };

    };

}())