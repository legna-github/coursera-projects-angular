(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchItems = "";

  $scope.outputMesssage = "";

  $scope.displayList = function() {
      if($scope.lunchItems) {
        var counter = $scope.lunchItems.split(",").filter(ignoreEmptyItes).length;
        if(counter > 0) {
          if(counter > 3) {
            $scope.outputMesssage =  "Too much!";
          }
          else {
            $scope.outputMesssage =  "Enjoy!";
          }
          return;
        }
      }
      $scope.outputMesssage =  "Please enter data first";
  }
  var ignoreEmptyItes = function(item) {
    return item.trim().length > 0;
  }
};

})();
