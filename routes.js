'use strict';

exports = module.exports = function(app) {
    app.get('/', require('./controller/index').init);
};