// A > 79, 
// B - 60 to 79, 
// C -  59 to 49, 
// D - 40 to 49, 
// E - less 40.


//declares and initializes the studentMarks variable, getting the value from a user input
const studentmark = prompt('Please enter the student student marks:');

//A function to calculate the student grade from their marks
function studentGrader(studentmark){
        //An if statement that checks and ensures that the values entered are between 0 & 100, if not, user is prompted to enter valid marks
        if (studentmark >= 0 && studentmark <= 100){
            //switch statement that checks the range for the student marks and assigns a grade depending on the marks
            //if the marks are within the range of any of the cases, thus evaluating to TRUE, the student is assigned the grade in that Case.
            switch (true) {
                case (studentmark > 79):
                    alert("Student has scored an A")//The student grade is printed out
                    break;
                case(studentmark >= 60 && studentmark <= 79):
                    alert("Student has scored an B")
                    break;
                case(studentmark >= 49 && studentmark <= 59):
                    alert("Student has scored an C")
                    break; 
                case(studentmark >= 40 && studentmark <= 49):
                    alert("Student has scored an D")
                    break; 
                case(studentmark < 40):
                    alert("Student has scored an E")

                default:
                    break;
            }
        }else{
            alert("Please enter a valid grade!")//Prompts the user to enter a valid grade between 0 & 100
        }
    
    
}
studentGrader(studentmark);//calls the studentGrader function, passing the student mark as the argument
