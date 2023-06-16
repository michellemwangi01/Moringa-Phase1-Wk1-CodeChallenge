// A > 79, 
// B - 60 to 79, 
// C -  59 to 49, 
// D - 40 to 49, 
// E - less 40.


//***************************************/
const studentmark = prompt('Please enter student studentmarks:');
function studentGrader(studentmark){
        if (studentmark >= 0 && studentmark <= 100){
            switch (true) {
                case (studentmark > 79):
                    console.log("Student has scored an A")
                    
                    break;
                case(studentmark >= 60 && studentmark <= 79):
                    console.log("Student has scored an B")
                    break;
                case(studentmark >= 49 && studentmark <= 59):
                    console.log("Student has scored an C")
                    break; 
                case(studentmark >= 40 && studentmark <= 49):
                    console.log("Student has scored an D")
                    break; 
                case(studentmark < 40):
                    console.log("Student has scored an E")

                default:
                    break;
            }
        }else{
            console.log("Please enter a valid grade!")
        }
    
    
}
studentGrader(studentmark);
