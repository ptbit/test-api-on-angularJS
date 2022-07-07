'use strict';
angular.module('cowList').
    component('cowList', {
        templateUrl: '/app/cow-list/cow-list.html',
        controller: function ($scope, $http) {
            $scope.startUrl = "/testapi.php?action=get_cows"
            $scope.URL = ''
            $scope.FC = '&filter_color='
            $scope.FCV = "0"
            $scope.FMAmin = '&filter_milk_avg_min='
            $scope.FMAminV = 0
            $scope.FMAmax = '&filter_milk_avg_max='
            $scope.FMAmaxV = 0
            $scope.OB = '&order_by='
            $scope.OBV = ''
            $scope.OD = '&order_dir='
            $scope.ODV = 'DESC'
            $scope.onPageCows = 0
            $scope.totalCows = 0
            $scope.P = "&page="
            $scope.PV = 0
            $scope.cowName = 'cow'
            $scope.sortUp = 'V'

            //COLORS
            let getColors = function () {
                $http.get('/testapi.php?action=get_colors').then(getColorsOK,getError)
                function getColorsOK (response) {
                    $scope.cowsColors = response.data
                    $scope.aColors = {}
                    $scope.aColors["All"] = "0"
                    for ( let key in $scope.cowsColors) {
                        $scope.aColors[$scope.cowsColors[key]] = key
                    }
                    // console.log('aColors=',$scope.aColors)
                }
                function getError (response) {$scope.cowName = 'Get Error Color'}
            }
            //End Colors
            
            getColors()
            // Create Url for Get request
            let getUrl = function(){
                if($scope.FCV == 0) {$scope.URL = $scope.startUrl}
                else if($scope.FCV == 'all') {
                    $scope.FCV = 0
                    $scope.URL = $scope.startUrl + $scope.FC + $scope.FCV}
                else {$scope.URL = $scope.startUrl + $scope.FC + $scope.FCV}
               if ($scope.FMAminV != 0){$scope.URL += $scope.FMAmin + $scope.FMAminV}
               if ($scope.FMAmaxV != 0){$scope.URL +=  $scope.FMAmax + $scope.FMAmaxV}
            //    if ($scope.OBV != 0){$scope.URL += $scope.OB + $scope.OBV}
               if ($scope.OBV!=""&&$scope.ODV=="DESC"){$scope.URL += $scope.OB + $scope.OBV + $scope.OD + $scope.ODV}
               if ($scope.OBV!=""&&$scope.ODV=="ASC") {$scope.URL+=$scope.OB+$scope.OBV}
               if ($scope.PV>0) {$scope.URL+=$scope.P+$scope.PV}
            }

            
            let zapros = function(gurl){
                $http.get(gurl).then(allOk, getError)
                function allOk(response,status) {
                    // console.log('DATA->',response.data);
                    $scope.onPageCows = response.data.on_page
                    $scope.totalCows = response.data.total
                    // console.log('onPageCows->',$scope.onPageCows);
                    // console.log('totalCows->',$scope.totalCows);
                    $scope.needPages = Math.ceil($scope.totalCows/$scope.onPageCows)
                    // console.log('needPages->',$scope.needPages);
                    console.log(response.data.data);
                    $scope.cows = response.data.data
                }
                function getError(response, status){
                    $scope.cowName = 'Get Error'
                }
            }
            getUrl()
            zapros($scope.URL)
           
            //FILTER COLORS
            $scope.selectColor = function(){
                $scope.PV = 0
                getUrl()
                zapros($scope.URL)
            }
            $scope.FMAminVin = function(){
                getUrl()
                zapros($scope.URL)
            }
            $scope.FMAmaxVin = function(){
                getUrl()
                zapros($scope.URL)
            }
            // Order By ****
            $scope.OBVname = function(){
                $scope.OBV = 'name'
                if ($scope.ODV=="ASC"){$scope.ODV="DESC";}
                else if ($scope.ODV=="DESC"){$scope.ODV="ASC";}
                getUrl()
                zapros($scope.URL)
            }
            $scope.OBVbd = function(){
                $scope.OBV = 'bdate'
                if ($scope.ODV=="ASC"){$scope.ODV="DESC";}
                else if ($scope.ODV=="DESC"){$scope.ODV="ASC";}
                getUrl()
                zapros($scope.URL)
            }
            $scope.OBVcolor = function(){
                $scope.OBV = 'color'
                if ($scope.ODV=="ASC"){$scope.ODV="DESC";}
                else if ($scope.ODV=="DESC"){$scope.ODV="ASC";}
                getUrl()
                zapros($scope.URL)
            }
            $scope.OBVma = function(){
                $scope.OBV = 'milk_avg'
                if ($scope.ODV=="ASC"){$scope.ODV="DESC";}
                else if ($scope.ODV=="DESC"){$scope.ODV="ASC";}
                getUrl()
                zapros($scope.URL)
            }
            $scope.OBVage = function(){
                $scope.OBV = 'age'
                if ($scope.ODV=="ASC"){$scope.ODV="DESC";}
                else if ($scope.ODV=="DESC"){$scope.ODV="ASC";}
                getUrl()
                zapros($scope.URL)
            }
            $scope.PVin = function(n){
                $scope.PV = n-1
                console.log('click',n)
                getUrl()
                zapros($scope.URL)
            }

        $scope.colorF = ''
        //Pagination
        $scope.range = function(max) {
            var input = [];
            for (var i = 1; i <= max; i++) {
                input.push(i);
            }
            return input;
        };
        }//end controller
    })
