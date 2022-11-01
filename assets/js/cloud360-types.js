/**
 * @format
 * @module cloud360Types
 * @description Type definitions for Cloud 360 JavaScript Test
 */
/**
 * @typedef Employee
 * @type {Object}
 * @description Employee record object
 * @property {String} internalid - Employee internal ID
 * @property {String} name - Employee name
 * @property {String} email - Employee email
 * @property {Date} birthdate - Employee birthday
 * @property {Number} supervisor - Employee supervisor internal id
 * @property {Number} 2012 Revenue - Total of sales in 2012
 * @property {Number} 2013 Revenue - Total of sales in 2013
 * @property {Number} daystobday - Number of days until employee birthday
 * @property {HighLowCustomer} bestcustomer - Best customer for employee
 * @property {Number} commission - Sales commission earned for previous sales period
 * @property {Number|String} dayssincesale - Number of days since last sale -- N/A if no sales for period
 * @property {String} lastsaledate - Date of previous sale as string -- N/A if no sales for period
 * @property {HighLowCustomer} worstperforming - Performance stats for lowest performing customer for employee
 */
/**
 * @typedef Transaction
 * @type {Object}
 * @description Sales transaction record object
 * @property {String} type - Type of transaction
 * @property {String} customer - Transaction customer name
 * @property {Number|String} Employee - Employee internal ID of transaction
 * @property {Number|String} amount - Transaction total
 * @property {String} saledate - Date of transaction
 *
 */
/**
 * @typedef Transactions
 * @type {Object}
 * @property {Transaction[]} 2013 - Sales transactions for 2013
 * @description Object compiled of yearly revenue streams associated by year as id
 */
/**
 * @typedef CommissionRule
 * @type {Object}
 * @description Object of commission rules which are applicable calculating commission earned for an employee
 * @property {Number|String} employee - Employee internal ID of transaction
 * @property {String} percentage - Commission percentage of sales
 * @property {Number|String} bonus - Bonus for increasing sales over previous period
 *
 */
/**
 * @typedef Current
 * @type {Object}
 * @description Object which contains current date properties for updating records
 * @property {Date} CurDate - Current Date
 * @property {Date} CurMonth - Current Month
 * @property {Date} CurYear - Current Year
 * @property {String} PrevCommYearName - Previous commission Year as property string name
 * @property {String} CurrCommYearName - Current commission Year as property string name
 * @property {Number} CurrCommYear - Current commission Year as number
 */
/**
 * @typedef Supervisor
 * @type {Object}
 * @description Object which stores the calculated total sales of a period for a supervisor
 * @property {Number} amount - Total sales amount of managed employees
 */
/**
 * @typedef ManagerSaleTotals
 * @type {Object}
 * @description Object which contains supervisors and their period sale totals
 * @property {Supervisor} ([0-9]+) - Internal ID of supervisor
 */
/**
 * @typedef Sales
 * @type {Object[]}
 * @description Type definition for counting sale transaction totals
 * @property {Number} amount - Sale transaction amount
 */
/**
 * @typedef HighLowCustomer
 * @type {Object}
 * @description Object consisting of the name of an employees customers name with the most/least total sales and that amount
 * @property {String} name - Name of customer with highest total sale count
 * @property {Number} totalsales - Accumulated total of all sales transactions for customer
 *
 */
/**
 * @typedef CustomerSale
 * @type {Object}
 * @description Object consisting of the name of a customer and sale total for a transaction
 * @property {String} customer - Name of customer on transaction
 * @property {Number} amount - Transaction sale total
 *
 */
/**
 * @typedef CustomerSales
 * @type {CustomerSale[]}
 * @description Array of an employee's customer sales with the customer's name and amount of transaction
 */

/**
 * @typedef Question
 * @description Each question has a view object associated with it to display in the dom
 * @type {Object}
 * @param {Number} internalid - Internal ID for question
 * @param {String} question - Display text for question number
 * @param {String} title - Title of question
 * @param {Object} view - View object for the question
 */
/**
 * @typedef Questions
 * @description List of questions with their titles and views for updating the dom independently
 * @type {Question[]}
 */

export const cloud360Types = {};
