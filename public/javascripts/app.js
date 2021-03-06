var app = window.angular.module('app',[]);

app.controller('mainCtrl',mainCtrl);

function mainCtrl($scope, $http){
    $scope.persons = [];
    $scope.voted = [];

    //get persons from back-end
    $scope.getAll = function(){
        return $http.get('/persons')
            .then(function(data){
                angular.copy(data.data,$scope.persons);
            });
    }
    $scope.getAll();

    $scope.addPerson = function(){
        var newPerson = {
            name: $scope.name,
            votes: 0,
            selected:0
        };
        $scope.name = '';

        //post person to server
        $http.post('/persons',newPerson)
            .then(function(data){
                console.log("POSTED");
                $scope.persons.push(newPerson);
            })
    }

    $scope.vote = function(){
        $scope.voted = [];
        //report selected canidates
        for (let i = 0; i < $scope.persons.length; i++){
            if ($scope.persons[i].selected == true){
                $scope.voted.push($scope.persons[i]);
            }
        }
        //send to server

        for (let i = 0; i < $scope.voted.length; i++){
            $http.put("/persons/" + $scope.voted[i]._id + "/upvote")
                .then(function(data){
                    console.log("Vote Successful!");
                })
        }
    }

    $scope.delete = function(person){
        $http.delete("/persons/" + person._id)
            .then(function(data){
                $scope.persons.splice($scope.persons.indexOf(person), 1);
                console.log("deleted!");
            })
    }

}