var path = require('path')
const express = require('express')
let serverDB = require('./webAPI');

const app = express()

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const FormData = require('form-data');

const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

const checkAricleAPI = async url => {
    const formdata = new FormData();
    formdata.append("key", process.env.MY_API_KEY);
    formdata.append("url", url);

    const request = await fetch("https://api.meaningcloud.com/lang-4.0/identification", {
        method: 'POST',
        body: formdata,
    });

    try {
        const response = await request.json();
        return response;
    } catch (error) {
        console.log('error', error);
        return { code: -1, msg: `An error occurred ${error}` }
    }
}

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.get('/checkArticle', function(req, res) {
    const query = req.query;
    if (Object.keys(serverDB).includes(query.url)) {
        console.log('Server DB:', serverDB);
        res.send({ status: 0, data: serverDB[query.url] });
        return;
    }
    checkAricleAPI(query.url).then(data => {
        switch (data.status.code) {
            case 0:
                serverDB = {...serverDB, [query.url]: data.language_list };
                res.send({ status: 0, data: data.language_list });
                break;
            case 200:
                res.send({ status: 200, msg: `An error occurred ${data.status.msg}` });
                break;
            default:
                res.send({
                    status: -1,
                    msg: `An error occurred:${data.status.code ? '('+data.status.code+')' : ''}\n${data.status.msg ? data.status.msg : ''}!`
                });
                break;
        }
    });

});