app.controller('mainController', ['$scope', '$http', 'testRest', function($scope, $http, testRest) {
    $scope.click = function() {
         $http.get('http://localhost:8080/web-app/testRest').success(function(data) {
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
}])