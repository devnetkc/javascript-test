/**
 * @typedef Employees
 * @type {object}
 * @property {string} internalid - ID.
 * @property {string} name - employee name.
 * @property {string} email - email.
 * @property {date} birthdate - birthday.
 * @property {string} email - your age.
 * @property {number} supervisor - supervisor id
 * @property {number} 2012 Revenue - supervisor id
 * @property {number} 2013 Revenue - supervisor id
 * @property {number} daystobday - days until birthday
 * @property {string} bestcustomer - best customer for employee
 */
/** @type {Employees} */
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
// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

/**
 * @name UpdateEmpRec
 * @function
 * @param {String} year
 * @return {Promise}
 *  Creates new properties on Employees Object to store calculated values
 */
const UpdateEmpRecs = async (year) => {
  // Setting a constant for date given
  const CurDate = new Date("1/1/2014");
  // Get the year to use in calculating days to bday later
  const CurYear = CurDate.getFullYear();
  // Get Current month in case we need to roll year up later
  const CurMonth = CurDate.getMonth() + 1;
  // Track total sales for department manager totals
  let managerSaleTotals = { supervisor: { 3: { amount: 0 } } };
  // Loop through the employees
  for (const Emp of Employees) {
    try {
      // Update Emp object with days until birthday
      // Also set the best customer for the employee
      // We can do this concurrently using promise all
      const Results = await Promise.all([
        Q1_CalcDaysToBDay(Emp, { CurDate, CurMonth, CurYear }),
        Q2_SetBestCustomer(Emp, year),
      ]);
      Emp.daystobday = Results[0];
      Emp.bestcustomer = Results[1];
      // Get employee supervisor to assign sales to
      const Supervisor = Emp.supervisor;

      try {
        if (Supervisor !== "")
          managerSaleTotals.supervisor[Supervisor].amount += Number(Emp[year]);
      } catch (err) {
        console.error(err);
      }
    } catch (err) {
      // Log error and keep proceeding with loop
      console.error(err);
    }
  }
  // Update managers 2013 sales
  const Managers = Employees.filter((emp) => {
    for (const Manager in managerSaleTotals.supervisor) {
      if (!managerSaleTotals.supervisor.hasOwnProperty(Manager)) return false;
      if (emp.supervisor === "") return true;
    }
  });
  console.log(Managers);
  Managers.some((manager) => {
    const ManagerId = manager.internalid;
    if (!managerSaleTotals.supervisor.hasOwnProperty(ManagerId)) return false;
    manager[year] = managerSaleTotals.supervisor[ManagerId].amount.toFixed(2);
    return true;
  });
};
/**
 * @name Q2_SetBestCustomer
 * @function
 * @param {Employees} emp
 * @param {String} year
 * @return {String}
 */
const Q2_SetBestCustomer = async (emp, year) => {
  try {
    // Loop through the list of employees and filter down their best sale
    // Map down a new array of highest sales for each employee
    const EmpSales = Revenue2013.filter(
      (sale) => sale.Employee == emp.internalid
    );
    // Update the employee record with yearly sales total
    UpdateSalesTotals(year, EmpSales, emp);
    // If there are no sales we can leave, nothing to do here
    if (EmpSales.length <= 0) {
      // No sales found, set best customer as not applicable
      return "N/A";
    }
    // find the order with the highest sale dollar
    const BestSale = EmpSales.reduce(
      (previousValue, currentValue) => {
        // Force number type since amounts are returning as strings
        const MaxNum = Math.max(
          Number(previousValue.amount),
          Number(currentValue.amount)
        );
        return MaxNum == currentValue.amount ? currentValue : previousValue;
      },
      { amount: 0 }
    );
    // Return the bestcustomer property for the Employee object
    return BestSale.customer;
  } catch (err) {
    console.error(err);
  }
};
/**
 * @typedef current
 * @type {object}
 * @property {Date} CurDate - an ID.
 * @property {Date} CurMonth - your name.
 * @property {Date} CurYear - your age.
 */
/** @type {current} */
/**
 *
 *
 * @function
 * @param {Employees} emp
 * @param {current} current
 * @return {void}
 */
const Q1_CalcDaysToBDay = async (emp, current) => {
  // Use property daystobday to store this date on the employee object
  // Use property birthdate to calculate days until emp birthday
  // Convert birthdate property into date
  const BirthDate = new Date(emp.birthdate);
  // Get the month, day, & year to use in days until bday calculation
  const BirthDay = BirthDate.getDate();
  const BirthMonth = BirthDate.getMonth() + 1;
  const NextBDayYear =
    BirthMonth > current.CurMonth ? current.CurYear : current.CurYear + 1;
  // Create a new date object for next birthday
  const NextBDay = new Date(`${BirthMonth}/${BirthDay}/${NextBDayYear}`);
  // return new property daystobday for employee object with days remaining until bday according to dates provided
  return Math.ceil(
    (NextBDay.getTime() - current.CurDate.getTime()) / (1000 * 3600 * 24)
  );
};
/**
 * @typedef sales
 * @type {Array.<{amount: Number}>}
 * @property {Number} amount - sale amount.
 */
/** @type {sales} */
/**
 *
 * @name UpdateSalesTotals
 * @function
 * @param {String} year
 * @param {sales} sales
 * @param {Employees} emp
 * @return {Number}
 */
const UpdateSalesTotals = (year, sales, emp) => {
  // Use property "2013 Revenue" to store this date on the employee object
  emp[year] = sales
    .reduce(
      (prevSale, curSale) => {
        return {
          amount: prevSale.amount
            ? Number(prevSale.amount) + Number(curSale.amount)
            : Number(curSale.amount),
        };
      },
      { amount: 0 }
    )
    .amount.toFixed(2);
  // Return the total set so we can add them all up for the manager totals
  return emp[year];
};

/**
 * @name RenderResults
 * @function
 * @return {void}
 *
 */
const RenderResults = (content, selector) => {
  $(selector).html(JSON.stringify(content, null, "\t"));
};

// init business logic asynchronously
(async () => {
  await UpdateEmpRecs("2013 Revenue");
  // If the dom is already drawn, we want to just render now
  if (document.readyState === "complete")
    return RenderResults(Employees, "pre#pre1");
  $(document).ready(function () {
    // Document is ready to draw on, call render functions to update dom
    RenderResults(Employees, "pre#pre1");
  });
})();
