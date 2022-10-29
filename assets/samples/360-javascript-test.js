// Given these three variables:

// Below are individual problems, write a function/functions to accomplish the use-cases below.
// Write all problems to an HTML page (or pages, if preferred) and present in a User-Interface that displays this raw data in an easily readable format
// Comment code from a developer's-perspective (i.e. you are working on a team that will need to review/alter this code) and also provide comments as to why you chose to write a particular solution in the way you did.
// Write solutions as efficiently as possible
// Explain what tools were used during this practice - what program did you use to write this, what tool(s) did you use to debug, what references did you use if any were necessary?

// 1. Assume that today is 1/1/2014, update each employee's record to indicate the number of days until their birthday. Store the resulting value in a new key on the employee object.

// 2. Update each Employee object to contain a reference to their "best" customer (as defined by who purchased the most in the 2013 year).  Store the resulting value in a new key on the employee object.

// 3. The 2013 Revenue element on the Employee records needs to be updated with the "revenue2013" list of data. Chelsea Chastain manages a team of employees - her 2013 Revenue number should be derived from the total revenue of all of the employees she manages.  Store the resulting value in a new key on the employee object.

// 4. Calculate the Employee's commission based on the 2013 Revenue: the employee receives a percentage of the revenue they generated for the year as well as a bonus. The bonus is a flat-sum of money if they managed to generate more revenue than the previous year.

// 5. Write two questions that are similar to problems 1-4 and execute on them. This should demonstrate an understanding of similar business processes. (Feel free to use the three variables provided, or construct your own)
const CloudData = () => {
  const Employees = [
    {
      internalid: "1",
      name: "Abe Anderson",
      email: "aanderson@javascript.com",
      birthdate: "9/25/1974",
      supervisor: "3",
      "2012 Revenue": "100000.00",
      "2013 Revenue": "0.00",
    },
    {
      internalid: "2",
      name: "Bob Benson",
      email: "bbenson@javascript.com",
      birthdate: "7/13/1972",
      supervisor: "3",
      "2012 Revenue": "150000.00",
      "2013 Revenue": "0.00",
    },
    {
      internalid: "3",
      name: "Chelsea Chastain",
      email: "cchastain@javascript.com",
      birthdate: "5/7/1968",
      supervisor: "",
      "2012 Revenue": "375000.00",
      "2013 Revenue": "0.00",
    },
    {
      internalid: "4",
      name: "Dwight Dwyer",
      email: "ddwyer@javascript.com",
      birthdate: "8/23/1982",
      supervisor: "3",
      "2012 Revenue": "125000.00",
      "2013 Revenue": "0.00",
    },
    {
      internalid: "5",
      name: "Eathon Eckhart",
      email: "eeckhart@javascript.com",
      birthdate: "11/28/1970",
      supervisor: "",
      "2012 Revenue": "200000.00",
      "2013 Revenue": "0.00",
    },
  ];

  const Revenue2013 = [
    {
      type: "invoice",
      customer: "Franklin",
      Employee: "1",
      amount: "50000.00",
    },
    { type: "invoice", customer: "Gabby", Employee: "1", amount: "25000.00" },
    { type: "invoice", customer: "Harry", Employee: "1", amount: "30000.00" },
    {
      type: "invoice",
      customer: "Ingrid",
      Employee: "2",
      amount: "75000.00",
    },
    { type: "invoice", customer: "Jacob", Employee: "2", amount: "60000.00" },
    { type: "invoice", customer: "Kelly", Employee: "4", amount: "30000.00" },
    { type: "invoice", customer: "Lamar", Employee: "4", amount: "40000.00" },
    { type: "invoice", customer: "Mary", Employee: "4", amount: "20000.00" },
    {
      type: "invoice",
      customer: "Nicole",
      Employee: "4",
      amount: "70000.00",
    },
    { type: "invoice", customer: "Oscar", Employee: "5", amount: "75000.00" },
    {
      type: "invoice",
      customer: "Patrick",
      Employee: "5",
      amount: "80000.00",
    },
    { type: "invoice", customer: "Quin", Employee: "5", amount: "60000.00" },
    {
      type: "invoice",
      customer: "Rachel",
      Employee: "5",
      amount: "100000.00",
    },
  ];

  const CommissionRules = [
    { employee: "1", percentage: "15%", bonus: "2000.00" },
    { employee: "2", percentage: "10%", bonus: "3000.00" },
    { employee: "3", percentage: "7.5%", bonus: "5000.00" },
    { employee: "4", percentage: "10%", bonus: "3000.00" },
    { employee: "5", percentage: "10%", bonus: "3000.00" },
  ];
  const SetNextBDay = () => {
    // Setting a constant for date given
    const CurDate = new Date("1/1/2014");
    // Get the year to use in calculating days to bday later
    const CurYear = CurDate.getFullYear();
    // Get Current month in case we need to roll year up later
    const CurMonth = CurDate.getMonth() + 1;
    console.log(Employees);
    console.log(CurDate);
    // Loop through the employees to get their birthday & update object with days until birthday
    // Use property daystobday to store this date on the employee object
    // Use property birthdate to calculate days until emp birthday
    for (const Emp of Employees) {
      try {
        // Convert birthdate property into date
        const BirthDate = new Date(Emp.birthdate);
        // Get the month, day, & year to use in days until bday calculation
        const BirthDay = BirthDate.getDate();
        const BirthMonth = BirthDate.getMonth() + 1;
        const NextBDayYear = BirthMonth > CurMonth ? CurYear : CurYear + 1;
        // Create a new date object for next birthday
        const NextBDay = new Date(`${BirthMonth}/${BirthDay}/${NextBDayYear}`);
        // Set new property daystobday for employee object with days remaining until bday according to dates provided
        Emp.daystobday = Math.ceil(
          (NextBDay.getTime() - CurDate.getTime()) / (1000 * 3600 * 24)
        );
      } catch (err) {
        // Log error and keep proceeding with loop
        console.error(err);
      }
    }
    // Return Employees list when done
    return Employees;
  };
  return { Employees, Revenue2013, CommissionRules, SetNextBDay };
};

// return work as module to starter.js file
export default { CloudData };
