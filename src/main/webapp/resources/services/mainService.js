app.factory('indexService', ['$http', function($http) {
    return {
       testRest: function() {
          return $http.get('/web-app/testRest')
                      .success(function(data) {
                        return data;
                      })
                      .error(function(err) {
                        return err;
                      });
       },
       testRestList: function() {
          return $http.get('/web-app/testRestList')
                     .success(function(data) {
                       return data;
                     })
                     .error(function(err) {
                       return err;
                     });
       },
       testRestPost: function(person) {
          return $http.post('/web-app/testRestPost', person)
                    .success(function(data) {
                      return data;
                    })
                    .error(function(err) {
                      return err;
                    });
       }
    }
}]);

app.factory('asd', ['$resource', function($resource) {
    return {
        testRest: $resource('/web-app/testRest', {}, { go: { method:'GET' ,params:{}, isArray: false }}),
        testRestList: $resource('/web-app/testRestList', {}, { go: { method:'GET', params:{}, isArray: false }}),
        testRestPost: $resource('/web-app/testRestPost', {}, { go: { method:'POST', isArray: false }})
    };
}]);