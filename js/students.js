var studentsIndex=0;

function showNextStudentMessage(){
    showStudentMessage(studentsIndex+1);
}

function showPreviousStudentMessage(){
    showStudentMessage(studentsIndex-1);
}

function showStudentMessage(index){
    var messages=document.getElementsByClassName("students-message");
    var i=0;

    if (index>=messages.length){
        studentsIndex=0;
    }
    else if(index<0){
        studentsIndex=messages.length-1;
    }
    else{
        studentsIndex=index;
    }

    for(i=0;i<messages.length;i++){
        messages[i].classList.remove("students-message--active");
    }

    messages[studentsIndex].classList.add("students-message--active");

}