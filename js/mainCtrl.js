//Javascript file that creates our main Angular controller



//assign an array of your friends to a scope variable called friends

angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ['Gary', 'Jerry', 'Larry', 'Perry', 'Mary'];

    $scope.addFriend = (newFriend)=> {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend = ''//empty string '' deletes typed name from the input field  
    }




});