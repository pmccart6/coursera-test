(function (){
    'use strict';

    angular.module('lunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    //LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "list comma separated dishes you usually have for lunch";
        $scope.message = "";
        
        $scope.parseLunch = function (csvLunchItems) {
            var LunchArr = csvLunchItems.split(',');
            console.log(LunchArr.length);
            console.log(LunchArr);            
            if ($scope.lunch === "") {
                return 0;
            }
            else if(LunchArr.length <= 3) {
                return 1;
            }
            else return -1;
        }

        $scope.displayMessage = function () {
            return $scope.message
        }

        $scope.checkLunch = function () {
            if ($scope.parseLunch($scope.lunch) == 1) $scope.message = "Enjoy!"
            else if ($scope.parseLunch($scope.lunch) == 0) $scope.message = "Please enter data first"
            else $scope.message = "Too much!"
        }

    }

}

)();