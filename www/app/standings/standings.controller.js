(function() {
'use strict';

    angular
        .module('eliteApp')
        .controller('StandingsController', StandingsController);

    StandingsController.$inject = ['EliteService'];
    function StandingsController(EliteService) {
        var vm = this;

        EliteService.getLeagueData().then(function (data) {
            vm.standings = data.standings;
        });
    }
})();