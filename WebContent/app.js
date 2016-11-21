var app = angular.module("myroute", ["ngRoute","ngCookies","myApp","forumApp","registerApp","app"])
.run(run);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "Home.html",
        controller:'LoginController',
    	controllerAs:'vm'
    })
    .when("/blog", {
        templateUrl : "Blog/blog.html",
        controller :'blogcntrl'
       
    })
    .when("/forum", {
        templateUrl : "Forum/Forum.html",
        controller :  'forumctrl'
   
    })
    .when("/register",{
    	templateUrl: "Users/register.html",
    	controller: "userctrl"
    })
    .when("/login",{
    	templateUrl:"Login/Login.html",
    	controller:'LoginController',
    	controllerAs:'vm'
    });
  
        });
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register','/home']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}