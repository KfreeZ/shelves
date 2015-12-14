'use strict';

var AM = require('./modules/AccountManager')

module.exports = function(app) {
    app.get('/', 
        function(req, res)
        {
            res.render('index', {title: 'Shelves'});
        }
    );

    app.post('/', 
        function(req, res)
        {
            AM.manualLogin(req.body['user'], req.body['pass'],
                function(e, o){
                    if (!o){
                        res.status(400).send(e);
                    }   else{
                        req.session.user = o;
                        if (req.body['remember-me'] == 'true'){
                            res.cookie('user', o.user, { maxAge: 900000 });
                            res.cookie('pass', o.pass, { maxAge: 900000 });
                        }
                        res.status(200).send(o);
                    }
                }
            );
        }
    );

    app.get('/SignUp',
        function(req, res) 
        {
            res.render('signup', {  title: 'SignUp'});
        }
    );
    
    app.post('/SignUp',
        function(req, res)
        {
            AM.addNewAccount(
                {name    : req.body['name'],
                    email   : req.body['email'],
                    // user    : req.body['user'],
                    pass    : req.body['pass']
                    // country : req.body['country']
                }, 
                function(e)
                {
                    if (e){
                        res.status(400).send(e);
                    }   else{
                        res.status(200).send('ok');
                    }
                }
            );
        }
    );
};