app.controller('mainController', ['$scope', '$http','asd', 'indexService',
    function($scope, $http, asd, indexService) {

    $scope.click = function() {
         indexService.testRest().success(function(data) {
             $scope.person = data;
         });
    }

    $scope.click2 = function() {
        var person = {
            name: $scope.input,
            age: 0
        }
        indexService.testRestPost(person).success(function(data){
            console.log('success');
        });
        console.log();
        console.log($scope.input);
    }

    $scope.click3 = function() {
        indexService.testRestList().success(function(data){
            $scope.list = data;
        });
    }
}])

app.controller('template1Controller', ['$scope', function($scope){
    $scope.message = 'template1';
}]);

app.controller('template2Controller', ['$scope', function($scope){
    $scope.message = 'template2';
}])