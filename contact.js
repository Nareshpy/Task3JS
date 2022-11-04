function maleGreet(){
    // document.getElementById('maleAlert').innerHTML="Hello Sir"; 
    alert("Hello Sir");
}
function femaleGreet(){
    // document.getElementById('femaleAlert').innerHTML="Hello Lady"; 
    alert("Hello Lady");
}
function promoFunction(){
    currentState=document.getElementById('state').value;
    if(currentState){
        document.getElementById('promo').value=currentState+"-PROMO";
        console.log(currentState)
    }
}
function alertBox(){
    document.getElementById('alertMsg').innerHTML="Please fill all the required fields";
}
function nameCheck(){
    let name=document.getElementById('name').value;
    if (name==""){
        document.getElementById('blankName').style.color='red';
        document.getElementById('blankName').innerHTML="Name is required";
        return false;
    }
    else{
        return true;
    }
}
function isEmptyName(){
    let name=document.getElementById('name').value;
    if (name==""){
        document.getElementById('blankName').style.color='red';
        document.getElementById('blankName').innerHTML="Name is required";    
    }
    else{
        document.getElementById('blankName').innerHTML="";
    }
}
function isEmptyMail(){
    let name=document.getElementById('mail').value;
    if (name==""){
        document.getElementById('blankMail').style.color='red';
        document.getElementById('blankMail').innerHTML="Mail is required";    
    }
    else{
        document.getElementById('blankMail').innerHTML="";
    }
}
function isEmptyOrg(){
    let name=document.getElementById('orgName').value;
    if (name==""){
        document.getElementById('blankOrg').style.color='red';
        document.getElementById('blankOrg').innerHTML="OrgnisationName is required";    
    }
    else{
        document.getElementById('blankOrg').innerHTML="";
    }
}
function orgCheck(){
    let org=document.getElementById('orgName').value;
    if(org==""){
       document.getElementById('blankOrg').style.color='red';
       document.getElementById('blankOrg').innerHTML="OrganisationName is required"; 
       return false; 
    }
    else{
        return true;
    }   
}
function mailCheck(){
    let mail=document.getElementById('mail').value;
    if(mail==""){
        document.getElementById('blankMail').style.color='red';
        document.getElementById('blankMail').innerHTML="Email is required";
        return false;
    }
    else{
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.match(mailformat)){
           return true;
        }
        else{
            document.getElementById('blankMail').style.color='red';
            document.getElementById('blankMail').innerHTML="Enter valid mail";
            return fasle;
        }
    }
}
function validate(){
    let nameBool= nameCheck();
    let orgBool=orgCheck();
    let mailBool=mailCheck();
    if(nameBool && orgBool && mailBool){
        return true
    }
    else{
        alertBox();
        return false
    }
}
function clearForm(){
    document.getElementById('promo').innerHTML="";
    document.getElementById('blankName').innerHTML="";
    document.getElementById('blankMail').innerHTML="";
    document.getElementById("formPage").reset();
}