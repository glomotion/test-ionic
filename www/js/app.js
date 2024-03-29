// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


angular.module('starter.directives', [])

.directive('stacker', function() {
  return {
    restrict: 'ECMA',
    link: function(scope, element, attrs) {   
      $($(element).children()).stacker(); 
    }
  };

});
