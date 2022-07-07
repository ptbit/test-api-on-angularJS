console.log('hi')
let ptb = ''
let angularApp = angular.module('angularApp', [])



let apiCows =
[
    {
      "name": "Alise",
      "bdate": "2020-02-15",
      "color_id": 1,
      "milk_avg": 5,
      "color": "White",
      "age": 2
    },
    {
      "name": "Rachel",
      "bdate": "2021-03-10",
      "color_id": 1,
      "milk_avg": 5.5,
      "color": "White",
      "age": 1
    },
    {
      "name": "Amely",
      "bdate": "2020-02-15",
      "color_id": 1,
      "milk_avg": 3,
      "color": "White",
      "age": 2
    },
    {
      "name": "Sidney",
      "bdate": "2021-04-01",
      "color_id": 1,
      "milk_avg": 4,
      "color": "White",
      "age": 1
    },
    {
      "name": "Monroe",
      "bdate": "2021-05-03",
      "color_id": 1,
      "milk_avg": 4.1,
      "color": "White",
      "age": 1
    },
    {
      "name": "Natasha",
      "bdate": "2021-04-13",
      "color_id": 1,
      "milk_avg": 4.2,
      "color": "White",
      "age": 1
    },
    {
      "name": "Konfetka",
      "bdate": "2019-02-11",
      "color_id": 1,
      "milk_avg": 4.3,
      "color": "White",
      "age": 3
    },
    {
      "name": "Lusya",
      "bdate": "2019-03-11",
      "color_id": 1,
      "milk_avg": 4,
      "color": "White",
      "age": 3
    },
    {
      "name": "Galya",
      "bdate": "2020-02-15",
      "color_id": 2,
      "milk_avg": 4.2,
      "color": "Black",
      "age": 2
    },
    {
      "name": "Maryna",
      "bdate": "2019-01-11",
      "color_id": 2,
      "milk_avg": 4.7,
      "color": "Black",
      "age": 3
    }
  ]

  angularApp.controller('angularCtrl', function($scope){
    $scope.message = ptb
    $scope.cows = apiCows

    console.log('cows=',$scope.cows)
    

    $scope.mess = function () {
       return charCodeCalc($scope.message)
    }

    $scope.showCows = function (id) {
    //   angular.forEach(apiCows, function (cow){
    //     return(cow)
    // })
    // return $scope.cows
    for (var i = 1; i < $scope.cows.length; i++){
      if (id == $scope.cows[i].age)
      return $scope.cows[i]
    }
    }
})

function charCodeCalc (str) {
    var totalValue = 0 
    for (var i = 0; i < str.length; i++) {
        totalValue += str.charCodeAt(i)
    }
    return totalValue
}

// angular.forEach(apiCows, function (cow){
//     console.log(cow)
// })