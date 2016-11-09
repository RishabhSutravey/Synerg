var app = angular.module('forumApp',[]);
app.controller('forumctrl', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8083/CollabServer';
	$scope.getAllForum= function() {
		console.log("get all forum")
		$http({
			method : 'GET',
			url : BASE_URL+'/forum'
		}).success(function(data, status, headers, config) {
			$scope.forums=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	$scope.submit = function() {
		$scope.forum = {	
			name : $scope.name,
			topic:$scope.topic,
			userid:$scope.userid,
			doc: $scope.doc,
			description:$scope.description
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createforum',
			data : $scope.forum
		}).success(function(data, status, headers, config) {
			$scope.name='';
			$scope.topic='';
			$scope.userid='';
			$scope.doc='';
			$scope.description='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	$scope.deleteforum=function(id){
		$http({
			method:'DELETE',
		url:BASE_URL+'/deleteforum/'+id
		}).success(function(data,status,headers,config){
			$scope.getAllForum();
		})
	};
}]);