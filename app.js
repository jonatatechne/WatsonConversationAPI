var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/message', (req, res) => {
    var watson = require('watson-developer-cloud');

    var assistant = new watson.AssistantV1({
        url: 'https://gateway.watsonplatform.net/assistant/api',
        username: 'apikey',
        password: '9Uw-nNY4M_zB_XRqJA3JP3Dq4T6ANOU--3buOMm4HMNT',
        version: '2018-09-20'
    });

    var context = {};

    assistant.message({
        workspace_id: 'c8a40e37-94c8-4aa0-99c4-ce34f3b14bd1',
        input: { 'text': 'Hello' },
        context: context
    }, function (err, response) {
        if (err) {
            console.log('error:', err);
            res.send(err);
        } else {
            console.log(JSON.stringify(response, null, 2));
            res.send(response);
        }
    });
});
