(function () {
    "use strict";
    
    angular.module('public')
    .controller('UserInfoController', UserInfoController);
    
    UserInfoController.$inject = ['UserService']
    function UserInfoController(UserService) {
      var usInfo = this;
      
      usInfo.item = UserService.getUser();

    }
    
    
    })();