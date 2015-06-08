app.factory('testRest', ['$http', function($http) {
  return $http.get('http://localhost:8080/web-app/testRest')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);