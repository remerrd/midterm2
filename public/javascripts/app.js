var app = window.angular.module('app',[]);

app.controller('mainCtrl',mainCtrl);

function mainCtrl($scope, $http){
    $scope.persons = [];
    $scope.voted = [];

    //get persons from back-end
    $scope.getAll = function(){
        return $http.get('/persons').success(function(data){
                console.log("GOT INFO");
                console.log(data);
                angular.copy(data,$scope.persons);
            });
    }
    $scope.getAll();



    $scope.addPerson = function(){
        $scope.persons.push({
            name: $scope.name,
            votes: 0,
            selected:0
        });
        $scope.name = '';
    }

    $scope.vote = function(){
        $scope.voted = [];
        //report selected canidates
        for (let i = 0; i < $scope.persons.length; i++){
            if ($scope.persons[i].selected == true){
                $scope.voted.push($scope.persons[i])
            }
        }
        //send to server
    }
}