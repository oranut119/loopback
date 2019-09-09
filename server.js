'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');
const expressConf = require('./src/config/express');
const app = expressConf();
const logHandle = require('./src/utils/logs/logHandle');
const envServer = JSON.parse(process.env.server);
const envApp = JSON.parse(process.env.app);
const envService = JSON.parse(process.env.service);
const appLog = logHandle('');
const mongoose = require('mongoose');

/* ------------- [START INITIAL APPLICATION] ------------ */
if (envServer.app_https) {
    const privateKey = fs.readFileSync(envServer.KEY);
    const certificate = fs.readFileSync(envServer.CERT);
    const options = {
      key: privateKey,
      cert: certificate,
      rejectUnauthorized: false
    }
    https.createServer(options, app).listen(envServer.app_port);
    appLog.info(`Application Server running at port: ${envServer.app_port}`);
} else {
    http.createServer(app).listen(envServer.app_port);
    appLog.info(`Application Server running at port: ${envServer.app_port}`);
}

if (envApp.enable_mongodb) {
    mongoose.set("useNewUrlParser", true);
    let { ip, port, path } = envService.mongodb.default;
    let url_mongoDB = `${ip}:${port}${path}`;
    mongoose.connect(url_mongoDB, (err) => {
        if (err) {
            let db = mongoose.connection;
            db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        } else {
            console.log('MongoDB  URL: ' + url_mongoDB);
            console.log('MongoDB connection success ...');
        }
    });
    mongoose.Promise = global.Promise;
}
/* ------------- [END INITIAL APPLICATION] ------------ */

module.exports = app;
