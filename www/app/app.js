(function () {
    'use strict';

    angular.module('eliteApp', [
        'ionic', 'angular-cache', 'uiGmapgoogle-maps'
    ])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove t his to show the accessory bar above for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    abstract: true,
                    url: '/home',
                    templateUrl: 'app/home/home.html'
                })
                .state('home.leagues', {
                    url: '/leagues',
                    views: {
                        'tab-leagues': {
                            templateUrl: 'app/home/leagues.html',
                            controller: 'LeaguesController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('home.myteams', {
                    url: '/myteams',
                    views: {
                        'tab-myteams': {
                            templateUrl: 'app/home/myteams.html',
                            controller: 'MyTeamsController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'app/layout/menu-layout.html'
                })
                .state('app.teams', {
                    url: '/teams',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/teams/teams.html',
                            controller: 'TeamsController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.team-detail', {
                    url: '/teams/:id',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/teams/team-detail.html',
                            controller: 'TeamDetailController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.game', {
                    url: '/game/:id',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/game/game.html',
                            controller: 'GameController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.standings', {
                    url: '/standings',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/standings/standings.html',
                            controller: 'StandingsController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.locations', {
                    url: '/locations',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/locations/locations.html',
                            controller: 'LocationsController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.location-map', {
                    url: '/location-map/:id',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/locations/location-map.html',
                            controller: 'LocationMapController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('app.rules', {
                    url: '/rules',
                    views: {
                        'mainContent': {
                            templateUrl: 'app/rules/rules.html',
                            controller: 'RulesController',
                            controllerAs:'vm'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/home/leagues');
        });
})();