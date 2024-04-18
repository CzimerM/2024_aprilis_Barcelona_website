let app = angular.module("barcelonaApp", []);

app.controller("barcelonaCtrl", function ($scope, $http, $filter) {
    $scope.attractions = undefined;

    $http.get("database_content.json").then(res => $scope.attractions = res.data);
    
});