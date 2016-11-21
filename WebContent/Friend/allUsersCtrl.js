var app=angular.module('allusers',[]);
app.controller('alluserctrl',['$scope','$http',function($scope,$http){
	var BASE_URL = 'http://localhost:8083/CollabServer';
	$scope.getAllUsers= function() {
		console.log("get all users")
		$http({
			method : 'GET',
			url : BASE_URL+'/users'
		}).success(function(data, status, headers, config) {
			$scope.users=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	
	$scope.sendrequest=function(fid){
		$http({
			method:'POST',
			url:BASE_URL+'/sendrequest/'+fid
		}).success(function(data,status,headers,config){
			
		}).error(function(data,status,headers,config){
			alert("Error");
		})
	}
}])
