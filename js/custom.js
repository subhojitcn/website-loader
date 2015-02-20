$(document).ready(function(){
    
    //task check box
//    $('.input_class_checkbox_table').each(function(){
//    $(this).hide().after('<div class="class_checkbox_ttask" data-toggle="tooltip" data-placement="left" title="Mark this as complete and transfer task" />');
//        
//    });
    
    $('.class_checkbox_ttask').on('click',function(){
        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
    });
    
    //login check box
    $('.input_class_checkbox_lg').each(function(){
        $(this).hide().after('<div class="class_checkbox" />');
        
    });
    
    $('.class_checkbox').on('click',function(){
        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
    });
    
    
//    //task detail check box
//    $('#task_detail_input').each(function(){
//    $(this).hide().after('<div class="class_checkbox" data-toggle="tooltip" data-placement="right" title="Mark this as complete and transfer task" />');
//        
//    });
//    
//    $('.class_checkbox').on('click',function(){
//        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
//    });
//    
//    
//    //seach filed checkbox
//    $('.filtercheckbox').each(function(){
//    $(this).hide().after('<div class="filter_checkbox" />');
//        
//    });
//    
//    $('.filter_checkbox').on('click',function(){
//        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
//    });
    
    
    
    //table search drop
    $('#table_drop_trggr_one').click(function(){
        $('#searchfiled_one').slideToggle(150);
    });
    $('#table_drop_trggr_two').click(function(){
        $('#searchfiled_two').slideToggle(150);
    });
    $('#table_drop_trggr_three').click(function(){
        $('#searchfiled_three').slideToggle(150);
    });
    $('#table_drop_trggr_four').click(function(){
        $('#searchfiled_four').slideToggle(150);
    });
    $('#table_drop_trggr_five').click(function(){
        $('#searchfiled_five').slideToggle(150);
    });
    $('#table_drop_trggr_six').click(function(){
        $('#searchfiled_six').slideToggle(150);
    });
    $('#table_drop_trggr_seven').click(function(){
        $('#searchfiled_seven').slideToggle(150);
    });
    $('#table_drop_trggr_eight').click(function(){
        $('#searchfiled_eight').slideToggle(150);
    });
    $('#table_drop_trggr_nine').click(function(){
        $('#searchfiled_nine').slideToggle(150);
    });
    
    
    //login dropdown
    $('#userlogout').click(function(){
        $('#login_itemdrp_cont').slideToggle(150);
        return false;
    });
    
    
    //task detail popup
    $('#excla_trigger').click(function(){
        $('#exlaPop').fadeToggle();
    });
    
    
    
    //bootstrap tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
    
    //bootstrap selectbox
     $('.selectpicker').selectpicker();
    
    //bootstrap datepicker
    $('#datetimepicker2').datetimepicker();
    
    //bootstrap datepicker
    $('#sandbox-container input').datepicker({
        todayBtn: "linked",
        orientation: "bottom auto",
        clearBtn: true,
        todayHighlight: true
    });
    
    $('#sandbox-container2 input').datepicker({
        todayBtn: "linked",
        todayHighlight: true,
        orientation: "bottom auto"
    });
    
    
    
    $("table.sieve").sieve();
    
    
    
    
    
});







