app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
    
    $scope.name = 'tone';
    
    shows.success(function(data) {
      $scope.shows = data;
    });
}]);