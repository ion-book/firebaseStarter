'Use Strict';
angular.module('App').controller('loginController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$log, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    $log.log("Enviado");
    if(angular.isDefined(user)){
    Utils.show();
    Auth.login(user)
      .then(function(authData) {
      $log.log("id del usuario:" + JSON.stringify(authData));

      ref.child('profile').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
        $log.log(snapshot.key());
        userkey = snapshot.key();
        var obj = $firebaseObject(ref.child('profile').child(userkey));

        obj.$loaded()
          .then(function(data) {
            //console.log(data === obj); // true
            //console.log(obj.email);
            $log.log("profile " + angular.toJson(obj));
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;
            $localStorage.profile = obj;
              Utils.hide();
              $state.go('home');
              $log.log("Starter page","Home");

          })
          .catch(function(error) {
            $log.error("Error:", error);
          });
      });

      }, function(err) {
        Utils.hide();
         Utils.errMessage(err);
      });
    }
  };
  
  $scope.loginWithGoogle =  function(){
    
ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    $log.log("Login Failed!", error);
  } else {
    $log.log("Authenticated successfully with payload:", authData);
    $state.go('home');
  }
  }
  );
  };
  
  $scope.loginWithFacebook =  function(){
    
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    $log.log("Login Failed!", error);
  } else {
    $log.log("Authenticated successfully with payload:", authData);
    $state.go('home');
  }
  }
  );
  };
  
  $scope.loginWithTwitter =  function(){
    
ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    $log.log("Login Failed!", error);
  } else {
    $log.log("Authenticated successfully with payload:", authData);
    $state.go('home');
  }
  }
  );
  };


});
