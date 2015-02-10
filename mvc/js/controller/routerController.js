MyRouterDemo.controller('MyFriendsController', function($scope, friendFactory) {

    $scope.friends = [];

    function init(){
      $scope.friends =  friendFactory.getData();
    }

    init();

    // var $scope.friendSize = $scope.friends.length;
    var friendSize = $scope.friends.length;
    $scope.addFriend = function() {
        //console.log($scope.newFriend);
        //alert($scope.newFriendName);
        $scope.friends.push({id: ($scope.friends.length + 1), name: $scope.newFriend.name, title: $scope.newFriend.surname});
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

MyRouterDemo.controller('IndianStatesController', function($scope, indianStatesFactory) {

    $scope.states = [];

    function init(){
      $scope.states =   indianStatesFactory.getData();
    }

    init();

    // var $scope.statesSize = $scope.states.length;
    var statesSize = $scope.states.length;

    $scope.addStates = function() {
        $scope.states.unshift({id: ($scope.states.length + 1), name: $scope.newState.name, capital: $scope.newState.capital});
        $scope.newState.id = '';
        $scope.newState.name = '';
        $scope.newState.capital = '';
    }

    $scope.deleteStates = function(id) {

        console.log(id);
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

