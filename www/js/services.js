angular.module('eventos.services', [])

.factory('eventoService' , function($http) {
//POde se usar uma fonte aqui que retorne um array JSON

//Dados falsos para teste 
	var apiUrl = "http://localhost:8080/api/eventos/" 


	return {
	  todos: function() {
	  	return $http.get(apiUrl);
	  },
	  excluir: function(eventoID) {
	  	return $http.delete(apiUrl + eventoID + "/");	
	  },
	  salvar: function(evento) {
	  	eventos.push({
	  		nome: evento.nome,
	  		data: evento.data,
	  		local: evento.local,
	  		descricao: evento.descricao,
	  		foto: evento.foto
	  	});
	  	localStorage.eventos = JSON.stringify(eventos);		
	  },
	  get: function(eventoID) {
	  	for (var i = 0; i < eventos.length ; i++) {
	  		if (eventos[i].id == parseInt(eventoID)) {
	  			return eventos[i];
	  		  }
	  	    }
	  	    return null
	   }
	};
});