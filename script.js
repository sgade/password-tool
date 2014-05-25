(function() {
  function runAsync(fn) {
    setTimeout(fn, 0);
  }
  
  var passwordTool = angular.module("passwordTool", []);
  
  passwordTool.controller("passwordStrengthController", function($scope) {
    // startup values:
    $scope.estimate = {
      calc_time: "0",
      score: 0,
      crack_time: 0,
      crack_time_display: "unknown",
      entropy: 0
    };
    
    $scope.password = "";
    $scope.onPasswordChange = function() {
      runAsync(function() {
        $scope.estimate = zxcvbn($scope.password);
      
        $scope.barSizeClass = "score-" + $scope.estimate.score;
      });
    };
  });
}());
