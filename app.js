var app = angular.module("atendapp", ["firebase"]);
      function MyController($scope, angularFire, angularFireAuth) {
//Login e Logout
		$scope.login = function() { angularFireAuth.login("facebook", {rememberMe: true,scope: 'email,user_likes'});};
		$scope.logout = function() { angularFireAuth.logout();};
		$scope.$on("angularFireAuth:login", function(evt, user) {
               $scope.meuid =user.id;
               var ref2 = new Firebase("https://alfapixteste.firebaseio.com/app/users/" + user.id);
               
});
        
        var ref = new Firebase("https://alfapixteste.firebaseio.com/");
        var auth = new FirebaseSimpleLogin(ref, function(error, user) {
       if(user){
        angularFireAuth.initialize(ref, {scope: $scope, name: "user"});
        $scope.messages = [];
        var trueref = ref.child("users").child(user.id);
        angularFire(trueref, $scope, "messages");
        $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          alert($scope.meuid)
          $scope.messages.push({idusr: $scope.user.id, from: $scope.user.first_name, body: $scope.msg});
          $scope.msg = "";
        };
       }
        });
      }