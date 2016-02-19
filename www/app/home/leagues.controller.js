(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LeaguesController', LeaguesController);

    LeaguesController.$inject = ['EliteService', '$state'];
    function LeaguesController(EliteService, $state) {
        var vm = this;

        EliteService.getLeagues().then(function (data) {
            vm.leagues = data;
        });

        vm.selectLeague = function (id) {
            EliteService.setLeagueId(id);
            $state.go("app.teams");
        }
    }
})();