'Use Strict';
angular.module('App').controller('profileController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, $log, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
 $scope.user = angular.fromJson($localStorage.profile);
 $log.log("User:", $localStorage.email);

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  };

}
);
