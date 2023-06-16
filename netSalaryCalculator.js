// Calculate the 
// payee (i.e. Tax), 
// NHIFDeductions, 
// NSSFDeductions, 
// gross salary,
// net salary. 

//Step 1. Gross Income = Basic salary + allowances + commissions. 
//Step 2. Taxable Income = Gross Income - all deductions/exemptions allowed by law e.g. NSSF, private pension.

// Calculation of PAYE
// Gross Income = Basic Salary + Allowances + Commissions + Other Emoluments
// Taxable Income = Gross Income – all deductions/exemptions allowed by law e.g. NSSF, private pension
// Taxable income obtained after step 2 must be applied to the tax slab.
// Total PAYE tax = Sum of the marginal taxes from step 3
// Tax Payable = Total PAYE – Total Relief e.g. Personal Relief, Insurance Relief

let grossSalary, taxableIncome, taxDeductions, netSalary, NHIF, NSSF, NSSFType, PAYE

//MONTHLY TAXABLE INCOME CALCULATOR
function taxableIncomeCalculator(grossSalary){
    let NSSFTypeString = "0";
    while(NSSFTypeString !== "1" && NSSFTypeString !== "2" && NSSFTypeString !== "3"){
        NSSFTypeString = prompt("Please select one option for the NSSF Type (enter 1, 2 or 3):\n 1. Old Rates \n 2. Tier I \n 3. Tier I & II")
    }
    NSSFType = parseInt(NSSFTypeString,10);
    if(NSSFType == 1){
        NSSF = 200;
    }else if(NSSFType == 2){
        NSSF = 360;
    }else if(NSSFType == 3){
        NSSF = 1080;
    }
    taxableIncome = grossSalary - NSSF
    return taxableIncome

}//console.log(taxableIncomeCalculator(50000))

//MONTHLY PAYE CALCULATOR
function payeCalculator(taxableIncomeCalculator,grossSalary){
    taxableIncome = taxableIncomeCalculator(grossSalary);
    if(taxableIncome >0 && taxableIncome <= 24000){
        PAYE = (taxableIncome * 0.1)
    }else if( taxableIncome > 24000 && taxableIncome <= 32333){
        PAYE =  ((24000*0.1) + (taxableIncome - 24000)*0.25)
    }else if(taxableIncome > 32333){
        PAYE = (24000*0.1) + ((32333 - 24000)*0.25) + ((taxableIncome-32333)*0.3)
    }
    return PAYE;
}console.log(payeCalculator(taxableIncomeCalculator, 50000))


//MONTHLY NHIF CALCULATOR
function NHIFDeductions() {
    

    
}

function netSalaryCalculator(basicSalary, benefits){
    grossSalary = basicSalary + benefits
    taxableIncome = grossSalary - NSSF
    PAYE = //tax slab calculation
    taxDeductions = (NHIF + PAYE) - personalRelief    
    netSalary = grossSalary = taxDeductions

}




