var app = angular.module('v3App');
app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

app.filter('dateNow',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'dd MMMM yyyy');
    };
}])

.filter('currentdate',['$filter',  function($filter) {
    return function() {
        return new Date();
    };
}])

app.filter('number', [function() {
    return function(input) {
        return parseInt(input, 10);
    };
}]);

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.filter('status_proyek', function() {
    return function(input) {
          if(input == null)
          {
              return "Progress";
          }
    }
});

app.run(function($rootScope) {
    $rootScope.hitung_hari = function(start,end) {
        var hari = (end - start) / (1000 * 60 * 60 * 24);
        console.log(start);
        return Math.round(hari);
    };
});

app.run(function($rootScope) {
    $rootScope.isLoading = function () {
       return $http.pendingRequests.length !== 0;
    };
});
