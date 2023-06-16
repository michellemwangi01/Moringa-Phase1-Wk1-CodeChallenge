// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, net salary. 

//Step 1. Gross Income = Basic salary + allowances + commissions. 
//Step 2. Taxable Income = Gross Income - all deductions/exemptions allowed by law e.g. NSSF, private pension.

// Calculation of PAYE
// Gross Income = Basic Salary + Allowances + Commissions + Other Emoluments
// Taxable Income = Gross Income – all deductions/exemptions allowed by law e.g. NSSF, private pension
// Taxable income obtained after step 2 must be applied to the tax slab.
// Total PAYE tax = Sum of the marginal taxes from step 3
// Tax Payable = Total PAYE – Total Relief e.g. Personal Relief, Insurance Relief



let grossSalary, taxableIncome, taxDeductions, netSalary, NHIF, NSSF, NSSFType, PAYE
const personalRelief = 2400

//MONTHLY TAXABLE INCOME CALCULATOR
function taxableIncomeCalculator(grossSalary){
    let NSSFTypeString = "0";
    while(NSSFTypeString !== "1" && NSSFTypeString !== "2" && NSSFTypeString !== "3" && NSSFTypeString !== "4"){
        NSSFTypeString = prompt("Please select one option for the NSSF Type (enter 1, 2 or 3):\n 1. Old Rates \n 2. Tier I \n 3. Tier II \n 4.Tier I & Tier II")
    }

    // NSSFType = 4

    NSSFType = parseInt(NSSFTypeString,10);
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
    return taxableIncome

}


//MONTHLY PAYE CALCULATOR
function PAYECalculator(){
    if(taxableIncome >0 && taxableIncome <= 24000){
        PAYE = (taxableIncome * 0.1)
    }else if( taxableIncome > 24000 && taxableIncome <= 32333){
        PAYE =  ((24000*0.1) + (taxableIncome - 24000)*0.25)
    }else if(taxableIncome > 32333){
        PAYE = (24000*0.1) + ((32333 - 24000)*0.25) + ((taxableIncome-32333)*0.3)
    }

    return PAYE = PAYE.toFixed(2);
}


//MONTHLY NHIF CALCULATOR
function NHIFCalculator() {
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
    return NHIF
}


//MONTHLY NET SALARY CALCULATOR - (https://www.aren.co.ke/calculators/payecalc.php) for confirmation without NHIF
function netSalaryCalculator(basicSalary, benefits, taxableIncomeCalculator,PAYECalculator,NHIFCalculator ){
    grossSalary = basicSalary + benefits
    taxableIncome = taxableIncomeCalculator(grossSalary)
    PAYE = PAYECalculator()
    NHIF = NHIFCalculator()

    taxDeductions = (PAYE - personalRelief) + NHIF
    netSalary = (taxableIncome - taxDeductions )
    console.log(`Gross Salary: ${grossSalary}\nTaxable Income: ${taxableIncome}\nPAYE: ${PAYE}\nPersonal relief: ${personalRelief}\nPAYE After Personal Relief: ${PAYE-personalRelief}\nNHIF: ${NHIF}\nTotal Tax Deductions: ${taxDeductions}\nNet Salary: ${netSalary}`)  
    return netSalary;
}

netSalaryCalculator(52000, 2000, taxableIncomeCalculator, PAYECalculator, NHIFCalculator)



