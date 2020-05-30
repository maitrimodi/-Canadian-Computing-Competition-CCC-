window.onload = function(){
    var formHandle = this.document.forms[0];
    formHandle.onsubmit = processForm;

    function processForm(){
        //getting values from the user input
        var s = document.getElementById("s_treat");
        var m = document.getElementById("m_treat");
        var l = document.getElementById("l_treat");
        var result = document.getElementById("result");

        //formula to calculate Barley's happiness
        var formula = (1*s.value) + (2 * m.value) + (3 * l.value);

        //if result of the formula is greater than or equal to 10 then Barley is Happy
        if( formula >= 10){
            result.innerHTML = "Barley is Happy"; 
        }

        //else Barley is sad
        else{
            result.innerHTML = "Barley is Sad";
        }
        return false;
    }
}