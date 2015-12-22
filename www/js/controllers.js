angular.module('eventos.controllers', [])

	.controller('EventosCtrl', function($scope ,eventoService) {

		$scope.$on("$ionicView.beforeEnter", function() {
			getTodos()
		});

		function getTodos() {
				eventoService.todos()
					.success(function (response) {
						$scope.eventos = response;
					})
					.error(function(error){
						alert('Erro: '+ response)
					});
				}

				$scope.excluir = function(eventoId) {
					eventoService.excluir(eventoId)
					.success( function (response) {
						getTodos();
					}) 
					.error(function(response) {
						alert('Erro: ' + response)
					});
				};
			})

			.controller( 'NovoEventoCtrl' , function($scope , eventoService , $state ) {

				$scope.salvar = function(evento) {
					newEvent = angular.extend({},evento);
					var y = newEvent.data.getFullYear(),
					m = newEvent.data.getMonth(),
					d = newEvent.data.getDay();
					newEvent.data = y+"-"+m+"-"+d;
				  	eventoService.salvar(newEvent).then(
					 	function(response) {
					 	 	alert("Evento criado com sucesso");
					 	 	$state.go('tab.eventos')
					 	},
					 	function( response) {
							alert('Erro: ' + response)
					 	}
				 	);
			    }
			})

			.controller( 'EventoDetalheCtrl' , function( $scope ,$stateParams, eventoService ) {
				 eventoService.get($stateParams.eventoID)
				 	.success(function (response){
				 		$scope.evento = response;
				 })
				 .error(function (error){
				 	alert('Erro: '+ response)
				 });
			})

			.controller( 'LoginCtrl' , function() {
	
			});