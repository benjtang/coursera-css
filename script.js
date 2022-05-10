function compute()
{
    //Get principal from form and check if positive
    var principal = document.getElementById("principal");
    if(parseInt(principal.value) <= 0){
        alert("Please enter a positive number");
        principal.focus();
        return false;
        } else {
        principalval = parseInt(principal.value)    
        }

    // Get additional values from form    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principalval * years * rate/100;
    var total = interest + 0 * principalval;
    var year = new Date().getFullYear()+parseInt(years);

    // Create result content
    document.getElementById("result").innerHTML = "</br>If you deposit " + principalval;
    document.getElementById("result").innerHTML += "</br>at an interest rate of " + rate +"%";
    document.getElementById("result").innerHTML += "</br>You will receive an amount of " + total;
    document.getElementById("result").innerHTML += "</br>in the year " + year;

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        