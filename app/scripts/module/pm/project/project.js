var app = angular.module('v3App');
    // app.controller('project',  ['$scope','$http', function($scope,$http){
    //     $scope.button = 'Save';
    //
    //   $http.get('http://arivin.xyz/data_pdam/public/api/pelanggan/project').
    //   then(function(response) {
    //     $scope.datas = response.data.data;
    //   });


      app.controller('projectCont', ['$scope','$state','$stateParams', 'ProjectsService', 'Projects', 'Project' ,function($scope,$state,$stateParams, ProjectsService, Projects, Project) {

        this.Project = Project.data;

        this.ProjectQuery = $state.params.query;

        this.Projects = Projects.data.data;
        $scope.Projects =Projects.data;


        this.saveProject = function() {
            ProjectsService.saveProject(this.Project)
                .then(function() {
                    $state.go('Projects');
                });
        };

        this.searchProjects = function(query) {
            if (!query.length) return $state.go('Projects');

            $state.go('search', {query: query});
        }; 
    }]);

// app.module('v3App')
    app.service('ProjectsService', ['$http', function($http) {
        this.saveProject = function(Project) {
            return $http.post(BASE_URL + '/projects', Project);
        };

        this.searchProjects = function(query) {
            return $http.get('/projects/search/' + query);
        };

        this.getProjects = function() {
            return $http.get(BASE_URL + '/projects');
        };

        this.getProject = function(id) {
            return $http.get(BASE_URL + '/projects/' + id);
        };
    }]);
