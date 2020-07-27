(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    
    UserService.$inject = ['$http', 'ApiPath'];
    function UserService($http, ApiPath) {
      var service = this;
    
      service.user = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        favMenuItem:""
    }

    service.saveUser = function (obj){
        service.user = {
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            phoneNum: obj.phoneNum,
            favMenuItem:obj.favMenuItem
        }
    }

    service.getUser = function (){
        return service.user;
    }
    
    }
    
    
    
    })();