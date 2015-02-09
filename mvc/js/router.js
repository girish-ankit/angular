var MyRouterDemo = angular.module('myRouterApp', ['ngRoute']);

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

MyRouterDemo.controller('MyFriendsController', function($scope) {

    $scope.friends = [
        {id: 1, name: 'ramesh', title: 'singh'},
        {id: 2, name: 'shyam', title: 'thakur'},
        {id: 3, name: 'mohan', title: 'kumar'}
    ]

    // var $scope.friendSize = $scope.friends.length;
    var friendSize = $scope.friends.length;
    $scope.addFriend = function() {
        //console.log($scope.newFriend);
        //alert($scope.newFriendName);
        $scope.friends.push({id: (friendSize + 1), name: $scope.newFriend.name, title: $scope.newFriend.surname});
        $scope.newFriend.id = '';
        $scope.newFriend.name = '';
        $scope.newFriend.surname = ''
    }

    $scope.deleteFriend = function(id) {
        //console.log($scope.friends.length+'---'+id);
        //console.log($scope.friends);
        for (var i = 0; i < ($scope.friends.length); i++) {
            if ($scope.friends[i].id == id) {
                $scope.friends.splice(i, 1);
            }

        }


    }

});

MyRouterDemo.controller('IndianStatesController', function($scope) {

    $scope.states = [
        {id: 1, name: 'Bihar', capital: 'patna'},
        {id: 2, name: 'Uttar Pradesh', capital: 'Lucknow'},
        {id: 3, name: 'Delhi', capital: 'New Delhi'},
        {id: 4, name: 'Jharkhand', capital: 'Ranchi'},
        {id: 5, name: 'Jammu and kashmir', capital: 'Sri Nagar'},
        {id: 6, name: 'Rajsthan', capital: 'Jaipur'}
    ]

    // var $scope.statesSize = $scope.states.length;
    var statesSize = $scope.states.length;

    $scope.addStates = function() {
        $scope.states.unshift({id: ($scope.statesSize + 1), name: $scope.newState.name, capital: $scope.newState.capital});
        $scope.newState.id = '';
        $scope.newState.name = '';
        $scope.newState.capital = '';
    }

    $scope.deleteStates = function(id) {

        // console.log(id);
        // console.log($scope.states[id-1].id);
        // console.log('----');
        //console.log($scope.states[i].id);

        for (var i = 0; i < ($scope.states.length); i++) {

            if ($scope.states[i].id == id) {
                $scope.states.splice(i, 1);
            }
        }



    }

});

