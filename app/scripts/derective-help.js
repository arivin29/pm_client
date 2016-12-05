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
            jQuery(el).datepicker()
            .on('changeDate', function(ev){
                console.log(ev);
                console.log($(ev.target).val());

                ngModel.$viewValue = ev.date;
                // ngModel.$commitViewValue();
                ngModel.$setViewValue(ev.date);

            });
        }
    };
});


app.directive('datelimit', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, el, attr, ngModel) {

            // tanggal();
            jQuery(el).click(function functionName() {

                tanggal();
            })
            var awal= '';

            function tanggal() {
                //$(el).datepicker('remove');

                var startDate = $(el).attr("startDate");
                var endDate = $(el).attr("endDate");
                console.log(endDate);
                if(startDate)
                {
                    if(startDate!==awal)
                    {
                        $(el).datepicker('remove');
                        awal = startDate;
                    }


                    startDate = new Date(startDate);
                    endDate = new Date(endDate);

                    console.log(startDate);
                    console.log(endDate);
                }
                else
                {
                    awal = startDate;
                    console.log("empty");
                    startDate = new Date('2016-12-08');
                    endDate = new Date('2016-12-08');
                }


                $(el).datepicker({
                    startDate : startDate,
                    endDate : endDate
                })
                .on('changeDate', function(ev){
                    ngModel.$viewValue = ev.date;
                    // ngModel.$commitViewValue();
                    ngModel.$setViewValue(ev.date);

                });
                // $(el).datepicker('update');

            }

        }
    };
});

        app.directive('select2lama', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $timeout(function() {
                        element.show();
                        $(element).select2();
                        console.log("asds");
                    });
                }
            };
        });

        // app.directive("select2",function($timeout,$parse){
        //     return {
        //         restrict: 'AC',
        //         link: function(scope, element, attrs) {
        //             var options = [],
        //                 el = $(element),
        //                 angularTriggeredChange = false,
        //                 ngOptions = attrs["ngOptions"].split(" in "),
        //                 property = ngOptions[0],
        //                 optionsObject = ngOptions[1];
        //             // watch for changes to the defining data model
        //             scope.$watch(optionsObject, function(n, o){
        //                 var data = [];
        //                 // format the options for select2 data interface
        //                 for(var i in n) {
        //                     var obj = {id: i, text: n[i][property]};
        //                     data.push(obj);
        //                 }
        //                 el.select2({data: data});
        //                 // keep local copy of given options
        //                 options = n;
        //             }, true);
        //             // watch for changes to the selection data model
        //             scope.$watch(attrs["ngModel"], function(n, o) {
        //                 // select2 is indexed by the array position,
        //                 // so we iterate to find the right index
        //                 for(var i in options) {
        //                     if(options[i][property] === n) {
        //                         angularTriggeredChange = true;
        //                         el.val(i).trigger("change");
        //                     }
        //                 }
        //             }, true);
        //             // Watch for changes to the select UI
        //             el.select2().on("change", function(e){
        //                 // if the user triggered the change, let angular know
        //                 if(!angularTriggeredChange) {
        //                     scope.$eval(attrs["ngModel"]+"='"+options[e.target.value][property]+"'");
        //                     scope.$digest();
        //                 }
        //                 // if angular triggered the change, then nothing to update
        //                 angularTriggeredChange = false;
        //             });
        //
        //         }
        //     };
        // });

app.directive("select2",function($timeout,$http){
    return {
        restrict: 'AC',
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var x=0;
            function cekPending()
            {

                if($http.pendingRequests.length == 0 && x==0)
                {
                        $(element).select2();
                        console.log($http.pendingRequests.length);
                        x=1;
                }
                else {
                    $timeout(function() {
                        cekPending();
                    },1000);
                }

            }

            $timeout(function() {
                cekPending();
            },1000);

            model.$render = function() {
                $(element).select2("val",model.$viewValue);
                console.log(model.$viewValue);
            }
            $(element).on('change', function() {
                scope.$apply(function() {
                    model.$setViewValue($(element).select2("val"));

                });

            })
        }
    };
});

app.directive("select2lokasi",function($timeout){
    return {
        restrict: 'AC',
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            // scope.$watch(attrs.ngModel, function(newVal, oldVal){
            //         console.log("ganti");
            //         $timeout(function() {
            //             $('.' + attrs.ngModelNext).select2();
            //         },1000);
            //  });

            $timeout(function() {
                $(element).select2();
            },1000);

            model.$render = function() {
                $(element).select2("val",model.$viewValue);
                console.log(model.$viewValue);
            }
            $(element).on('change', function() {
                scope.$apply(function() {
                    model.$setViewValue($(element).select2("val"));

                });

            })
        }
    };
});

app.directive('convertToNumber', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return parseInt(val, 10);
          console.log(val);
        });
        ngModel.$formatters.push(function(val) {
          return '' + val;
        });
      }
    };
  });

  app.directive('disallowSpaces', function() {
  return {
    restrict: 'A',

    link: function($scope, $element) {
      $element.bind('input', function() {
        $(this).val($(this).val().replace(/ /g, ''));
      });
    }
  };
});



function onLoad(lokasi,url)
{
    $(lokasi).load('http://localhost:9000/#/pm/project/detail/1');
    console.log("sadsadas");
}
