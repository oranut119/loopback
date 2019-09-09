# DEMO Project NodeJS

## Installation
For installing the node_modules.
```bash
npm install
```
This application uses [PM2](http://pm2.keymetrics.io)
make sure you're already installing the [PM2](http://pm2.keymetrics.io) or not.
If not, Run
```bash
npm install pm2@latest -g
```
Visit [PM2](http://pm2.keymetrics.io) for more information.

## PM2 command line
* **Start** → `pm2 start pm2.json`
* **Stop** → `pm2 stop pm2.json` OR `pm2 kill`
* **Restart** → `pm2 restart pm2.json`
* **Display log** → `pm2 log`
* **List process** → `pm2 list`

Visit [PM2](http://pm2.keymetrics.io) for more command line.

## API
This project has 2 example api.
1. **getCurrentTime**
```
    # REQUEST
    [Method] → GET
    [Url] → /api/getCurrentTime

    # RESPONSE
    [Body] → {
        "resultCode": "20000",
        "developerMessage": "success",
        "currentTime": "1:52:36 PM"
    }
```

2. **generateFullName**
```
    # REQUEST
    [Method] → POST
    [Url] → /api/generateFullName
    [Body] → {
	    "firstName": "Tony", // required
	    "lastName": "Stark"  // required
    }

    # RESPONSE
    [Body] → {
        "resultCode": "20000",
        "developerMessage": "success",
        "fullName": "Tony Stark"
    }
```

## Log
This project is using [commonlog-kb](https://www.npmjs.com/package/commonlog-kb).