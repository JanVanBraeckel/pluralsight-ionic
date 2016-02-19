(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('RulesController', RulesController);

    RulesController.$inject = ['EliteService'];
    function RulesController(EliteService) {
        var vm = this;

        EliteService.getLeagueData().then(function (data) {
            vm.mainContent = data.league.rulesScreen;
        });
    }
})();