// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, net salary. 

//Step 1. Gross Income = Basic salary + allowances + commissions. 
//Step 2. Taxable Income = Gross Income - all deductions/exemptions allowed by law e.g. NSSF, private pension.

// Calculation of PAYE
// Gross Income = Basic Salary + Allowances + Commissions + Other Emoluments
// Taxable Income = Gross Income – all deductions/exemptions allowed by law e.g. NSSF, private pension
// Taxable income obtained after step 2 must be applied to the tax slab.
// Total PAYE tax = Sum of the marginal taxes from step 3
// Tax Payable = Total PAYE – Total Relief e.g. Personal Relief, Insurance Relief


//Declares the global variables to be used in the program
let grossSalary, taxableIncome, taxDeductions, netSalary, NHIF, NSSF, NSSFType, PAYE
const personalRelief = 2400//initialize the constant varible personal relief
let basicSalary, benefits = 0;

//accept user input for global variables basic salary and benefits, saves the input into the respective variables and converts each into a number
basicSalary = prompt("Please enter your basic salary: ")
basicSalary = parseInt(basicSalary,10)
benefits = prompt("Please enter your monetary benefits: ")
benefits = parseInt(benefits,10)

//MONTHLY TAXABLE INCOME CALCULATOR FUNCTION - A function that calculates and returns taxable income from the gross salary
function taxableIncomeCalculator(grossSalary){
    //The while statement contains a prompt that accepts a number from the user that indicates which NSSF type is to be used in the program. As long as the values entered are incorrect, the prompt continues to display till the user enters the expected input
    let NSSFTypeString = "0";
    while(NSSFTypeString !== "1" && NSSFTypeString !== "2" && NSSFTypeString !== "3" && NSSFTypeString !== "4"){
        NSSFTypeString = prompt("Please select one option for the NSSF Type (enter 1, 2 or 3):\n 1. Old Rates \n 2. Tier I \n 3. Tier II \n 4.Tier I & Tier II")
    }

    //NSSFType = 4

    NSSFType = parseInt(NSSFTypeString,10);//changes the user input into a number from a string and saves it into a new variable
    //The if statement sets the value of the NSSF variable depending on the selection made by the user
    if(NSSFType == 1){
        NSSF = 200;
    }else if(NSSFType == 2){
        NSSF = 360;
    }else if(NSSFType == 3){
        NSSF = 720;
    }
    else if(NSSFType == 4){
        NSSF = 1080;
    }
    taxableIncome = grossSalary - NSSF
    return taxableIncome.toFixed(2)//returns the taxableIncome value as the final output of the function and converts the taxableIncome amount into a float with 2 decimals

}


//MONTHLY PAYE CALCULATOR - A function that calculates PAYE. It uses the taxable income and calculates PAYE based on the income amount and the Kenyan PAYE Tax Slab. For every range, there is a different set of calculations as seen below
function PAYECalculator(){
    
    if(taxableIncome >0 && taxableIncome <= 24000){//for range 0 - 24000
        PAYE = (taxableIncome * 0.1)
    }else if( taxableIncome > 24000 && taxableIncome <= 32333){//for range 24001 - 32333
        PAYE =  ((24000*0.1) + (taxableIncome - 24000)*0.25)
    }else if(taxableIncome > 32333){////for range 32334 and above
        PAYE = (24000*0.1) + ((32333 - 24000)*0.25) + ((taxableIncome-32333)*0.3)
    }

    return PAYE.toFixed(2);//returns the PAYE value as the final output of the function and converts the PAYE amount into a float with 2 decimals
}


//MONTHLY NHIF CALCULATOR - A function that calculates the NHIF amount based on the rates provided here --> (https://www.aren.co.ke/payroll/taxrates.htm) 
function NHIFCalculator() {
    //The switch statement checks the value entered by the user,  maps it to the correct range an sets the NHIF for that range.
    switch (true) {
        case (grossSalary < 5999):
            NHIF = 150            
            break;
            case (grossSalary >= 5999 && grossSalary <= 7999):
            NHIF = 300            
            break;
            case (grossSalary > 7999 && grossSalary <= 11999):
            NHIF = 400            
            break;
            case (grossSalary > 11999 && grossSalary <= 14999):
            NHIF = 500            
            break;
            case (grossSalary > 14999 && grossSalary <= 19999):
            NHIF = 600            
            break;
            case (grossSalary > 19999 && grossSalary <= 24999):
            NHIF = 750            
            break;
            case (grossSalary > 24999 && grossSalary <= 29999):
            NHIF = 850            
            break;
            case (grossSalary > 29999 && grossSalary <= 34999):
            NHIF = 900            
            break;
            case (grossSalary > 34999 && grossSalary <= 39999):
            NHIF = 950            
            break;
            case (grossSalary > 39999 && grossSalary <= 44999):
            NHIF = 1000            
            break;
            case (grossSalary > 44999 && grossSalary <= 49999):
            NHIF = 1100            
            break;
            case (grossSalary > 49999 && grossSalary <= 59999):
            NHIF = 1200            
            break;
            case (grossSalary > 59999 && grossSalary <= 69999):
            NHIF = 1300            
            break;
            case (grossSalary > 69999 && grossSalary <= 79999):
            NHIF = 1400            
            break;
            case (grossSalary > 79999 && grossSalary <= 89999):
            NHIF = 1500            
            break;
            case (grossSalary > 89999 && grossSalary <= 99999):
            NHIF = 1600            
            break;
            case (grossSalary >= 100000):
            NHIF = 1700
    
        default:
            break;
    }
    return NHIF = parseFloat(NHIF.toFixed(2))//returns the NHIF value as the final output of the function and converts the NHIF amount into a float with 2 decimals
}


//MONTHLY NET SALARY CALCULATOR - (https://www.aren.co.ke/calculators/payecalc.php) for confirmation without NHIF
// A function that calculates the Net Salary. It accepts the basic salary, benefits, taxableincomecalculator Function, PAYECalculator Function & NHIFCalculator Function as firstclass functions
function netSalaryCalculator(basicSalary, benefits, taxableIncomeCalculator,PAYECalculator,NHIFCalculator ){

    grossSalary = basicSalary + benefits //gross salary calculated as basicSalary plus benefits
    taxableIncome = taxableIncomeCalculator(grossSalary)//calls the taxableIncomeCalculator function, passing the grossSalary and stores its return value in the taxableIncome variable
    PAYE = PAYECalculator() //calls the PAYECalculator function and stores its return value in the PAYE variable
    NHIF = NHIFCalculator()//calls the NHIFCalculator function and stores its return value in the NHIF variable

    console.log(typeof(NHIF))
    taxDeductions = ((PAYE - personalRelief.toFixed(2)) + NHIF)//calulates taxDeductions including the personal Relief
    console.log(taxDeductions)
    console.log(PAYE)
    console.log(personalRelief)


    netSalary = (taxableIncome - taxDeductions)// calculates netSalary
  

    //prints the results of all the values of the defined variables
    console.log(`Gross Salary: ${grossSalary}\nNSSF: ${NSSF}\nTaxable Income: ${taxableIncome}\nPAYE: ${PAYE}\nPersonal relief: ${personalRelief}\nPAYE After Personal Relief: ${PAYE-personalRelief}\nNHIF: ${NHIF}\nTotal Tax Deductions: ${taxDeductions} \nNet Salary: ${netSalary}`)  
    
    //returns the netsalary as the final output of the function and converts the netsalary amount into a float with 2 decimals
    return netSalary.toFixed(2);
}
//calls the netSalaryCalculator function which is the main function and passes in the arguments of basicSalary & benefits as well as taxableIncomeCalculator,PAYECalculator,NHIFCalculator which are functions
netSalaryCalculator(basicSalary, benefits, taxableIncomeCalculator, PAYECalculator, NHIFCalculator)



