//submit button won't work until press multiple times
//I tried to find the solution but couldn't get it
//Once the text area size is changed you will know that the form is submitted

window.onload = function(){
    var formHandle = this.document.forms[0];
    //getting number of lines for the next input
    var no_of_lines = document.getElementById("input_lines");
    var result = document.getElementById("result");
    formHandle.onsubmit = processForm;

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
        var symbol_input = document.getElementById("symbol_input_btn");
        symbol_input.onclick = calculate;

        function calculate(){
            var split_array = [];
            //splitting array by next line to seperate out single input of the user
            split_array = input_array.value.split("\n");
           
            //loop till the number of input lines
            for(var i=0 ; i<no_of_lines.value ; i++)
            {
                //by default the value of the count will be 1
                var count = 1;

                //removing all the extra white spaces to get the perfect length of the input
                console.log(split_array[i].trim().length);

                //rendering loop till the length of single input
                for(var j=0 ; j<split_array[i].trim().length ; j++)
                {
                    console.log(split_array[i].charAt(j));

                    //if the current character is equal to the next character then count variable will be increased by 1
                    if(split_array[i].charAt(j) === split_array[i].charAt(j+1))
                    {
                        count++;
                    }
                    else{
                        // if the current character is not equal to the next character then it will print the count and the symbol
                        result.innerHTML += count + " " + split_array[i].charAt(j) + " "; 

                        //And again the value of the count will be set to one
                        count = 1;

                    }
                  
                }
                
                result.innerHTML += "<br/>";
            }
        }
    }
}