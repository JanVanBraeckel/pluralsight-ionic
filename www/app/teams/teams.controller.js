(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['EliteService', '$scope'];
    function TeamsController(EliteService, $scope) {
        var vm = this;

        vm.loadList = function (forceRefresh) {
            EliteService.getLeagueData(forceRefresh).then(function (data) {
                vm.teams = data.teams;
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        vm.loadList(false);
    };
})();