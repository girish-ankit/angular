var myFirstModule = angular.module('myFrirstApp', []);

myFirstModule.controller('SimpleController', function($scope) {

    $scope.friends = [
        {name: 'ramesh', title: 'singh'},
        {name: 'shyam', title: 'thakur'},
        {name: 'mohan', title: 'kumar'}
    ]

});