(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('GameController', GameController);

    GameController.$inject = ['$stateParams', 'EliteService'];
    function GameController($stateParams, EliteService) {
        var vm = this;

        var gameId = Number($stateParams.id);
        EliteService.getLeagueData().then(function (data) {
            vm.game = _.find(data.games, { "id": gameId });
        });
    }
})();