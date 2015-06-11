var app = angular.module('index', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/template1', {templateUrl:'template1.jsp', controller: 'template1Controller'}).
        when('/template2', {templateUrl:'template2.jsp', controller: 'template2Controller'}).
        otherwise({redirectTo: '/template1'})
}]);