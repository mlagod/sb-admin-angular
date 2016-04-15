/**
 * Created by mlagod on 15.04.16.
 */

angular.module('sbAdminApp')
    .controller('newVolunteerCtrl', function($http){

        var vm = this;

      /*  vm.form = {
            name: '',
            surname: '',
            email: '',
            phone: ''
        }; */


        //pobiera wszystkich wolontariuszy z bazy
        $http({method: 'GET', url: 'api/volunteers'})
            .success(function(data){
                vm.volunteers = data;
            });

        //pobiera wszystkie druzyny
        $http({method: 'GET', url: 'api/teams'})
            .success(function(data){
                vm.teams = data;
            });


        vm.createUser = function(form){
            $http({method:'POST', url:'/api/volunteers', data: form});
            vm.form = {
                name:'',
                surname: '',
                email: '',
                phone: ''
            }
        };

        vm.selectedVol = {
            name: '',
            surname: '',
            email: '',
            phone: ''
        };


        vm.selectVolunteer = function(name,surname, email, phone){
            vm.selectedVol.name = name;
            vm.selectedVol.surname = surname;
            vm.selectedVol.email = email;
            vm.selectedVol.phone = phone;

        };


        vm.addTeamMember = function(volunteer){
            vm.newTeamIds.push(volunteer.id);
        };


        vm.newTeamIds = [];
        vm.selectedTeamId = '';

        vm.selectVolunteer = function(volId){
            this.form.userId = volId;
        };

        vm.volunteersInTeam = function($http){
            $http({method: 'GET', url:'api/teams', params:{team: vm.selectedTeamId}})
        };


        vm.updateUser = function(form){
            $http({method:'PUT', url:'api/volunteers', data:form});
            vm.selectedVol = {};
        };

        vm.createTeam = function(form){
            $http({method: 'POST', url:'api/teams', data:form});
            vm.newTeamIds = {};
        };

        vm.updateTeam = function(form){
            $http({method: 'PUT', url: 'api/teams/{teamId}', data:form, teamId: vm.selectedTeamId});
        };



    });