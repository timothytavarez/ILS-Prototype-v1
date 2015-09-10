'use strict';

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '191.239.52.231' + ':' + '9200',
    log: 'trace'
});

client.ping({
  requestTimeout: 3000,

  // undocumented params are appended to the query string
  hello: 'elasticsearch'
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});


// client.search({
//   index: 'items',
//   body: {
//     'query': {
//       'match_all': {}
//       }
//     }
//   });