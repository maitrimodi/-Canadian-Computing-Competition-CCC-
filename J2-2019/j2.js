window.onload = function(){
    var formHandle = this.document.forms[0];
    formHandle.onsubmit = processForm;
    //getting number of lines for the next input
    var no_of_lines = document.getElementById("input_lines");

    function processForm(){
        var input_btn = document.getElementById("input_btn");
       input_btn.onclick = display;
        return false;
    }

    function display(){
         var input_array = [];
        input_array = document.getElementById("input");
        //making text area the size of input lines provided by the user
        input_array.rows = no_of_lines.value;
        var symbol_input = document.getElementById("symbol_input");
        symbol_input.onclick = calculate;
        
        function calculate(){
            var split_array = [];
            //splitting array by next line to seperate out single input of the user
            split_array = input_array.value.split("\n");
        var display = document.getElementById("display");

        //loop till the number of input lines
        for(var i =0 ; i<no_of_lines.value ; i++)
        {
            //splitting the array by space
            var single_data = split_array[i].split(" ");
            //so if user input is 9 + -> then output will be ++++++++++
            for(var j=0; j<single_data[0]; j++){
                display.innerHTML += single_data[1];
            }
            display.innerHTML += "</br>";
        }
        
        }
        
    }
    
}
