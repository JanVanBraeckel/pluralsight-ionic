(function () {
    'use strict';

    angular
        .module('eliteApp')
        .directive('markdown', Markdown);

    // Markdown.$inject = [];
    function Markdown() {
        // Usage:
        // <div data-markdown="{{vm.content}}"></div>

        var converter = new showdown.Converter();

        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('markdown', function (data) {
                var markup = converter.makeHtml(data);
                element.html(markup);
            });
        }
    }
})();