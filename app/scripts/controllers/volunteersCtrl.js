/**
 * Created by mlagod on 15.04.16.
 */

angular.module('sbAdminApp')
    .controller('volunteersCtrl', function($http){

    var vm = this;


    $http({method: 'GET', url: 'api/volunteers'})
        .success(function(data){
            vm.volunteers = data;
        });
});
