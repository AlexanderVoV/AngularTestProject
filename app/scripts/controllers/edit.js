'use strict';

angular.module('testProjectApp')
    .controller('EditCtrl', function ($scope, Greeting) {
        $scope.greeting = Greeting;

        $scope.text = "Some text";
});