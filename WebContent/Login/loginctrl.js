var app = angular.module('app',[]);
 app.controller('LoginController', LoginController);

    LoginController.$inject = ['$location',  'AuthenticationService'];
 
    function LoginController($location, AuthenticationService) {
	 console.log("login controller")
        var vm = this;
 
        vm.login = login;
        vm.logout=logout;
 
       /* (function initController() {
        	console.log("reset")
            // reset login status
            AuthenticationService.ClearCredentials();
        })();*/
 
        function login() {
           
            console.log("login func")
             AuthenticationService.Login(vm.username, vm.password, function (response) {	 
                if (response.success) {
                	console.log("setcred")
                	AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                  
                	
                } else {
                	console.log("error")
                  //  FlashService.Error(response.message);
                	
                    alert("error")
                }
            });
        };
        function logout(){
        	console.log("logout")
        	AuthenticationService.Logout(function(response){
        		if(response.success){
        			AuthenticationService.ClearCredentials();
        			$location.path('/home');
        			
        		}else{
        			alert("error")
        		}
        	})
        }
    }