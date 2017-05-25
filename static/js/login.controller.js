/**
 * Created by sumeesh on 25/05/17.
 */

(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .controller('LoginController',
        ['$scope', '$http', '$location', LoginController]);

    function LoginController($scope, $http, $location) {
        $scope.login = function () {
            console.log("Inside login func");
            $http.post('/auth_api/login/', $scope.user)
                .then(function () {
                    $location.url('/');
                },
                function () {
                    $scope.login_error = "Invalid Username/Password Combination";
                });
        }
    }
})();