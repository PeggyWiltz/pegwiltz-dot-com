'use strict';

module.exports = function(app) {
  app.directive('mainDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/main-template.html',
      replace: true
    }
  });
};
