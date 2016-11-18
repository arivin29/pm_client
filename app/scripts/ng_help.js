var app = angular.module('v3App');
app.service('myHelp', ['$http', function($http) {

    this.getParam = function(url, data) {
        var query = {
             params: data,
             headers : {'Accept' : 'application/json'}
            };

        return $http.get(BASE_URL + url, query);
    };

    this.getDetail = function(url, id) {
        return $http.get(BASE_URL + url + id);
    };



    //POST
    this.postParam = function(url, data)
    {
        var query = {
             params: data,
             headers : {'Accept' : 'application/json'}
            };

        return $http.post(BASE_URL + url, query);

        // return $http({
        //           method  : 'POST',
        //           url     : BASE_URL + url,
        //           data    : data,
        //           headers : {'Accept' : 'application/json'}
        //       });
    }

}]);

function debugData(data)
{
    if(DEBUG==true)
    {
        console.log(data);
        DATA=data;
    }
}
