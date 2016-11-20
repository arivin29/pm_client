var app = angular.module('v3App');

// Click to navigate
// similar to <a href="#/partial"> but hash is not required,
// e.g. <div click-link="/partial">
app.directive('clickLink', ['$location', function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    var url = attrs.clickLink;
                    // var show = attrs.show;
                    console.log("asdsad");
                    $('#detail').addClass('wd_40');
                    $location.path(url);


                });
            });
        }
    }
}]);


app.directive('onClick', function(){
       return{
           restrict: 'A',
           link: function(scope, element, attr){
               $(element).click(function( e, rowid ) {
                 scope.method({myParam: id});
                });
           }
       };
   });


app.directive("backButton", ["$window", function ($window) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                $window.history.back();
            });
        }
    };
}]);

app.directive("backDblClick", ["$window", function ($window) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.bind("dblclick", function () {
                $window.history.back();
            });
        }
    };
}]);
 
app.directive('datepicker', function () {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function (scope, el, attr, ngModel) {
                    jQuery('.date-picker').datepicker()
                    .on('changeDate', function(ev){
                        console.log(ev);
                        console.log($(ev.target).val());

                        ngModel.$viewValue = ev.date;
                        ngModel.$commitViewValue();

                    });
                }
            };
        });




function onLoad(lokasi,url)
{
    $(lokasi).load('http://localhost:9000/#/pm/project/detail/1');
    console.log("sadsadas");
}
