$(document).ready(function(){
    var lv = new LoginValidator();
    // var lc = new LoginController();
// main login form //
    $('#login-nav').ajaxForm({
        beforeSubmit : function(formData, jqForm, options){
             // if (lv.validateForm() == false){
            //     return false;
            // }   else{
            // append 'remember-me' option to formData to write local cookie //
                formData.push({name:'remember-me', value:$("input:checkbox:checked").length == 1})
                return true;
            // }
        },
        success : function(responseText, status, xhr, $form){
            // alert("success");
            if (status == 'success') {
                window.location.href = '/home'; 
            }
        },
        error : function(e){
            alert("Failure");
            lv.showLoginError('Login Failure', 'Please check your username and/or password');
        }
    });

    // // bind to the form's submit event 
    // $('#login-nav').submit(function() {
    //     var options = { 
    //         //target:        '',   // target element(s) to be updated with server response 
    //         //beforeSubmit:  showRequest,  // pre-submit callback 
    //         //success:       showResponse  // post-submit callback 
     
    //         // other available options: 
    //         url:       '/'         // override for form's 'action' attribute 
    //         //type:      type        // 'get' or 'post', override for form's 'method' attribute 
    //         //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
    //         //clearForm: true        // clear all form fields after successful submit 
    //         //resetForm: true        // reset the form after successful submit 
     
    //         // $.ajax options can be used here too, for example: 
    //         //timeout:   3000 
    //     }; 

    //     // inside event callbacks 'this' is the DOM element so we first 
    //     // wrap it in a jQuery object and then invoke ajaxSubmit 
    //     $(this).ajaxSubmit(options); 
    //     alert("post here");
    //     // !!! Important !!! 
    //     // always return false to prevent standard browser submit and page navigation 
    //     return false; 
    // }); 

    $('#user-tf').focus();
})