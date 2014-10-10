function servicesCtl($scope, $http) {
    
    $scope.all = function () {
        $http.get("/databases")
        .success($scope.showDatabases);
    }

    $scope.showDatabases = function (response) {
        $scope.databases = response;
    };
	$scope.all();
	
	
	
	$scope.urlOptions = [
      {name:'Protein', value:'protein'},
      {name:'Nucleotide', value:'nucore'},
    ];
	$scope.selectVal =$scope.urlOptions;
}