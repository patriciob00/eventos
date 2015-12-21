angular.module('eventos.controllers', [])

	.controller('EventosCtrl', function($scope ,eventoService) {
		
		getTodos();

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

			.controller( 'NovoEventoCtrl' , function($scope , eventoService ) {
				$scope.salvar = function(evento) {
					eventoService.salvar(evento);
				};
			})

			.controller( 'EventoDetalheCtrl' , function( $scope ,$stateParams, eventoService ) {
				$scope.evento = eventoService.get($stateParams.eventoID);
			});