var bandApp = angular.module('BandSearchApp',[]);

bandApp.controller('BandController', ['BandRepository', 
		 function(bandRepository) {

		var vm = this;
	
		vm.findBands = function(name){
			bandRepository.findBands(name).then(function(response) {
				vm.bandsFound = response.data._embedded.band;
			});
		}
		
		vm.formatBand = function(bandName){
			var count = vm.countLetterE(bandName);
			if (count > 0){
				return bandName + ' (' + count + ')';
			} else {
				return 'SOLD OUT';
			}
			
		}
		
		vm.countLetterE = function(string){
			var count = 0;
			for (i = 0; i < string.length; i++) {
				if (string[i] == 'e' || string[i] == 'E') {
					count++;
				}
			}
			return count;
		}
	}
]);

bandApp.service('BandRepository', ['$http', function($http){
	return {
		findBands: function(name) {
			var request = 'band/search/findByNameContainingIgnoreCase?name=' + name;
			return $http.get(request);
		}
	};
}]);
