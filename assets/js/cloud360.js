/**
 * @format
 * @module cloud360
 */

// Importing JavaScript
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/js/dist/util.js';
import '../../node_modules/bootstrap/js/dist/modal.js';
/**
 * @typedef Employees
 * @type {Object}
 * @property {String} internalid - ID.
 * @property {String} name - employee name.
 * @property {String} email - email.
 * @property {Date} birthdate - birthday.
 * @property {String} email - your age.
 * @property {Number} supervisor - supervisor id
 * @property {Number} 2012 Revenue - supervisor id
 * @property {Number} 2013 Revenue - supervisor id
 * @property {Number} daystobday - days until birthday
 * @property {String} bestcustomer - best customer for employee
 */
/**
 * @typedef Current
 * @type {Object}
 * @property {Date} CurDate - current Date.
 * @property {Date} CurMonth - current Month
 * @property {Date} CurYear - current Year
 * @property {Number} PrevCommYear - previous commission Year
 * @property {Number} CurrCommYear - current commission Year
 */
/**
 * @typedef Supervisor
 * @type {Object}
 * @property {Number} amount - sale amount.
 */
/**
 * @typedef Supervisors
 * @type {Object}
 * @property {Supervisor} ([0-9]+) - Internal ID of supervisor
 */
/**
 * @typedef ManagerSaleTotals
 * @type {Object}
 * @property {Supervisors} supervisors
 */
/**
 * @typedef Sales
 * @type {Object[]}
 * @property {Number} amount - sale amount.
 */
/**
 * * END Type Definitions * *
 */
/** @type {Employees} */
const Employees = [{
        internalid: '1',
        name: 'Abe Anderson',
        email: 'aanderson@javascript.com',
        birthdate: '9/25/1974',
        supervisor: '3',
        '2012 Revenue': '100000.00',
        '2013 Revenue': '0.00',
    },
    {
        internalid: '2',
        name: 'Bob Benson',
        email: 'bbenson@javascript.com',
        birthdate: '7/13/1972',
        supervisor: '3',
        '2012 Revenue': '150000.00',
        '2013 Revenue': '0.00',
    },
    {
        internalid: '3',
        name: 'Chelsea Chastain',
        email: 'cchastain@javascript.com',
        birthdate: '5/7/1968',
        supervisor: '',
        '2012 Revenue': '375000.00',
        '2013 Revenue': '0.00',
    },
    {
        internalid: '4',
        name: 'Dwight Dwyer',
        email: 'ddwyer@javascript.com',
        birthdate: '8/23/1982',
        supervisor: '3',
        '2012 Revenue': '125000.00',
        '2013 Revenue': '0.00',
    },
    {
        internalid: '5',
        name: 'Eathon Eckhart',
        email: 'eeckhart@javascript.com',
        birthdate: '11/28/1970',
        supervisor: '',
        '2012 Revenue': '200000.00',
        '2013 Revenue': '0.00',
    },
];

const Revenue2013 = [{
        type: 'invoice',
        customer: 'Franklin',
        Employee: '1',
        amount: '50000.00',
        saledate: '9/21/2013',
    },
    {
        type: 'invoice',
        customer: 'Gabby',
        Employee: '1',
        amount: '25000.00',
        saledate: '8/11/2013',
    },
    {
        type: 'invoice',
        customer: 'Harry',
        Employee: '1',
        amount: '30000.00',
        saledate: '5/13/2013',
    },
    {
        type: 'invoice',
        customer: 'Ingrid',
        Employee: '2',
        amount: '75000.00',
    },
    {
        type: 'invoice',
        customer: 'Jacob',
        Employee: '2',
        amount: '60000.00',
        saledate: '11/1/2013',
    },
    {
        type: 'invoice',
        customer: 'Kelly',
        Employee: '4',
        amount: '30000.00',
        saledate: '11/21/2013',
    },
    {
        type: 'invoice',
        customer: 'Lamar',
        Employee: '4',
        amount: '40000.00',
        saledate: '12/12/2013',
    },
    {
        type: 'invoice',
        customer: 'Mary',
        Employee: '4',
        amount: '20000.00',
        saledate: '10/3/2013',
    },
    {
        type: 'invoice',
        customer: 'Nicole',
        Employee: '4',
        amount: '70000.00',
        saledate: '12/13/2013',
    },
    {
        type: 'invoice',
        customer: 'Oscar',
        Employee: '5',
        amount: '75000.00',
        saledate: '2/10/2013',
    },
    {
        type: 'invoice',
        customer: 'Patrick',
        Employee: '5',
        amount: '80000.00',
    },
    {
        type: 'invoice',
        customer: 'Quin',
        Employee: '5',
        amount: '60000.00',
        saledate: '7/23/2013',
    },
    {
        type: 'invoice',
        customer: 'Rachel',
        Employee: '5',
        amount: '100000.00',
        saledate: '12/28/2013',
    },
];

const CommissionRules = [
    { employee: '1', percentage: '15%', bonus: '2000.00' },
    { employee: '2', percentage: '10%', bonus: '3000.00' },
    { employee: '3', percentage: '7.5%', bonus: '5000.00' },
    { employee: '4', percentage: '10%', bonus: '3000.00' },
    { employee: '5', percentage: '10%', bonus: '3000.00' },
];

/**
 * @name UpdateEmpRec
 * @function
 * @param {Number} year
 * @return {Promise}
 * @fulfill {void}
 * @reject {void}
 * @description Creates new properties on Employees Object to store calculated values
 * @summary This method was created to initiate the business logic updates.
 */
const UpdateEmpRecs = async() => {
    // Setting a constant for date given
    const CurDate = new Date('1/1/2014');
    // Get the year to use in calculating days to bday later
    const CurYear = CurDate.getFullYear();
    // Set prev year vars used for calculating commissions
    const PrevCommYear = `${CurYear - 2} Revenue`;
    const CurrCommYear = `${CurYear - 1} Revenue`;
    // Get Current month in case we need to roll year up later
    const CurMonth = CurDate.getMonth() + 1;
    const Current = { CurDate, CurMonth, CurYear, PrevCommYear, CurrCommYear };
    // Track total sales for department manager totals
    const ManagerSaleTotals = { supervisors: { 3: { amount: 0 } } };
    // Loop through the employees
    for (const Emp of Employees) {
        try {
            // Update Emp object with days until birthday
            // Also set the best customer for the employee
            // We can do this concurrently using promise all
            const Results = await Promise.all([
                Q1_CalcDaysToBDay(Emp, Current),
                Q2_SetBestCustomer(Emp, CurrCommYear),
            ]);
            Emp.daystobday = Results[0];
            Emp.bestcustomer = Results[1];
            // Now that we know the best customer, we can calculate how long it has been since they purchased an order
            Q4_SetCommissions(Emp, Current);
            Q5_DaysSinceSale(Emp, Current);

            // Get employee supervisor to assign sales to
            const Supervisor = Emp.supervisor;
            if (Supervisor !== '')
                ManagerSaleTotals.supervisors[Supervisor].amount += Number(
                    Emp[CurrCommYear]
                );
        } catch (err) {
            // Log error and keep proceeding with loop
            console.error(err);
        }
    }
    try {
        // Now that we are done calculating the employee sale totals, we can update the manager totals
        Q3P2_UpdateSalesTotals(ManagerSaleTotals, Current);
    } catch (err) {
        console.error(err);
    }
};
/**
 * @name Q5_DaysSinceSale
 * @function
 * @param {Employees} emp
 * @param {Current} Current
 * @return {String}
 */
const Q5_DaysSinceSale = (emp, Current) => {
    // Calculate the last sale date from order list
    const LastSaleDate = Revenue2013.reduce(
        (prevDate, curDate) => {
            if (emp.internalid !== curDate.Employee) return prevDate;
            const SaleDate = new Date(curDate.saledate);
            return {
                saledate: prevDate.saledate > SaleDate ? prevDate.saledate : SaleDate,
            };
        }, { saledate: new Date(Current.PrevCommYear) }
    );
    // Calculate number of days since last sale
    const PrevSaleDate = LastSaleDate.saledate;
    const DaysSinceSale = Math.floor(
        (Current.CurDate - PrevSaleDate) / (1000 * 3600 * 24)
    );
    emp.dayssincesale = DaysSinceSale ? DaysSinceSale : 'N/A';
    emp.lastsaledate = emp.dayssincesale.toString().startsWith('N/A') ?
        emp.dayssincesale :
        PrevSaleDate.toDateString();
};
/**
 * @name Q4_SetCommissions
 * @function
 * @param {Employees} emp
 * @param {Current} Current
 * @return {String}
 */
const Q4_SetCommissions = (emp, Current) => {
    const EmpCommissionRules = CommissionRules.filter(
        rule => rule.employee == emp['internalid']
    )[0];
    const CommPercent = EmpCommissionRules.percentage.endsWith('%') ?
        EmpCommissionRules.percentage.replace(/%/g, '') :
        EmpCommissionRules.percentage;
    // Calculate if Commissions Bonus qualifies
    const BonusQualifies =
        emp[Current.CurrCommYear] - emp[Current.PrevCommYear] > 0;
    // Apply commissions to employee rec
    emp['commission'] = emp[Current.CurrCommYear] * (CommPercent / 100);
    // If bonus applies, set add the bonus amount to total commission
    if (BonusQualifies) emp['commission'] += Number(EmpCommissionRules.bonus);
    // Lock in commission at fixed point of 2 decimal places
    emp['commission'] = emp['commission'].toFixed(2);
};
/**
 *
 * @name Q3P2_UpdateSalesTotals
 * @description Updates sale totals for supervisors
 * @function
 * @param {ManagerSaleTotals} managerSaleTotals
 * @param {Current} Current
 * @return {void}
 */
const Q3P2_UpdateSalesTotals = (managerSaleTotals, Current) => {
    // Update managers 2013 sales
    const Managers = Employees.filter(emp => {
        for (const Manager in managerSaleTotals.supervisors) {
            if (!managerSaleTotals.supervisors.hasOwnProperty(Manager)) return false;
            if (emp.supervisor === '') return true;
        }
    });
    Managers.some(manager => {
        const ManagerId = manager.internalid;
        if (!managerSaleTotals.supervisors.hasOwnProperty(ManagerId)) return false;
        manager[Current.CurrCommYear] =
            managerSaleTotals.supervisors[ManagerId].amount.toFixed(2);
        // Set Manager commissions
        Q4_SetCommissions(manager, Current);
        return true;
    });
};
/**
 *
 * @name UpdateSalesTotals
 * @description Updates employee sales totals for a period.  Returns sales for use in manager totals.
 * @function
 * @param {String} year
 * @param {Sales} sales
 * @param {Employees} emp
 * @return {Number}
 */
const Q3_UpdateSalesTotals = (year, sales, emp) => {
    // Use property "2013 Revenue" to store this date on the employee object
    emp[year] = sales
        .reduce(
            (prevSale, curSale) => {
                return {
                    amount: prevSale.amount ?
                        Number(prevSale.amount) + Number(curSale.amount) :
                        Number(curSale.amount),
                };
            }, { amount: 0 }
        )
        .amount.toFixed(2);
    // Return the total set so we can add them all up for the manager totals
    return emp[year];
};
/**
 * @name Q2_SetBestCustomer
 * @function
 * @param {Employees} emp
 * @param {String} year
 * @return {String}
 */
const Q2_SetBestCustomer = async(emp, year) => {
    try {
        // Loop through the list of employees and filter down their best sale
        // Map down a new array of highest sales for each employee
        const EmpSales = Revenue2013.filter(
            sale => sale.Employee == emp.internalid
        );
        // Update the employee record with yearly sales total
        Q3_UpdateSalesTotals(year, EmpSales, emp);
        // If there are no sales we can leave, nothing to do here
        if (EmpSales.length <= 0) {
            // No sales found, set best customer as not applicable
            return 'N/A';
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
            }, { amount: 0 }
        );
        // Return the bestcustomer property for the Employee object
        return BestSale.customer;
    } catch (err) {
        console.error(err);
    }
};
/**
 *
 * @name Q1_CalcDaysToBDay
 * @description Returns number of days until next birthday
 * @function
 * @param {Employees} emp
 * @param {Current} Current
 * @return {Number}
 */
const Q1_CalcDaysToBDay = async(emp, Current) => {
    // Use property daystobday to store this date on the employee object
    // Use property birthdate to calculate days until emp birthday
    // Convert birthdate property into date
    const BirthDate = new Date(emp.birthdate);
    // Get the month, day, & year to use in days until bday calculation
    const BirthDay = BirthDate.getDate();
    const BirthMonth = BirthDate.getMonth() + 1;
    const NextBDayYear =
        BirthMonth > Current.CurMonth ? Current.CurYear : Current.CurYear + 1;
    // Create a new date object for next birthday
    const NextBDay = new Date(`${BirthMonth}/${BirthDay}/${NextBDayYear}`);
    // return new property daystobday for employee object with days remaining until bday according to dates provided
    return Math.ceil(
        (NextBDay.getTime() - Current.CurDate.getTime()) / (1000 * 3600 * 24)
    );
};
/**
 * @name RenderResults
 * @function
 * @return {void}
 * @description This draws the business logic to the dom when its ready
 * @summary This method was chosen so that the rest of the page could continue to load while processing logic.
 While there isn't a lot going on in this demo, on a normal site, we would want to control how/when we update the dom as data is ready.
 *
 */
const RenderResults = (content, selector) => {
    $(selector).html(JSON.stringify(content, null, '\t'));
};
/**
 * @name init
 * @description Determines how to initialize module
 * @function
 * @static
 * @return {String|void}
 * @param {boolean} markdown=false - Return output for use in markdown page
 */
export default init = async(markdown = false) => {
    await UpdateEmpRecs();
    if (markdown) return JSON.stringify(Employees);

    // If the dom is already drawn, we want to just render now
    if (document.readyState === 'complete')
        return RenderResults(Employees, 'pre#pre1');
    $(document).ready(function() {
        // Document is ready to draw on, call render functions to update dom
        RenderResults(Employees, 'pre#pre1');
    });
};