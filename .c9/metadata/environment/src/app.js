{"filter":false,"title":"app.js","tooltip":"/src/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":315,"column":33},"end":{"row":315,"column":35},"action":"insert","lines":["\"\""],"id":3358}],[{"start":{"row":315,"column":34},"end":{"row":315,"column":54},"action":"insert","lines":["AKIAIHXOSLZMOJRH3UMA"],"id":3359}],[{"start":{"row":315,"column":74},"end":{"row":315,"column":103},"action":"remove","lines":["process.env.SECRET_ACCESS_KEY"],"id":3360}],[{"start":{"row":315,"column":74},"end":{"row":315,"column":76},"action":"insert","lines":["\"\""],"id":3361}],[{"start":{"row":315,"column":75},"end":{"row":315,"column":115},"action":"insert","lines":["3+9psVbKuD0vUiotFkJwhrZ9plo2sJCU74Nq5Nlt"],"id":3362}],[{"start":{"row":314,"column":0},"end":{"row":314,"column":1},"action":"insert","lines":["f"],"id":3374}],[{"start":{"row":314,"column":1},"end":{"row":314,"column":2},"action":"insert","lines":["u"],"id":3375}],[{"start":{"row":314,"column":2},"end":{"row":314,"column":3},"action":"insert","lines":["n"],"id":3376}],[{"start":{"row":314,"column":3},"end":{"row":314,"column":4},"action":"insert","lines":["c"],"id":3377}],[{"start":{"row":314,"column":4},"end":{"row":314,"column":5},"action":"insert","lines":["t"],"id":3378}],[{"start":{"row":314,"column":5},"end":{"row":314,"column":6},"action":"insert","lines":["i"],"id":3379}],[{"start":{"row":314,"column":6},"end":{"row":314,"column":7},"action":"insert","lines":["o"],"id":3380}],[{"start":{"row":314,"column":7},"end":{"row":314,"column":8},"action":"insert","lines":["n"],"id":3381}],[{"start":{"row":314,"column":8},"end":{"row":314,"column":9},"action":"insert","lines":[" "],"id":3382}],[{"start":{"row":314,"column":8},"end":{"row":314,"column":9},"action":"remove","lines":[" "],"id":3383}],[{"start":{"row":314,"column":8},"end":{"row":314,"column":10},"action":"insert","lines":["()"],"id":3384}],[{"start":{"row":314,"column":8},"end":{"row":314,"column":9},"action":"insert","lines":[" "],"id":3385}],[{"start":{"row":314,"column":9},"end":{"row":314,"column":10},"action":"insert","lines":["*"],"id":3386}],[{"start":{"row":314,"column":10},"end":{"row":314,"column":11},"action":"insert","lines":["u"],"id":3387}],[{"start":{"row":314,"column":11},"end":{"row":314,"column":12},"action":"insert","lines":["p"],"id":3388}],[{"start":{"row":314,"column":12},"end":{"row":314,"column":13},"action":"insert","lines":["l"],"id":3389}],[{"start":{"row":314,"column":13},"end":{"row":314,"column":14},"action":"insert","lines":["o"],"id":3390}],[{"start":{"row":314,"column":14},"end":{"row":314,"column":15},"action":"insert","lines":["a"],"id":3391}],[{"start":{"row":314,"column":15},"end":{"row":314,"column":16},"action":"insert","lines":["d"],"id":3392}],[{"start":{"row":314,"column":16},"end":{"row":314,"column":17},"action":"insert","lines":["I"],"id":3393}],[{"start":{"row":314,"column":17},"end":{"row":314,"column":18},"action":"insert","lines":["m"],"id":3394}],[{"start":{"row":314,"column":18},"end":{"row":314,"column":19},"action":"insert","lines":["a"],"id":3395}],[{"start":{"row":314,"column":19},"end":{"row":314,"column":20},"action":"insert","lines":["g"],"id":3396}],[{"start":{"row":314,"column":20},"end":{"row":314,"column":21},"action":"insert","lines":["e"],"id":3397}],[{"start":{"row":314,"column":22},"end":{"row":314,"column":23},"action":"insert","lines":["b"],"id":3398}],[{"start":{"row":314,"column":23},"end":{"row":314,"column":24},"action":"insert","lines":["a"],"id":3399}],[{"start":{"row":314,"column":24},"end":{"row":314,"column":25},"action":"insert","lines":["s"],"id":3400}],[{"start":{"row":314,"column":25},"end":{"row":314,"column":26},"action":"insert","lines":["e"],"id":3401}],[{"start":{"row":314,"column":22},"end":{"row":314,"column":26},"action":"remove","lines":["base"],"id":3402},{"start":{"row":314,"column":22},"end":{"row":314,"column":28},"action":"insert","lines":["base64"]}],[{"start":{"row":314,"column":29},"end":{"row":314,"column":30},"action":"insert","lines":[" "],"id":3403}],[{"start":{"row":314,"column":30},"end":{"row":314,"column":31},"action":"insert","lines":["{"],"id":3404}],[{"start":{"row":314,"column":31},"end":{"row":314,"column":32},"action":"insert","lines":["}"],"id":3405}],[{"start":{"row":314,"column":31},"end":{"row":316,"column":0},"action":"insert","lines":["","  ",""],"id":3406}],[{"start":{"row":317,"column":0},"end":{"row":354,"column":0},"action":"remove","lines":["AWS.config.update({ accessKeyId: \"AKIAIHXOSLZMOJRH3UMA\", secretAccessKey: \"3+9psVbKuD0vUiotFkJwhrZ9plo2sJCU74Nq5Nlt\" });","","// Create an s3 instance","const s3 = new AWS.S3();","","// Ensure that you POST a base64 data to your server.","// Let's assume the variable \"base64\" is one.","const base64Data = new Buffer(base64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64')","","// Getting the file type, ie: jpeg, png or gif","const type = base64.split(';')[0].split('/')[1]","","// Generally we'd have a userId associated with the image","// For this example, we'll simulate one","const userId = 1;","","// With this setup, each time your user uploads an image, will be overwritten.","// To prevent this, use a unique Key each time.","// This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.","const params = {","  Bucket: process.env.S3_BUCKET,","  Key: `${userId}.${type}`, // type is not required","  Body: base64Data,","  ACL: 'public-read',","  ContentEncoding: 'base64', // required","  ContentType: `image/${type}` // required. Notice the back ticks","}","","// The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database","// see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property","s3.upload(params, (err, data) => {","  if (err) { return console.log(err) }","  ","  // Continue if no error","  // Save data.Location in your database","  console.log('Image successfully uploaded.');","});",""],"id":3407}],[{"start":{"row":315,"column":2},"end":{"row":352,"column":0},"action":"insert","lines":["AWS.config.update({ accessKeyId: \"AKIAIHXOSLZMOJRH3UMA\", secretAccessKey: \"3+9psVbKuD0vUiotFkJwhrZ9plo2sJCU74Nq5Nlt\" });","","// Create an s3 instance","const s3 = new AWS.S3();","","// Ensure that you POST a base64 data to your server.","// Let's assume the variable \"base64\" is one.","const base64Data = new Buffer(base64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64')","","// Getting the file type, ie: jpeg, png or gif","const type = base64.split(';')[0].split('/')[1]","","// Generally we'd have a userId associated with the image","// For this example, we'll simulate one","const userId = 1;","","// With this setup, each time your user uploads an image, will be overwritten.","// To prevent this, use a unique Key each time.","// This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.","const params = {","  Bucket: process.env.S3_BUCKET,","  Key: `${userId}.${type}`, // type is not required","  Body: base64Data,","  ACL: 'public-read',","  ContentEncoding: 'base64', // required","  ContentType: `image/${type}` // required. Notice the back ticks","}","","// The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database","// see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property","s3.upload(params, (err, data) => {","  if (err) { return console.log(err) }","  ","  // Continue if no error","  // Save data.Location in your database","  console.log('Image successfully uploaded.');","});",""],"id":3408}],[{"start":{"row":352,"column":0},"end":{"row":353,"column":0},"action":"remove","lines":["",""],"id":3409}],[{"start":{"row":345,"column":0},"end":{"row":345,"column":2},"action":"insert","lines":["  "],"id":3411},{"start":{"row":346,"column":0},"end":{"row":346,"column":2},"action":"insert","lines":["  "]},{"start":{"row":347,"column":0},"end":{"row":347,"column":2},"action":"insert","lines":["  "]},{"start":{"row":348,"column":0},"end":{"row":348,"column":2},"action":"insert","lines":["  "]},{"start":{"row":349,"column":0},"end":{"row":349,"column":2},"action":"insert","lines":["  "]},{"start":{"row":350,"column":0},"end":{"row":350,"column":2},"action":"insert","lines":["  "]},{"start":{"row":351,"column":0},"end":{"row":351,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":334,"column":0},"end":{"row":334,"column":2},"action":"insert","lines":["  "],"id":3412},{"start":{"row":335,"column":0},"end":{"row":335,"column":2},"action":"insert","lines":["  "]},{"start":{"row":336,"column":0},"end":{"row":336,"column":2},"action":"insert","lines":["  "]},{"start":{"row":337,"column":0},"end":{"row":337,"column":2},"action":"insert","lines":["  "]},{"start":{"row":338,"column":0},"end":{"row":338,"column":2},"action":"insert","lines":["  "]},{"start":{"row":339,"column":0},"end":{"row":339,"column":2},"action":"insert","lines":["  "]},{"start":{"row":340,"column":0},"end":{"row":340,"column":2},"action":"insert","lines":["  "]},{"start":{"row":341,"column":0},"end":{"row":341,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":329,"column":0},"end":{"row":329,"column":2},"action":"insert","lines":["  "],"id":3413}],[{"start":{"row":325,"column":0},"end":{"row":325,"column":2},"action":"insert","lines":["  "],"id":3414}],[{"start":{"row":322,"column":0},"end":{"row":322,"column":2},"action":"insert","lines":["  "],"id":3415}],[{"start":{"row":318,"column":0},"end":{"row":318,"column":2},"action":"insert","lines":["  "],"id":3416}],[{"start":{"row":336,"column":4},"end":{"row":336,"column":7},"action":"insert","lines":["// "],"id":3418}],[{"start":{"row":329,"column":2},"end":{"row":329,"column":5},"action":"insert","lines":["// "],"id":3420}],[{"start":{"row":355,"column":0},"end":{"row":355,"column":2},"action":"remove","lines":["  "],"id":3421}],[{"start":{"row":354,"column":0},"end":{"row":355,"column":0},"action":"remove","lines":["",""],"id":3422}],[{"start":{"row":353,"column":0},"end":{"row":354,"column":0},"action":"remove","lines":["",""],"id":3423}],[{"start":{"row":352,"column":1},"end":{"row":353,"column":0},"action":"remove","lines":["",""],"id":3424}],[{"start":{"row":194,"column":65},"end":{"row":195,"column":0},"action":"insert","lines":["",""],"id":3425},{"start":{"row":195,"column":0},"end":{"row":195,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":195,"column":4},"end":{"row":195,"column":15},"action":"insert","lines":["uploadImage"],"id":3426}],[{"start":{"row":195,"column":4},"end":{"row":195,"column":5},"action":"insert","lines":["y"],"id":3427}],[{"start":{"row":195,"column":5},"end":{"row":195,"column":6},"action":"insert","lines":["i"],"id":3428}],[{"start":{"row":195,"column":6},"end":{"row":195,"column":7},"action":"insert","lines":["e"],"id":3429}],[{"start":{"row":195,"column":4},"end":{"row":195,"column":7},"action":"remove","lines":["yie"],"id":3430},{"start":{"row":195,"column":4},"end":{"row":195,"column":9},"action":"insert","lines":["yield"]}],[{"start":{"row":195,"column":9},"end":{"row":195,"column":10},"action":"insert","lines":[" "],"id":3431}],[{"start":{"row":195,"column":21},"end":{"row":195,"column":23},"action":"insert","lines":["()"],"id":3432}],[{"start":{"row":195,"column":22},"end":{"row":195,"column":23},"action":"insert","lines":["i"],"id":3433}],[{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"insert","lines":["m"],"id":3434}],[{"start":{"row":195,"column":24},"end":{"row":195,"column":25},"action":"insert","lines":["a"],"id":3435}],[{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"insert","lines":["g"],"id":3436}],[{"start":{"row":195,"column":26},"end":{"row":195,"column":27},"action":"insert","lines":["e"],"id":3437}],[{"start":{"row":195,"column":28},"end":{"row":195,"column":29},"action":"insert","lines":[";"],"id":3438}],[{"start":{"row":336,"column":12},"end":{"row":336,"column":33},"action":"remove","lines":["process.env.S3_BUCKET"],"id":3439},{"start":{"row":336,"column":12},"end":{"row":336,"column":13},"action":"insert","lines":["\""]}],[{"start":{"row":336,"column":13},"end":{"row":336,"column":14},"action":"insert","lines":["\""],"id":3440}],[{"start":{"row":336,"column":13},"end":{"row":336,"column":14},"action":"insert","lines":["w"],"id":3441}],[{"start":{"row":336,"column":14},"end":{"row":336,"column":15},"action":"insert","lines":["e"],"id":3442}],[{"start":{"row":336,"column":15},"end":{"row":336,"column":16},"action":"insert","lines":["d"],"id":3443}],[{"start":{"row":336,"column":16},"end":{"row":336,"column":17},"action":"insert","lines":["d"],"id":3444}],[{"start":{"row":336,"column":17},"end":{"row":336,"column":18},"action":"insert","lines":["i"],"id":3445}],[{"start":{"row":336,"column":18},"end":{"row":336,"column":19},"action":"insert","lines":["n"],"id":3446}],[{"start":{"row":336,"column":19},"end":{"row":336,"column":20},"action":"insert","lines":["g"],"id":3447}],[{"start":{"row":336,"column":20},"end":{"row":336,"column":21},"action":"insert","lines":["."],"id":3448}],[{"start":{"row":336,"column":21},"end":{"row":336,"column":22},"action":"insert","lines":["c"],"id":3449}],[{"start":{"row":336,"column":22},"end":{"row":336,"column":23},"action":"insert","lines":["o"],"id":3450}],[{"start":{"row":336,"column":23},"end":{"row":336,"column":24},"action":"insert","lines":["n"],"id":3451}],[{"start":{"row":336,"column":24},"end":{"row":336,"column":25},"action":"insert","lines":["t"],"id":3452}],[{"start":{"row":336,"column":25},"end":{"row":336,"column":26},"action":"insert","lines":["e"],"id":3453}],[{"start":{"row":336,"column":26},"end":{"row":336,"column":27},"action":"insert","lines":["n"],"id":3454}],[{"start":{"row":336,"column":27},"end":{"row":336,"column":28},"action":"insert","lines":["t"],"id":3455}],[{"start":{"row":336,"column":27},"end":{"row":336,"column":28},"action":"remove","lines":["t"],"id":3456}],[{"start":{"row":336,"column":26},"end":{"row":336,"column":27},"action":"remove","lines":["n"],"id":3457}],[{"start":{"row":336,"column":25},"end":{"row":336,"column":26},"action":"remove","lines":["e"],"id":3458}],[{"start":{"row":336,"column":24},"end":{"row":336,"column":25},"action":"remove","lines":["t"],"id":3459}],[{"start":{"row":336,"column":23},"end":{"row":336,"column":24},"action":"remove","lines":["n"],"id":3460}],[{"start":{"row":336,"column":22},"end":{"row":336,"column":23},"action":"remove","lines":["o"],"id":3461}],[{"start":{"row":336,"column":21},"end":{"row":336,"column":22},"action":"remove","lines":["c"],"id":3462}],[{"start":{"row":336,"column":20},"end":{"row":336,"column":21},"action":"remove","lines":["."],"id":3463}],[{"start":{"row":336,"column":20},"end":{"row":336,"column":21},"action":"insert","lines":["."],"id":3464}],[{"start":{"row":336,"column":21},"end":{"row":336,"column":22},"action":"insert","lines":["c"],"id":3465}],[{"start":{"row":336,"column":22},"end":{"row":336,"column":23},"action":"insert","lines":["o"],"id":3466}],[{"start":{"row":336,"column":23},"end":{"row":336,"column":24},"action":"insert","lines":["n"],"id":3467}],[{"start":{"row":336,"column":24},"end":{"row":336,"column":25},"action":"insert","lines":["t"],"id":3468}],[{"start":{"row":336,"column":25},"end":{"row":336,"column":26},"action":"insert","lines":["e"],"id":3469}],[{"start":{"row":336,"column":26},"end":{"row":336,"column":27},"action":"insert","lines":["n"],"id":3470}],[{"start":{"row":336,"column":27},"end":{"row":336,"column":28},"action":"insert","lines":["t"],"id":3471}],[{"start":{"row":337,"column":0},"end":{"row":338,"column":0},"action":"remove","lines":["    // Key: `${userId}.${type}`, // type is not required",""],"id":3472}]]},"ace":{"folds":[],"scrolltop":4256.0859375,"scrollleft":0,"selection":{"start":{"row":319,"column":26},"end":{"row":319,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":294,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1521638738933,"hash":"7a91c7c43f59c1062cf52f9a37f4792b6d45fc28"}