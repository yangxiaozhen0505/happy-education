
let http = require('http');
let fs = require('fs');
let url = require('url');
function read(cb) {
  fs.readFile('./music.json', 'utf-8', function (err, data) {
    data = data.length === 0 ? [] : JSON.parse(data);
    cb(data)
  });
}
function write(data, cb) {
  fs.writeFile('./music.json', JSON.stringify(data), cb)
}
read(function(data){
  // console.log(data);
});
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  let id = query.id;
  if (pathname === '/api/s') {
    switch (req.method) {
      case 'GET':
        if (id) {
          read(function (music) {
            let s = music.find(item => item.id == id);
            res.end(JSON.stringify(s));
          })
        } else {
          read(function (data) {
            res.end(JSON.stringify(data))
          });
        }
        break;
    }
  }
}).listen(4000);
