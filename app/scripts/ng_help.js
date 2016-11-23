var app = angular.module('v3App');
app.service('myHelp', ['$http', function($http) {

    this.getParam = function(url, data) {
        var query = {
             params: data,
             headers : {'Accept' : 'application/json'}
            };

        return $http.get(BASE_URL + url, query);
    };

    this.getDetail = function(url) {
        return $http.get(BASE_URL + url);
    };



    //POST
    this.postParam = function(url, data)
    {
        var query = {
             params: data,
             headers : {'Accept' : 'application/json'}
            };

        return $http.post(BASE_URL + url, data);

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
function clearInt (val) {
    if(isNaN(val))
    {
        return val.replace(/number:/g,"");
    }
    return val;

}

function clearObj(obj) {
    var json_data = clearInt(JSON.stringify(obj)); 
    var json_data = JSON.parse(json_data);
    return json_data;

}
