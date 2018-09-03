

function getAndPrintHTMLChunks (){
    var https = require('https');

    var requestOptions = {
        host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  var chunks = '';
  https.get(requestOptions, function(reponse){
      reponse.setEncoding('UTF-8');
      reponse.on("data", function(data){
          chunks += data;
      });
      reponse.on("end", function(){
          console.log("Stream complete");
          console.log(chunks);
      });
  });
}


getAndPrintHTMLChunks();
