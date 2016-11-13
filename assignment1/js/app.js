(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchItems = "Yakov";

  $scope.outputMesssage = "";

  $scope.displayList = function() {
      if($scope.lunchItems) {
          if($scope.lunchItems.split(",").length > 3) {
            $scope.outputMesssage =  "Too much!";
          }
          else {
            $scope.outputMesssage =  "Enjoy!";
          }
      }
      else {
        $scope.outputMesssage =  "Please enter data first";
      }
  }
});

})();
