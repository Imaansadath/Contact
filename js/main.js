
$(document).ready(function() {

    $("form").submit(function(e){
        e.preventDefault();
        if (!$('#name').val()) {
            alert("Fill Name  field");
        } else if(! $('#txt').val()) {
            alert("Fill  Msg field");
        } else{
            alert("successful");
        }
    });

});
