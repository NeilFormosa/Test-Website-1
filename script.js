function ValidateAndCalculate(){
    var num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);
    var num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);
    var method = document.querySelector("input[name='option']:checked").value;
    var round = document.getElementById("yesOrNo").value;
    var valid = false;

    if (!num1 || !num2){
        alert("Please check your inputs and try again.")
        valid = false;
    }else{
        valid = true;
    }

    if (valid = true){
        if (method == "add"){
            var answer = num1 + num2;
        }else if(method == "subtract"){
            var answer = num1 - num2;
        }else if(method == "multiply"){
            var answer = num1 * num2;
        }else if(method == "divide"){
            var answer = num1 / num2;
        }  
    }

    if (round == "yes"){
        answer = Math.round(answer);
    }
    document.getElementById("answer").innerHTML = answer;
}

function validateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var numberString = number.toString();
    var comment = document.getElementById('comment').value;

    var valid = true;
    if (!name){
        document.getElementById('name').style.borderColor = "red";
        valid = false;
    }else{
        document.getElementById('name').style.borderColor = "green";
    }
    if(!email){
        document.getElementById('email').style.borderColor = "red";
        valid = false;
    }else{
        document.getElementById('email').style.borderColor = "green";
    }
    if (numberString.length < 8){
        document.getElementById('number').style.borderColor = "red";
        valid = false;
    }else{
        document.getElementById('number').style.borderColor = "green";
    }
    if (!comment){
        document.getElementById('comment').style.borderColor = "red";
        valid = false;
    }else{
        document.getElementById('comment').style.borderColor = "green";
    }

    if (!valid){
        alert("Note: All inputs are Mandatory and the contact number must be at least 8 digits long. Please amend your entries and try again.");
    }else{
        window.open("mailto:calculators@gmail.com", '_blank');
    }


    

}