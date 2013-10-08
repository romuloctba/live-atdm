var app = angular.module("atendapp", ["firebase"]);
      function MyController($scope, angularFire, angularFireAuth) {
//Login e Logout
      	$scope.login = function() {
  angularFireAuth.login("facebook");
};
$scope.logout = function() {
  angularFireAuth.logout();
};

        var ref = new Firebase("https://alfapixteste.firebaseio.com/");
        $scope.messages = [];
        angularFireAuth.initialize(ref, {scope: $scope, name: "user"});
        angularFire(ref, $scope, "messages");
        $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          $scope.messages.push({idusr: $scope.user.id, from: $scope.user.name, body: $scope.msg});
          $scope.msg = "";
        };
      }