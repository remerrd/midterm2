var app = window.angular.module('app',[]);

app.controller('mainCtrl',mainCtrl);

function mainCtrl($scope, $http){
    $scope.test = "HELLO WORLD!";

    $scope.persons = [];
    $scope.persons.push({name:"Fred", votes:0, selected:0});
    $scope.persons.push({name:"Bob", votes:2, selected:0});
    $scope.persons.push({name:"Me", votes:1, selected:0});
    $scope.voted = [];

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
        console.log("in vote")
        for (let i = 0; i < $scope.persons.length; i++){
            console.log($scope.persons[i]);
            if ($scope.persons.selected == true){
                console.log("Pushed");
                $scope.voted.push($scope.persons[i])
            }
        }
        console.log($scope.voted);
    }
}