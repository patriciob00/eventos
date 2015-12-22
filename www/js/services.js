angular.module('eventos.services', [])

.factory('eventoService' , function($http) {
//Pode se usar uma fonte aqui que retorne um array JSON

//Dados falsos para teste 
	var apiUrl = "http://localhost:8080/api/eventos/" 


	return {
	  todos: function() {
	  	return $http.get(apiUrl);
	  },
	  excluir: function(eventoID) {
	evento = $http.get()
	  	return $http.delete(apiUrl + eventoID + "/");	
	  },
	  salvar: function(evento) {
	  	return $http.post(apiUrl, evento);
	  },
	  get: function(eventoID) {
	  	/**for (var i = 0; i < eventos.length ; i++) {
	  		if (eventos[i].id == parseInt(eventoID)) {
	  			return eventos[i];
	  		  }
	  	    }
	  	    return null
	   }
	};**/
			 return $http.get(apiUrl + eventoID + "/")
			
		},
}})	;