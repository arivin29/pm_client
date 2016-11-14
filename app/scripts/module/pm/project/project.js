var app = angular.module('v3App');

      app.controller('projectCont', ['$scope','$state','$stateParams', 'ProjectsService', 'Projects', 'Project' ,function($scope,$state,$stateParams, ProjectsService, Projects, Project) {

        this.Project = Project.data;

        this.ProjectQuery = $state.params.query;

        this.Projects = Projects.data;
        $scope.Projects =Projects.data;
        console.log(Projects.data);


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
            return $http.post(BASE_URL + '/project/add', Project);
        };

        this.searchProjects = function(query) {
            return $http.get('/projects/' + query);
        };

        this.getProjects = function() {
            return $http.get(BASE_URL + '/project');
        };

        this.getProject = function(id) {
            return $http.get(BASE_URL + '/project/' + id);
        };
    }]);
