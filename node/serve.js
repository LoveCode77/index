const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 单一请求
app.get('/save', (req, res) => {
    console.log("save被请求!");
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('感谢你的留言,3日之内回复!');
});
app.listen(9027, () => {
    console.log('Server started on port 9027');
});


