(function() {
  var passwordTool = angular.module("passwordTool", []);
  
  passwordTool.controller("passwordStrengthController", function($scope) {
    $scope.password = "";
    $scope.onPasswordChange = function() {
      $scope.estimate = zxcvbn($scope.password);
      
      $scope.barSizeClass = "score-" + $scope.estimate.score;
    };
    
    $scope.inputPasswordType = "";
    $scope.onShowPaswordChange = function() {
      $scope.inputPasswordType = ( $scope.showPassword ) ? "text" : "password";
    };
  });
}());
