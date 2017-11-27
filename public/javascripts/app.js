var app = window.angular.module('app',[]);

app.controller('mainCtrl',mainCtrl);

function mainCtrl($scope, $http){
    $scope.test = "HELLO WORLD!";

    $scope.persons = [];
    $scope.persons.push({name:"Fred", votes:0});
    $scope.persons.push({name:"Bob", votes:2});
    $scope.persons.push({name:"Me", votes:1});

    $scope.addPerson = function(){
        $scope.persons.push({
            name: $scope.name,
            votes: 0
        });
    }
}