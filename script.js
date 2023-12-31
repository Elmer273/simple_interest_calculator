function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const amount = parseInt(principal) + parseFloat(interest);
    const result = document.getElementById("result");
    const year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = 
            "If you deposit $" + "<mark>" + principal + "</mark>" 
            + ",<br> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" 
            + "<br> You will receive an amount of $" + "<mark>" + amount + "</mark>" 
            + ",<br> in the year " + "<mark>" + year + "</mark>" + "<br>";
    }
}

function updateRate() {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        