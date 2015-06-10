
var request = require('request');
var m3u8 = require('m3u8');
var url = process.argv.splice(-1)[0];


var parser = m3u8.createStream();
request(url).pipe(parser);

var lastItem = null;

parser.on('item', function(item) {
  lastItem = item;
});

parser.on('end', function () {
  process.stdout.write(lastItem.properties.uri)
});
