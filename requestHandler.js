var requestHandler = function (fs, mongoose) {
    var _events = require('events');
    var event = new _events.EventEmitter();
    event.on('SendResponse', function (response, data) {
        response.send(data);
    });
    var logWriter = require("./Modules/additions/logWriter.js")(fs);

    function getModules(req, res) {
        if (req.session && req.session.loggedIn) {
            modules.get(req.session.uId, res);
        } else {
            res.send(401);
        }
    };
}

//---------EXPORTS----------------------------------------
module.exports = requestHandler;
