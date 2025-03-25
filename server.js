const express = require('express')

//Cấu hình View Engine trong Express.js để hiển thị giao diện bằng EJS hoặc một template engine khác.
const app = express();
const configViewEngine = require('./src/config/viewEngine');
configViewEngine(app);

//cau hinh duong dan vao route
const wedRoutes = require('./src/routes/wed');
app.use('/', wedRoutes);

require('dotenv').config();//app express

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const http = process.env.HTTP;


app.listen(port, http => {
    console.log(`Server is running at http://127.0.0.1:${port}`)
})