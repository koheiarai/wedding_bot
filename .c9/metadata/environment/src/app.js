{"filter":false,"title":"app.js","tooltip":"/src/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":121,"column":35},"end":{"row":121,"column":36},"action":"insert","lines":["l"],"id":957}],[{"start":{"row":121,"column":36},"end":{"row":121,"column":37},"action":"insert","lines":["d"],"id":958}],[{"start":{"row":121,"column":37},"end":{"row":121,"column":38},"action":"insert","lines":[" "],"id":959}],[{"start":{"row":133,"column":9},"end":{"row":133,"column":10},"action":"insert","lines":["*"],"id":960}],[{"start":{"row":143,"column":4},"end":{"row":143,"column":7},"action":"remove","lines":["// "],"id":961}],[{"start":{"row":146,"column":0},"end":{"row":147,"column":0},"action":"insert","lines":["    const newPhoto = {name: \"name\", image: \"https://static.pexels.com/photos/406014/pexels-photo-406014.jpeg\", score: score};",""],"id":962}],[{"start":{"row":145,"column":4},"end":{"row":145,"column":7},"action":"insert","lines":["// "],"id":963}],[{"start":{"row":146,"column":43},"end":{"row":146,"column":109},"action":"remove","lines":["\"https://static.pexels.com/photos/406014/pexels-photo-406014.jpeg\""],"id":964},{"start":{"row":146,"column":43},"end":{"row":146,"column":44},"action":"insert","lines":["i"]}],[{"start":{"row":146,"column":44},"end":{"row":146,"column":45},"action":"insert","lines":["m"],"id":965}],[{"start":{"row":146,"column":45},"end":{"row":146,"column":46},"action":"insert","lines":["a"],"id":966}],[{"start":{"row":146,"column":46},"end":{"row":146,"column":47},"action":"insert","lines":["g"],"id":967}],[{"start":{"row":146,"column":47},"end":{"row":146,"column":48},"action":"insert","lines":["e"],"id":968}],[{"start":{"row":188,"column":35},"end":{"row":188,"column":39},"action":"remove","lines":["body"],"id":970},{"start":{"row":188,"column":35},"end":{"row":188,"column":43},"action":"insert","lines":["response"]}],[{"start":{"row":113,"column":0},"end":{"row":113,"column":3},"action":"remove","lines":["// "],"id":971},{"start":{"row":114,"column":0},"end":{"row":114,"column":3},"action":"remove","lines":["// "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":3},"action":"remove","lines":["// "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":3},"action":"remove","lines":["// "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":119,"column":0},"end":{"row":131,"column":0},"action":"remove","lines":["app.post('/webhook', line.middleware(config), wrap(function*(req, res) {","  try {","      yield req.body.events.map(yield handleEvent);","  } catch (e) {","    console.log(\"Got an error!\");","      // yield callbackError(e, new SmartRequest(req, path), res);","  }","  // Promise","  //   .all(req.body.events.map(handleEvent))","  //   .then((result) => res.json(result));","  })",");",""],"id":972}],[{"start":{"row":121,"column":9},"end":{"row":121,"column":10},"action":"remove","lines":["*"],"id":973}],[{"start":{"row":131,"column":4},"end":{"row":131,"column":7},"action":"insert","lines":["// "],"id":974}],[{"start":{"row":133,"column":4},"end":{"row":133,"column":7},"action":"remove","lines":["// "],"id":975}],[{"start":{"row":134,"column":4},"end":{"row":134,"column":7},"action":"insert","lines":["// "],"id":976}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":29},"action":"insert","lines":["var async = require('async');"],"id":977}],[{"start":{"row":15,"column":29},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":978}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["var async = require('async');",""],"id":979}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["var async = require('async');",""],"id":980}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["var"],"id":981},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["o"]}],[{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"insert","lines":["c"],"id":982}],[{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"remove","lines":["c"],"id":983}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["o"],"id":984}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["c"],"id":985}],[{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"insert","lines":["o"],"id":986}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["n"],"id":987}],[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["s"],"id":988}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["t"],"id":989}],[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":[" "],"id":990}],[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"remove","lines":[" "],"id":991}],[{"start":{"row":181,"column":0},"end":{"row":182,"column":0},"action":"insert","lines":["",""],"id":992}],[{"start":{"row":182,"column":0},"end":{"row":211,"column":2},"action":"insert","lines":["var get_image = function(message_id,callback){","","    // Request Headers","    var send_options = {","        host: 'api.line.me',","        path: '/v2/bot/message/'+message_id+'/content',","        headers: {","            \"Content-type\": \"application/json; charset=UTF-8\",","            \"Authorization\": \" Bearer \" + \"{ MY_TOKEN }\" // ←ここに自分のトークンを入れる(LINE Developersで発行したやつ)","        },","        method:'GET'","    };","","    // APIリクエスト","    var req = https.request(send_options, function(res){","        var data = [];","        res.on('data', function(chunk){","          //image data dividing it in to multiple request","          data.push(new Buffer(chunk));","        }).on('error', function(err){","          console.log(err);","        }).on('end', function(){","          // ここに画像取得後の処理を書く","          // この場合は、引数で受け取った画像取得後の処理用callbackを実行","          // dataに画像のバイナリデータが入ってる","          callback(data);","        });","    });","    req.end();","};"],"id":993}],[{"start":{"row":182,"column":0},"end":{"row":182,"column":1},"action":"insert","lines":["f"],"id":994}],[{"start":{"row":182,"column":1},"end":{"row":182,"column":2},"action":"insert","lines":["u"],"id":995}],[{"start":{"row":182,"column":2},"end":{"row":182,"column":3},"action":"insert","lines":["n"],"id":996}],[{"start":{"row":182,"column":3},"end":{"row":182,"column":4},"action":"insert","lines":["c"],"id":997}],[{"start":{"row":182,"column":4},"end":{"row":182,"column":5},"action":"insert","lines":["t"],"id":998}],[{"start":{"row":182,"column":5},"end":{"row":182,"column":6},"action":"insert","lines":["i"],"id":999}],[{"start":{"row":182,"column":6},"end":{"row":182,"column":7},"action":"insert","lines":["o"],"id":1000}],[{"start":{"row":182,"column":7},"end":{"row":182,"column":8},"action":"insert","lines":["n"],"id":1001}],[{"start":{"row":182,"column":8},"end":{"row":182,"column":9},"action":"insert","lines":[" "],"id":1002}],[{"start":{"row":182,"column":9},"end":{"row":182,"column":13},"action":"remove","lines":["var "],"id":1003}],[{"start":{"row":182,"column":19},"end":{"row":182,"column":29},"action":"remove","lines":["= function"],"id":1004}],[{"start":{"row":182,"column":31},"end":{"row":182,"column":32},"action":"insert","lines":[" "],"id":1005}],[{"start":{"row":184,"column":0},"end":{"row":185,"column":0},"action":"remove","lines":["    // Request Headers",""],"id":1006}],[{"start":{"row":184,"column":4},"end":{"row":184,"column":7},"action":"remove","lines":["var"],"id":1007},{"start":{"row":184,"column":4},"end":{"row":184,"column":5},"action":"insert","lines":["c"]}],[{"start":{"row":184,"column":5},"end":{"row":184,"column":6},"action":"insert","lines":["o"],"id":1008}],[{"start":{"row":184,"column":6},"end":{"row":184,"column":7},"action":"insert","lines":["n"],"id":1009}],[{"start":{"row":184,"column":7},"end":{"row":184,"column":8},"action":"insert","lines":["s"],"id":1010}],[{"start":{"row":184,"column":8},"end":{"row":184,"column":9},"action":"insert","lines":["t"],"id":1011}],[{"start":{"row":186,"column":32},"end":{"row":186,"column":33},"action":"insert","lines":[" "],"id":1012}],[{"start":{"row":186,"column":34},"end":{"row":186,"column":35},"action":"insert","lines":[" "],"id":1013}],[{"start":{"row":186,"column":45},"end":{"row":186,"column":46},"action":"insert","lines":[" "],"id":1014}],[{"start":{"row":186,"column":47},"end":{"row":186,"column":48},"action":"insert","lines":[" "],"id":1015}],[{"start":{"row":189,"column":42},"end":{"row":189,"column":99},"action":"remove","lines":["\"{ MY_TOKEN }\" // ←ここに自分のトークンを入れる(LINE Developersで発行したやつ)"],"id":1016},{"start":{"row":189,"column":42},"end":{"row":189,"column":60},"action":"insert","lines":["defaultAccessToken"]}],[{"start":{"row":195,"column":4},"end":{"row":195,"column":7},"action":"remove","lines":["var"],"id":1017},{"start":{"row":195,"column":4},"end":{"row":195,"column":5},"action":"insert","lines":["c"]}],[{"start":{"row":195,"column":5},"end":{"row":195,"column":6},"action":"insert","lines":["o"],"id":1018}],[{"start":{"row":195,"column":6},"end":{"row":195,"column":7},"action":"insert","lines":["n"],"id":1019}],[{"start":{"row":195,"column":7},"end":{"row":195,"column":8},"action":"insert","lines":["s"],"id":1020}],[{"start":{"row":195,"column":8},"end":{"row":195,"column":9},"action":"insert","lines":["t"],"id":1021}],[{"start":{"row":195,"column":16},"end":{"row":195,"column":22},"action":"remove","lines":["https."],"id":1022}],[{"start":{"row":198,"column":0},"end":{"row":199,"column":0},"action":"remove","lines":["          //image data dividing it in to multiple request",""],"id":1023}],[{"start":{"row":157,"column":0},"end":{"row":157,"column":2},"action":"insert","lines":["  "],"id":1024}],[{"start":{"row":128,"column":2},"end":{"row":128,"column":3},"action":"insert","lines":["c"],"id":1025}],[{"start":{"row":128,"column":3},"end":{"row":128,"column":4},"action":"insert","lines":["o"],"id":1026}],[{"start":{"row":128,"column":4},"end":{"row":128,"column":5},"action":"insert","lines":["n"],"id":1027}],[{"start":{"row":128,"column":5},"end":{"row":128,"column":6},"action":"insert","lines":["s"],"id":1028}],[{"start":{"row":128,"column":6},"end":{"row":128,"column":7},"action":"insert","lines":["o"],"id":1029}],[{"start":{"row":128,"column":7},"end":{"row":128,"column":8},"action":"insert","lines":["l"],"id":1030}],[{"start":{"row":128,"column":8},"end":{"row":128,"column":9},"action":"insert","lines":["e"],"id":1031}],[{"start":{"row":128,"column":9},"end":{"row":128,"column":10},"action":"insert","lines":["."],"id":1032}],[{"start":{"row":128,"column":10},"end":{"row":128,"column":11},"action":"insert","lines":["l"],"id":1033}],[{"start":{"row":128,"column":11},"end":{"row":128,"column":12},"action":"insert","lines":["o"],"id":1034}],[{"start":{"row":128,"column":12},"end":{"row":128,"column":13},"action":"insert","lines":["g"],"id":1035}],[{"start":{"row":128,"column":13},"end":{"row":128,"column":15},"action":"insert","lines":["()"],"id":1036}],[{"start":{"row":128,"column":14},"end":{"row":128,"column":16},"action":"insert","lines":["\"\""],"id":1037}],[{"start":{"row":128,"column":17},"end":{"row":129,"column":0},"action":"insert","lines":["",""],"id":1038},{"start":{"row":129,"column":0},"end":{"row":129,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":128,"column":15},"end":{"row":128,"column":16},"action":"insert","lines":["m"],"id":1039}],[{"start":{"row":128,"column":16},"end":{"row":128,"column":17},"action":"insert","lines":["e"],"id":1040}],[{"start":{"row":128,"column":17},"end":{"row":128,"column":18},"action":"insert","lines":["s"],"id":1041}],[{"start":{"row":128,"column":18},"end":{"row":128,"column":19},"action":"insert","lines":["s"],"id":1042}],[{"start":{"row":128,"column":19},"end":{"row":128,"column":20},"action":"insert","lines":["a"],"id":1043}],[{"start":{"row":128,"column":20},"end":{"row":128,"column":21},"action":"insert","lines":["g"],"id":1044}],[{"start":{"row":128,"column":21},"end":{"row":128,"column":22},"action":"insert","lines":["e"],"id":1045}],[{"start":{"row":128,"column":22},"end":{"row":128,"column":23},"action":"insert","lines":["I"],"id":1046}],[{"start":{"row":128,"column":23},"end":{"row":128,"column":24},"action":"insert","lines":["d"],"id":1047}],[{"start":{"row":128,"column":24},"end":{"row":128,"column":25},"action":"insert","lines":[" "],"id":1048}],[{"start":{"row":128,"column":25},"end":{"row":128,"column":26},"action":"insert","lines":["i"],"id":1049}],[{"start":{"row":128,"column":26},"end":{"row":128,"column":27},"action":"insert","lines":["s"],"id":1050}],[{"start":{"row":128,"column":28},"end":{"row":128,"column":29},"action":"insert","lines":[":"],"id":1051}],[{"start":{"row":128,"column":29},"end":{"row":128,"column":30},"action":"insert","lines":[" "],"id":1052}],[{"start":{"row":128,"column":28},"end":{"row":128,"column":29},"action":"remove","lines":[":"],"id":1053}],[{"start":{"row":128,"column":27},"end":{"row":128,"column":28},"action":"insert","lines":[":"],"id":1054}],[{"start":{"row":128,"column":30},"end":{"row":128,"column":46},"action":"insert","lines":["event.message.id"],"id":1056}],[{"start":{"row":128,"column":30},"end":{"row":128,"column":31},"action":"insert","lines":["+"],"id":1057}],[{"start":{"row":128,"column":31},"end":{"row":128,"column":32},"action":"insert","lines":[" "],"id":1058}],[{"start":{"row":128,"column":49},"end":{"row":128,"column":50},"action":"insert","lines":[";"],"id":1059}]]},"ace":{"folds":[],"scrolltop":1437,"scrollleft":0,"selection":{"start":{"row":128,"column":0},"end":{"row":128,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":102,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1521387938109,"hash":"12ec7bb9df1d75aab4ea82d0dcd70898188d6cb9"}