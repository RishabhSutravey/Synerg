var app = angular.module('registerApp',[]);
app.controller('userctrl', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8083/CollabServer';
	$scope.submit = function() {
		
		$scope.users = {	
			
			username : $scope.username,
			mail:$scope.mail,
			password:$scope.password,
			mobile : $scope.mobile,
			dob:$scope.dob,
			role:$scope.role,
			address:$scope.address,
			gender:$scope.gender
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.mail='';
			$scope.password='';
			$scope.mobile='';
			$scope.dob='';
			$scope.role='';
			$scope.address='';
			$scope.gender='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
}]);