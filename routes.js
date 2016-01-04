'use strict';

var AM = require('./models/AccountManager')

module.exports = function(app) {
    app.get('/', 
        function(req, res)
        {
            // check if the user's credentials are saved in a cookie //
            if (req.cookies.user == undefined || req.cookies.pass == undefined){
                res.render('index', {title: 'Shelves'});
            } else {
                // attempt automatic login
                AM.autoLogin(req.cookies.user, req.cookies.pass,
                    function(o){
                        if (o != null){
                            req.session.user = o;
                            res.redirect('/home');
                        } else {
                            res.render('index', {title: 'Shelves'});
                        }
                    }
                );
            }
        }
    );

    app.post('/', 
        function(req, res)
        {
            AM.manualLogin(req.body['email'], req.body['passwd'],
                function(e, o){
                    if (!o){
                        res.status(400).send(e);
                    }   else{
                        console.log(o);
                        //dont konw how to handle session now
                        //req.session.user = o;
                        if (req.body['remember-me'] == 'true'){
                            res.cookie('email', o.email, { maxAge: 900000 });
                            res.cookie('passwd', o.passwd, { maxAge: 900000 });
                        }
                        res.status(200).send(o);
                    }
                }
            );
        }
    );

    app.get('/home',
        function(req, res) {
            if (req.session.email == null){
            // if user is not logged-in redirect back to login page //
                res.redirect('/');
            } else {
                res.render('home', {
                    title : 'Shelves',
                    udata : req.session.email
                });
        }
    });

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