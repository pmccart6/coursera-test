(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['SignUpServce', 'UserService']
    function SignUpController(SignUpServce, UserService) {
      var signUp = this;
      
      signUp.item = {
          firstName: "",
          lastName: "",
          email: "",
          phoneNum: "",
          favMenuItem:""
      }

      signUp.completed = false;

      signUp.favItemNotFound = false;

      signUp.go = function () {
        var favItem = SignUpServce.getMenuItem(signUp.item.favMenuItem);

        console.log(favItem);

        UserService.saveUser(signUp.item);

      }
    }
    
    
    })();