(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LocationsController', LocationsController);

    LocationsController.$inject = ['EliteService'];
    function LocationsController(EliteService) {
        var vm = this;

        EliteService.getLeagueData().then(function (data) {
            vm.locations = data.locations;
        });
    }
})();