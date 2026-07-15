function checkStudent() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let gpa = Number(document.getElementById("gpa").value);
    let attendance = Number(document.getElementById("attendance").value);
    let credits = Number(document.getElementById("credits").value);
    let failed = Number(document.getElementById("failed").value);
    let income = Number(document.getElementById("income").value);
    let fine = Number(document.getElementById("fine").value);
    let tuition = (document.getElementById("tuition").value);
    let discipline = (document.getElementById("discipline").value);

    let result = "";

    if(age<18){
        result = "Admission Denied.";
    }

    else if(age>60){
        result = "Special Approval Required.";
    }

    else if(tuition =="No"){
        result = "Registration Blocked.";
    }

    else if(fine>500){
        result = "Pay Library Fine.";
    }

    else if(attendance<60){
        result = "Exam Not Allowed.";
    }
    
    else if(discipline=="Yes"){
        result = "Meet Disciplinary Committee."
    }

    else if(gpa>=3.9 && income<20000){
        result = "Outstanding Student - 100% Scholarship.";

    }

    else if(gpa<=3.5){
        result = "50% Scholarship.";
    }

    else if(gpa>=3){
        result = "25% Scholarship.";
    }

    else {
        result = "No Scholarship.";

    }

    if(credits>=120){

        if(failed==0){
            result = result + "<br><br>Eligible to Graduate.";
        }

        else{
            result = result + "<br><br>Graduate after clearing failed courses.";

        }

    }

    else{
        result = result + "<br><br>Not enough credits to graduate.";

    }

    document.getElementById("result").innerHTML= "<strong>" + name + "</strong><br><br>" + result;

}