$(document).ready(function(){
    var lv = new LoginValidator();
    // var lc = new LoginController();
// main login form //
    $('#login-dropdown').ajaxForm({
        beforeSubmit : function(formData, jqForm, options){
            alert("beforeSubmit");
            // if (lv.validateForm() == false){
            //     return false;
            // }   else{
            // append 'remember-me' option to formData to write local cookie //
                formData.push({name:'remember-me', value:$("input:checkbox:checked").length == 1})
                return true;
            // }
        },
        success : function(responseText, status, xhr, $form){
            lv.showLoginError('xxx', 'success');
            if (status == 'success') {
                window.location.href = '/home'; 
            }
        },
        error : function(e){
            lv.showLoginError('Login Failure', 'Please check your username and/or password');
        }
    }); 
    $('#user-tf').focus();
})