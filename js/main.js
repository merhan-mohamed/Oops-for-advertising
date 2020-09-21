
$(document).ready(function(){
$('#iconified').on('click',function(){

    var input = $(this);
    if(input.val().length === 0){
        input .addClass('empty');

    } else {
        input.removeClass('empty')
    }

});
});


    

            
    
$(document).ready(function(){
    $('#open').click(function(){
        $('input').attr('type','text');
        $(this).hide();
        $('#close').show();
    })
}) ;
$('#close').click(function(){
    $('input').attr('type','password');
    $(this).hide();
    $('#open').show();
});





     
            