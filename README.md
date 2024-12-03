# grade-generator

This is a javascript function designed to calculate and return a student's grade based on their marks. The grades are determines on specified ranges, ensuring accurate evaluation. The function also validates the input to ensure it is a valid number within the range of 0 to 100.

//Grading scale
the grades are as follows;
A - marks greater than 79
B - marks between 60 and 79(inclusive)
C - marks between 49 and 59(inclusive)
D - marks between 40 and 49(inclusive)
E - marks less than 40

The function ensures that the input is a number and is within the range of 0 to 100.



# Speed detector

The Speed Detecor program calculates whether a driver is within the speed limit, issues demerit points if they exceed the limit, and suspends their license if they accumulate too many points.

The program checks if the speed is within the legal limit, calculates demerit points for every 5 km per second over the speed limit, and suspends the license if the driver accumulates more than 12 demerit points.

// How the program works
If the speed is less than or equal to 70, the program returns "Ok".
If the speed is above 70, the program calculates demerit points for every 5km/s over the speed limit (70).
And if the demerit points exceed 12 points, the program returns "License suspended"



# net salary calculator
The net salary calculator is a javascript program designed to calculate an individual,s net salary based on their basic salary and benefits. the program computes the following:
> Gross Salary
>PAYE (Pay As You Earn) tax
> NHIF deductions
>NSSF deductions
>Total deductions
>Net Salary

The program uses the tax and deduction rates provided by the Kenya Revenue Authority (kra), National Hospital Insurance Fund (NHIF), and National Social Security Fund (NSSF).

Features
1 Gross Salary Calculator
gross salary = vasic salary + benefits.

2 PAYE tax calculation
calculated progressively using the kenyan paye tax bands:
>10% for income up to 24,000 shillings
>25% for income between 24,001 shillings and 32,333 shillings
>30% for income above 32,333 shillings

3 NHIF deduction
based on gross salary using NHIF contribution rates

4. NSSF deduction
6% of gross salary capped at 1,800 shillings

5. Validation
Ensures basic salary and benefits are positive numbers

6. breakdown
Provides a detailed breakdown of all calculations, iinccluding gross salary, PAYE, NHIF, NSSF, total deductions and the net salry

how to use

the inputs are
>basic salary: a positive number represeinting the individual's basic salary
>benefits: a positive number representing additional allowances or benefits

the program returns an object containing
>grossSalry : the totalm income before deductions
>payee : PAYE tax amount
>nhif: NHIF deduction amount
>nssf : NSSF deduction amount
>totalDeductions : Total deductions (PAYE + NHIF + NSSF)
>netSalary : Final net salry after deductions
