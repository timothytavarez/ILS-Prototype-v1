
// We define an EsConnector module that depends on the elasticsearch module.     
//var EsConnector = angular.module('EsConnector', ['elasticsearch']);
ApplicationConfiguration.registerModule('EsConnector', ['elasticsearch']);

var EsConnector = angular.module('EsConnector');

// Create the es service from the esFactory
EsConnector.service('es', function (esFactory) {
  return esFactory({ hosts: [ 'http://191.239.52.231:9200' ] });
});

// We define an Angular controller that returns the server health
// Inputs: $scope and the 'es' service

EsConnector.controller('ServerHealthController', function($scope, es) {

    es.cluster.health(function (err, resp) {
        if (err) {
            $scope.data = err.message;
        } else {
            $scope.data = resp;
        }
    });
});

// We define an Angular controller that returns query results,
// Inputs: $scope and the 'es' service

EsConnector.controller('QueryController', function($scope, es) {
console.log(es);
// search for documents
    es.search({
    index: 'items',
    size: 50,
    body: {
    "query":
        {
            "match": {
                title: "How I Did It"
            }   
        },
    }
    }).then(function (response) {
      $scope.hits = response.hits.hits;
      console.log(response);
    });

});

