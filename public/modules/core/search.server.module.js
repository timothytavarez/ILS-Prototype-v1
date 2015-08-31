'use strict';

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: process.env.IP + ':' + 9200,
    log: 'trace'
});

client.ping({
  requestTimeout: 30000,

  // undocumented params are appended to the query string
  hello: 'elasticsearch'
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
