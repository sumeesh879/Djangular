/**
 * Created by sumeesh on 24/05/17.
 */

(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .directive('scrumboardCard', cardDirective);

    function cardDirective() {
        return {
            templateUrl: 'static/html/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {

                var url = '/scrumboard/cards/' + $scope.card.id + '/';

                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.card
                    );
                };

                $scope.delete = function () {
                    $http.delete(url).then(
                        function () {
                            var cards = $scope.list.cards;
                            cards.splice(
                                cards.indexOf($scope.card),
                                1
                            );
                        }
                    )
                };

                $scope.modelOptions = {
                    // this will wait 500ms after an update occur, so that key strokes are not updated regularly
                    debounce: 500
                };

            }]
        }
    }
})();