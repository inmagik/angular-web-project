(function(){

"use strict";

angular.module('app.statesconfig', ['ui.router'])

.run(function($rootScope){

    //perform redirects based on login/logout here
    /*
    $rootScope.$on("app:logoutSuccess", function(){
        $state.go("app.login");
    })

    $rootScope.$on("app:loginSuccess", function(){
        $state.go("app.home");
    })
    */

})

.config(function($stateProvider, $urlRouterProvider){

    /* States config */

    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        template : '<ui-view></ui-view>',
        //controller : 'RootCtrl'
    })
    .state('app.login', {
        url: '/login',
        //templateUrl: 'templates/login.html',
        //controller: 'LoginCtrl',
        resolve: {
          
        }
    })
    .state('app.account', {
        url: '/account',
        templateUrl: 'templates/account.html',
        //controller: 'AccountCtrl',
        resolve: {
          
        },
        data: {
            permissions: {
                except: ['anonymous'],
                redirectTo: 'app.login'
            },

        },
    })
    
    .state('app.home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: function($scope){
            
        },
        resolve: {
          
        },
        /*
        data: {
            permissions: {
                only: ['admin']
            }
        },
        */
    })

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('app.home');
    });

})

})();