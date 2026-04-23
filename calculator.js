let txtFN,txtSN,txtRes,pmsg;

function setFocus(){
    txtFN=document.getElementById("txtFN");
    txtSN=document.getElementById("txtSN");
    txtRes=document.getElementById("txtRes");
    pmsg=document.getElementById("pmsg");
    txtFN.focus();
}

function validateInputs() {

    if (txtFN.value === "" || isNaN(txtFN.value)) {
        pmsg.innerHTML = "Please enter a valid numeric number for first number";
        txtFN.focus();
        return false;
    }
    if (txtSN.value === "" || isNaN(txtSN.value)) {
        pmsg.innerHTML = "Please enter a valid numeric number for second number";
        txtSN.focus();
        return false;
    }
    pmsg.innerHTML = "";
    return true;
}

function calculate([op]){
    if (!validateInputs()) {
        txtRes.value = "";
        return;
    }

    let num1 = Number(txtFN.value);
    let num2 = Number(txtSN.value);

    switch(op) {
        case "+":
            txtRes.value = num1 + num2;
            break;
        case "-":
            txtRes.value = num1 - num2;
            break;
        case "*":
            txtRes.value = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                pmsg.innerHTML = "Cannot divide by zero";
                txtSN.focus();
                txtRes.value = "";
                return;
            }
            txtRes.value = num1 / num2;
            break;
        default:
            pmsg.innerHTML = "Invalid operation";
            txtRes.value = "";
            return;
    }
    pmsg.innerHTML = "";
}

function clrmsg()
{
    pmsg.innerHTML="";
}

function clr() 
{   
    txtFN.value="";
    txtSN.value="";
    txtRes.value="";
    pmsg.innerHTML=""; 
    txtFN.focus();
}