(function () {
"use strict";

angular.module('common')
.service('SignUpServce', SignUpServce);


SignUpServce.$inject = ['$http', 'ApiPath'];
function SignUpServce($http, ApiPath) {
  var service = this;

  service.getMenuItem = function (category) {
    var config = {};
    if (category) {
      config.params = {'short_name': category};
    }

    console.log("begin here");

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();