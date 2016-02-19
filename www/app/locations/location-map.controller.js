(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LocationMapController', LocationMapController);

    LocationMapController.$inject = ['$stateParams', 'EliteService'];
    function LocationMapController($stateParams, EliteService) {
        var vm = this;

        vm.locationId = Number($stateParams.id);

        vm.map = {
            center: {
                latitude: 38.897677,
                longitude: -77.036530
            },
            zoom: 12
        };
        vm.marker = {};

        EliteService.getLeagueData().then(function (data) {
            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.marker = {
                idKey: vm.locationId,
                coords: {
                    latitude: vm.location.latitude,
                    longitude: vm.location.longitude,
                },
                label: {
                    labelClass: 'marker-labels',
                    labelAnchor: '10 -8',
                    labelContent: vm.location.name + "<br/>(Tap for directions)"
                }
            }
            // vm.idKey = vm.locationId;
            // vm.coords = {
            // };

            // vm.marker = {
            // };

            vm.map.center.latitude = vm.location.latitude;
            vm.map.center.longitude = vm.location.longitude;
        });

        vm.locationClicked = function (marker) {
            window.location = "geo:" + marker.coords.latitude + "," + marker.coords.longitude;
        };
    }
})();