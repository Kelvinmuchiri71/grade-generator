function calculateNetSalary(basicSalary, benefits) {
    if (typeof basicSalary !== "number" || typeof benefits !== "number" || basicSalary < 0 || benefits < 0) {
        return "Invalid input. Both basic salary and benefits must be positive numbers.";

    }
        //calculate gross salary

        const grossSalary = basicSalary + benefits;

        //calculate PAYE

        const calculatePAYE =(gross) => {
            if (gross <= 24000) {
                return gross * 0.1;
            }else if (gross <= 32333) {
                return (2400 + (gross - 24000) * 0.25);
            }else {
                return (2400 + (32333 - 24000) * 0.25 + (gross - 32333) * 0.3);
            }
        }


const payee = calculatePAYE(grossSalary);

//calculate NHIF Deduction
const calculateNHIF = (gross) => {
    if (gross <= 5999) return 150;
    if (gross <= 79999) return 300;
    if (gross <= 11999) return 400;
    if (gross <= 14999) return 500;
    if (gross <= 19999) return 600;
    if (gross <= 24999) return 750;
    if (gross <= 29999) return 850;
    if (gross <= 34999) return 900;
    if (gross <= 39999) return 950;
    if (gross <= 44999) return 1000;
    if (gross <= 49999) return 1100;
    if (gross <= 59999) return 1200;
    if (gross <= 69999) return 1300;
    if (gross <= 79999) return 1400;
    if (gross <= 89999) return 1500;
    if (gross <= 99999) return 1600;
    return 1700;
};

const nhif = calculateNHIF(grossSalary);

//calculate nssf deduction
const nssf = Math.min(0.06 * grossSalary, 1800);  //6% of gross


//calculate net salary
const totalDeductions = payee + nhif + nssf;
const netSalary = grossSalary - totalDeductions;

return {
    grossSalary,
    payee: payee.toFixed(2),
    nhif: nhif.toFixed(2),
    nssf: nssf.toFixed(2),
    totalDeductions: totalDeductions.toFixed(2),
    netSalary: netSalary.toFixed(2)
  };
}