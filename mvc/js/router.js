var MyRouterDemo = angular.module('myRouterApp', ['ngRoute', 'ngResource']);

MyRouterDemo.config(function($routeProvider) {

    $routeProvider
            .when('/',
            {
                controller: 'MyFriendsController',
                templateUrl: '../templates/friend.html'

            })
            .when('/states',
            {
                controller: 'IndianStatesController',
                templateUrl: '../templates/states.html'

            })
            .otherwise({reditectTo: '/'});

});

