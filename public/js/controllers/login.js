$(document).ready(function(){
    // alert("ajax");
    var lv = new LoginValidator();
    // var lc = new LoginController();


// main login form //
    $('#login-nav').ajaxForm({
        beforeSubmit : function(formData, jqForm, options){
            // alert("before");
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
                //jump
                // window.location.href = '/home';

                //res is not defined
                // alert(res.body);

                // responseText is sent from server
                $('.navbar-text').text('welcome ' + responseText);

                // remove CSS class
                $('.dropdown').removeClass('open');

                // modify attr
                $('.dropdown-toggle').attr("aria-expanded",false);

                //use b selector to change text without cover the following span
                $('.dropdown-toggle b').text('options');

            }
        },
        error : function(e){
            // alert("fail");
            // this must set in the LoginValidator, or the modal will not show, don't konw why yet
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