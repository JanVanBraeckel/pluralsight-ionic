(function() {
'use strict';

    angular
        .module('eliteApp')
        .controller('MyTeamsController', MyTeamsController);

    MyTeamsController.$inject = ['$state', 'MyTeamsService', 'EliteService'];
    function MyTeamsController($state, MyTeamsService, EliteService) {
        var vm = this;

        vm.myTeams = MyTeamsService.getFollowedTeams();

        vm.goToTeam = function(team){
            EliteService.setLeagueId(team.leagueId);
            $state.go("app.team-detail", { id: team.id });
        };
    };
})();