$(function(){

    function pjaxPageLoad(){
        $('.widget').widgster();
        $('#datetimefromorders').datetimepicker({
            format: 'YYYY-MM-DD HH:mm'
        });
        $('#datetimetoorders').datetimepicker({
            format: 'MM/DD/YYYY'
        });
        $('[data-toggle=tooltip]').tooltip();
        $("#mask-size-cargo").inputmask({mask: "999x999x999"});
        $("#time-load-from").inputmask({mask: "99:99"});
        $("#time-load-to").inputmask({mask: "99:99"});
        $("#time-load-break-from").inputmask({mask: "99:99"});
        $("#time-load-break-to").inputmask({mask: "99:99"});
        $("#time-unload-from").inputmask({mask: "99:99"});
        $("#time-unload-to").inputmask({mask: "99:99"});
        $("#time-unload-break-from").inputmask({mask: "99:99"});
        $("#time-unload-break-to").inputmask({mask: "99:99"});
        new Switchery(document.getElementById('checkbox-ios1'));
        new Switchery(document.getElementById('checkbox-ios2'));
        new Switchery(document.getElementById('checkbox-ios3'));
    }

    pjaxPageLoad();
    SingApp.onPageLoad(pjaxPageLoad);

});