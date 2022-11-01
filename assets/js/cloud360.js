/**
 * @format
 * @module cloud360
 * @version 1.1.0
 */
import * as cloud360Types from './cloud360-types.js';
import './cloud360-view.js';
import { RenderView } from './cloud360-view.js';
/**
 * @type {cloud360Types.Employee[]}
 * @description Array of employees using Employee record objects
 * @since 1.0.0
 */
const Employees = [
  {
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
/**
 * @type {cloud360Types.Transactions}
 * @description Object with a property of year which is an array of transaction objects for given period
 * @summary We broke the year away as a property instead of the provided variable because in the real world we
 * would not just be dealing with a single year here.  We would have some way of selecting the year we want to fetch data for.
 * @since 1.0.0
 *  */
const Revenue = {
  2013: [
    {
      type: 'invoice',
      customer: 'Franklin',
      Employee: '1',
      amount: '50000.00',
      saledate: '9/21/2013',
    },
    {
      type: 'invoice',
      customer: 'Franklin',
      Employee: '1',
      amount: '20000.00',
      saledate: '9/23/2013',
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
      customer: 'Franklin',
      Employee: '1',
      amount: '40000.00',
      saledate: '10/2/2013',
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
  ],
};

/**
 * @type {cloud360Types.CommissionRule[]}
 * @description Array of CommissionRule records for calculating employee commissions for a sales period
 * @since 1.0.0
 */
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
 * @since 1.1.0
 */
const UpdateEmpRecs = async () => {
  // Setting a constant for date given
  const CurDate = new Date('1/1/2014');
  // Get the year to use in calculating days to bday later
  const CurYear = CurDate.getFullYear();
  // Set prev year vars used for calculating commissions
  const CurrCommYear = CurYear - 1;
  const PrevCommYearName = `${CurYear - 2} Revenue`;
  const CurrCommYearName = `${CurrCommYear} Revenue`;
  // Get Current month in case we need to roll year up later
  const CurMonth = CurDate.getMonth() + 1;
  const Current = {
    CurDate,
    CurMonth,
    CurYear,
    PrevCommYearName,
    CurrCommYearName,
    CurrCommYear,
  };
  // Track total sales for department manager totals
  const ManagerSaleTotals = { 3: { amount: 0 } };
  /** @type {cloud360Types.Questions} */
  const Questions = [
    { internalid: 0, question: 'Q1', title: 'Days to Birthday', view: {} },
    { internalid: 1, question: 'Q2', title: 'Best Customer', view: {} },
    {
      internalid: 2,
      question: 'Q3P1',
      title: `${CurrCommYearName} Totals`,
      view: {},
    },
    {
      internalid: 3,
      question: 'Q3P2',
      title: `${CurrCommYearName} Manager Totals`,
      view: {},
    },
    {
      internalid: 4,
      question: 'Q4',
      title: `${CurrCommYearName} Commissions`,
      view: {},
    },
    {
      internalid: 5,
      question: 'Q5P1',
      title: 'Days Since Last Sale',
      view: {},
    },
    {
      internalid: 5,
      question: 'Q5P2',
      title: 'Lowest Performing Customer',
      view: {},
    },
  ];
  let expand = true;
  // Create a view for each question
  for (const Question of Questions) {
    Question.view = new RenderView(`#question-${Question.question}`);
    Question.view.setCardProperties(Question, '#JSTest2022');
    Question.view.addAccordionCard(Question, expand);
    // Expand only the first accordion on the page
    expand = false;
  }
  // Loop through the employees
  for (const Emp of Employees) {
    try {
      // Filter transactions out by other employees
      const EmpSales = Revenue[CurrCommYear].filter(
        sale => sale.Employee == Emp.internalid
      );
      // Update Emp object with days until birthday
      // Also set the best customer for the employee
      // We can do this concurrently using promise all
      const Results = await Promise.all([
        Q1_CalcDaysToBDay(Emp, Current),
        Q2_SetBestCustomer(EmpSales),
      ]);
      Emp.daystobday = Results[0];
      Emp.bestcustomer = Results[1];
      // Calculate & update the employee record with yearly sales total
      Q3_UpdateSalesTotals(CurrCommYearName, EmpSales, Emp);
      // Now that we are done calculating the employee sale totals, we can update the manager totals
      Q3P2_UpdateSalesTotals(ManagerSaleTotals, Current);
      // Get employee supervisor to assign sales to
      const Supervisor = Emp.supervisor;
      if (Supervisor !== '')
        ManagerSaleTotals[Supervisor].amount += Number(Emp[CurrCommYearName]);
      // Calculate commissions earned last period for employees
      Q4_SetCommissions(Emp, Current);
      // Now that we know the best customer, we can calculate how long it has been since they purchased an order
      Q5P1_DaysSinceSale(Emp, Current);
      // Why not see who our worst customer is in sales, maybe make a contact?
      Emp.worstperforming = await Q2_SetBestCustomer(EmpSales, true);
    } catch (err) {
      // Log error and keep proceeding with loop
      console.error(err);
    }
  }
  // Draw the views with updated data
  Questions.forEach(question => question.view.renderView(Employees, question));
};
/**
 * @name Q5P1_DaysSinceSale
 * @function
 * @param {cloud360.Employee} emp
 * @param {Current} Current
 * @return {String}
 * @description Calculates the number of days since an employee had a sale
 * @summary This number is usually quite handy to have in business from a CRM standpoint.
 * This allows a companies sales team to focus in worker productivity, or could be converted to last sale date
 * for a customer, so sales can reach out to their customers to try and bring them back in.
 * @since 1.0.0
 */
const Q5P1_DaysSinceSale = (emp, Current) => {
  // Calculate the last sale date from order list
  const LastSaleDate = Revenue[Current.CurrCommYear].reduce(
    (prevDate, curDate) => {
      if (emp.internalid !== curDate.Employee) return prevDate;
      const SaleDate = new Date(curDate.saledate);
      return {
        saledate: prevDate.saledate > SaleDate ? prevDate.saledate : SaleDate,
      };
    },
    { saledate: new Date(Current.PrevCommYearName) }
  );
  // Calculate number of days since last sale
  const PrevSaleDate = LastSaleDate.saledate;
  const DaysSinceSale = Math.floor(
    (Current.CurDate - PrevSaleDate) / (1000 * 3600 * 24)
  );
  // If employee has no sales we want to notate that with N/A
  emp.dayssincesale = DaysSinceSale ? DaysSinceSale : 'N/A';
  // Store the last sale date for an employee or N/A if no sales in period
  emp.lastsaledate = emp.dayssincesale.toString().startsWith('N/A')
    ? emp.dayssincesale
    : PrevSaleDate.toLocaleDateString();
};
/**
 * @name Q4_SetCommissions
 * @function
 * @param {cloud360.Employee} emp
 * @param {Current} Current
 * @return {void}
 * @description Calculates the sales commission earned and applies it to the Employee record object
 * @since 1.0.0
 */
const Q4_SetCommissions = (emp, Current) => {
  const EmpCommissionRules = CommissionRules.filter(
    rule => rule.employee == emp['internalid']
  )[0];
  const CommPercent = EmpCommissionRules.percentage.endsWith('%')
    ? EmpCommissionRules.percentage.replace(/%/g, '')
    : EmpCommissionRules.percentage;
  // Calculate if Commissions Bonus qualifies
  const BonusQualifies =
    emp[Current.CurrCommYearName] - emp[Current.PrevCommYearName] > 0;
  // Apply commissions to employee rec
  emp['commission'] = emp[Current.CurrCommYearName] * (CommPercent / 100);
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
 * @since 1.0.0
 */
const Q3P2_UpdateSalesTotals = (managerSaleTotals, Current) => {
  // Update managers 2013 sales
  const Managers = Employees.filter(emp => {
    for (const Manager in managerSaleTotals) {
      if (!managerSaleTotals.hasOwnProperty(Manager)) return false;
      if (emp.supervisor === '') return true;
    }
  });
  Managers.forEach(manager => {
    const ManagerId = manager.internalid;
    if (!managerSaleTotals.hasOwnProperty(ManagerId)) return;
    manager[Current.CurrCommYearName] =
      managerSaleTotals[ManagerId].amount.toFixed(2);
    // Set Manager commissions
    // Doing this here because I didn't want to process another forEach loop just to
    // set manager commissions later.
    Q4_SetCommissions(manager, Current);
  });
};
/**
 *
 * @name Q3_UpdateSalesTotals
 * @description Updates employee sales totals for a period.  Returns sales for use in manager totals.
 * @function
 * @param {String} year
 * @param {Sales} sales
 * @param {cloud360.Employee} emp
 * @return {Number}
 * @since 1.0.0
 */
const Q3_UpdateSalesTotals = (year, sales, emp) => {
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
 * @name Q2_SetBestCustomer
 * @function
 * @param {Transaction[]} empSales - Array of employee Sales from a period
 * @param {boolean} worst=false - Gets the worst customer by sales volume when true
 * @fulfill {HighLowCustomer} - Object with name and total sales of highest or lowest customer
 * @reject {Object} - Error object returned
 * @return {Promise}
 * @description Filters down employee sales for a period, then returns the customer name of their highest sale transaction
 * @summary While the original data did not include multiple sales by the same customer, this doesn't match the real world.
 * To offset this, I added a couple more transactions to the 2013 revenue transaction list with the same customer names.  This method
 * filters down sales by employee, calculates each customers total sales, then selects the customer with
 * the highest total sale amount as the best customer.
 * @since 1.0.0
 */
const Q2_SetBestCustomer = async (empSales, worst = false) => {
  return new Promise((resolve, reject) => {
    try {
      // If there are no sales we can leave, nothing to do here
      if (empSales.length <= 0) {
        // No sales found, set best customer as not applicable
        return resolve({ customer: 'N/A', totalsales: 0 });
      }

      /** @type {cloud360Types.CustomerSales} */
      const CustomerSales = {};
      for (const Sale of empSales) {
        /** @type {cloud360Types.CustomerSale} */
        const UpdateObject = {
          customer: Sale.customer,
          amount: Sale.amount,
        };
        // Validate customer property exists, if not create it
        if (typeof CustomerSales[Sale.customer] === 'undefined')
          CustomerSales[Sale.customer] = [];
        CustomerSales[Sale.customer].push(UpdateObject);
      }
      /**
       * @type {cloud360Types.CustomerSales}
       * @description Array of customers and their calculated sales for given period
       */
      const CustomerSaleTotals = [];
      for (const Customer in CustomerSales) {
        if (!CustomerSales.hasOwnProperty(Customer)) continue;
        /**
         * @type {cloud360Types.CustomerSale}
         * @description Object with combined total of sales for a customer in a given period
         */
        const CustomerSaleTotal = CustomerSales[Customer].reduce(
          (prevTrans, curTrans) => {
            try {
              if (prevTrans === 0) return curTrans;
              // Force number type since amounts are returning as strings
              const CustomerTotals =
                prevTrans.customer === curTrans.customer
                  ? Number(prevTrans.amount) + Number(curTrans.amount)
                  : Number(curTrans.amount);
              return {
                customer: curTrans.customer,
                amount: CustomerTotals,
              };
            } catch (err) {
              console.error(err);
            }
          },
          0
        );
        // Push the accumulated sales totals to the CustomerSaleTotal array to reduce later
        CustomerSaleTotals.push(CustomerSaleTotal);
      }
      /**
       * @type {cloud360Types.HighLowCustomer}
       * @description Object for the employee's customer name and total of sales for a period
       * @summary Now that we have broken down the list of sales by employee and totaled the sales up for each
       * customer, we can now reduce/eliminate customers by who has the greater total sales for the period.  This
       * will, in turn, give us our true Best Customer by sales volume.
       */
      const HighLowCustomer = CustomerSaleTotals.reduce(
        (prevTrans, curTrans) => {
          // If no prev value, return current transaction and continue
          if (prevTrans.amount === 0) return curTrans;
          // Force number type since amounts are returning as strings
          const MaxNum = Math.max(
            Number(prevTrans.amount),
            Number(curTrans.amount)
          );
          if (worst) return MaxNum == curTrans.amount ? prevTrans : curTrans;
          return MaxNum == curTrans.amount ? curTrans : prevTrans;
        },
        { amount: 0 }
      );
      // Set worst customer if worst is true
      if (worst)
        return resolve({
          name: HighLowCustomer.customer,
          totalsales: HighLowCustomer.amount,
        });
      // Return the bestcustomer object for the Employee object
      resolve({
        name: HighLowCustomer.customer,
        totalsales: HighLowCustomer.amount,
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 *
 * @name Q1_CalcDaysToBDay
 * @description Returns number of days until an employees next birthday
 * @function
 * @param {cloud360.Employee} emp
 * @param {Current} Current
 * @return {Number}
 * @since 1.0.0
 */
const Q1_CalcDaysToBDay = async (emp, Current) => {
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
 * @deprecated - Since v1.1.0 | Use cloud360-view **RenderView** class instead
 * @return {void}
 * @description This renders the raw data to the dom when it is read
 * @summary This method was chosen so that the rest of the page could continue to load while processing logic.
 * While there isn't a lot going on in this demo, on a normal site, we would want to control how/when we update the dom as data is ready.
 * @since 1.0.0
 */
const RenderResults = (content, selector) => {
  try {
    // If the dom is already drawn, we want to just render now
    if (document.readyState === 'complete')
      return $(selector).html(JSON.stringify(content, null, '\t'));

    // Waiting for dom to be ready for updates
    $(document).ready(function () {
      // Document is ready to draw on, call render functions to update dom
      $(selector).html(JSON.stringify(content, null, '\t'));
    });
  } catch (err) {
    console.log(
      `rendering here ${JSON.stringify(
        selector
      )} this content: ${JSON.stringify(content)}`
    );
    console.error(err);
  }
};
/**
 * @name init
 * @description Determines how to initialize module
 * @function
 * @static
 * @return {String|void}
 * @param {boolean} raw=false - Return output for use in other format
 * @summary Because we are Using promises, we don't want our business logic to cause
 * delays in rendering the dom.  So I chose to check if the dom state is completed (i.e. Drawn) and if not
 * wait until document ready to render dom updates.  If the dom was already ready and rendered, we can go ahead
 * and just render our results to the dom now and return.
 *
 * We are also exporting init as our only public accessible function. Where the method can be called by the browser,
 * or we can call this using the markdown true and get a return string of what this renders for use in other
 * parts of the project (like the markdown/readme).
 * @since 1.0.0
 */
export const init = async (raw = false) => {
  try {
    await UpdateEmpRecs();
    if (raw) return JSON.stringify(Employees);
    // Render the raw data on the right hand side for comparison and to see how cards were made
    const RawDataView = new RenderView('raw');
    RawDataView.renderView(Employees, 'raw');
  } catch (err) {
    console.error(err);
  }
};
