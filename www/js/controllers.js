angular.module('eventos.controllers', [])

	.controller('EventosCtrl', function($scope ,eventoService) {
		$scope.eventos = eventoService.todos();
		$scope.excluir = function(eventoIndex) {
			eventoService.excluir(eventoIndex);
		}
	})

	.controller( 'NovoEventoCtrl' , function($scope , eventoService ) {
		$scope.salvar = function(evento) {
			eventoService.salvar(evento);
		};
	})

	.controller( 'EventoDetalheCtrl' , function( $scope ,$stateParams, eventoService ) {
		$scope.evento = eventoService.get($stateParams.eventoID);
	});