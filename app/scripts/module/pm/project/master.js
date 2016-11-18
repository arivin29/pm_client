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
        return $filter('date')(new Date(), 'yyyy-MMMM-dd');
    };
}])
