app.controller('mainController', ['$scope', '$http', 'testRest', function($scope, $http, testRest) {
    $scope.click = function() {
         $http.get('/web-app/testRest').success(function(data) {
              console.log(data);
              $scope.person = data;
         });
    }

    $scope.click2 = function() {
        var person = {
            name: $scope.input,
            age: 0
        }
        $http.post('/web-app/testRestPost', person).
        success(function(data, status, headers, config) {
            console.log('success');
        });
        console.log($scope.input);
    }

    $scope.click3 = function() {
        $http.get('/web-app/testRestList').success(function(data){
            $scope.list = data;
        });
    }
}])