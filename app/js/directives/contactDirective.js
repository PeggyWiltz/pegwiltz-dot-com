'use strict';

module.exports = function(app) {
  app.directive('mainDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/contact-template.html',
      replace: true
    }
  });
};
