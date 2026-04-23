let txtFN,txtSN,txtRes,pmsg;

function setFocus(){
    txtFN=document.getElementById("txtFN");
    txtSN=document.getElementById("txtSN");
    txtRes=document.getElementById("txtRes");
    pmsg=document.getElementById("pmsg");
    txtFN.focus();
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

function add(){
    if (!validateInputs()) return;

    txtRes.value = Number(txtFN.value) + Number(txtSN.value);
}

function minus(){
    if (!validateInputs()) return;
    
    txtRes.value = Number(txtFN.value) - Number(txtSN.value);
}

function multiply(){
    if (!validateInputs()) return;

    txtRes.value = Number(txtFN.value) * Number(txtSN.value);
}

function divide(){
    if (!validateInputs()) return;
    
    var num2 = Number(txtSN.value);
    if (num2 === 0) {
        pmsg.innerHTML = "Cannot divide by zero";
        txtSN.focus();
        return;
    }
    
    txtRes.value = Number(txtFN.value) / num2;
}