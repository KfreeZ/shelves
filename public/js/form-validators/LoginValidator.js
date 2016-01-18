function LoginValidator(){

// bind a simple alert window to this controller to display any errors //

    this.loginErrors = $('#errModal');
    this.loginErrors.modal({ show : false, keyboard : true, backdrop : true });

    this.showLoginError = function(t, m)
    {
        $('#errModal .modal-title').text(t);
        $('#errModal .modal-body').text(m);
        this.loginErrors.modal('show');
    }   

}

LoginValidator.prototype.validateForm = function()
{
    if ($('#user-tf').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid username');
        return false;
    }   else if ($('#pass-tf').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid password');
        return false;
    }   else{
        return true;
    }
}