
# Introduction

## About Project

### Developer&#58;

|Name | Ryan Valizan
|---|---
|GitHub | [@devnetkc](https://github.com/devnetkc)
|Project | [javascript-test](https://github.com/devnetkc/javascript-test)
|Email | ryan@vnetkc.com

#### Tools/Resources Used&#58;

|Tool | Usage
|---|---
|IDE | VSCode
|Extensions | [Project Recommended List](./.vscode/extensions.json)
|Browser | Chrome
|System | MacOS
|Resources | Google, StackOverflow, regex101, jsdoc.app

### Packages Used&#58;

* [Bootstrap](https://github.com/twbs/bootstrap-npm-starter/)
* [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown)

### Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding. **Node v16 is recommended and was used to compile project**

```shell
# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server
npm run server

# Watches Sass for changes and starts a local server
npm start
```

For the most straightforward development, open Terminal and run `npm start`.

Open <http://localhost:3000> to see the page in action.

## Project Overview

### Given Variables:
* [~Employees](#module_cloud360..Employees)
* [~Revenue2013](#module_cloud360..Revenue2013)
* [~CommissionRules](#module_cloud360..CommissionRules)

### Details
Below are individual problems, write a function/functions to accomplish the use-cases below.
Write all problems to an HTML page (or pages, if preferred) and present in a User-Interface that displays this raw data in an easily readable format.
Comment code from a developer's-perspective (i.e. you are working on a team that will need to review/alter this code) and also provide comments as to why you chose to write a particular solution in the way you did.


Write solutions as efficiently as possible


Explain what tools were used during this practice - what program did you use to write this, what tool(s) did you use to debug, what references did you use if any were necessary?

### Questions

1. Assume that today is **1/1/2014**, update each employee's record to indicate the number of days until their birthday. Store the resulting value in a new key on the employee object.

2. Update each Employee object to contain a reference to their "best" customer (as defined by who purchased the most in the 2013 year).  Store the resulting value in a new key on the employee object.

3. The 2013 Revenue element on the Employee records needs to be updated with the *"revenue2013"* list of data. Chelsea Chastain manages a team of employees - her 2013 Revenue number should be derived from the total revenue of all of the employees she manages.  Store the resulting value in a new key on the employee object.

4. Calculate the Employee's commission based on the 2013 Revenue: the employee receives a percentage of the revenue they generated for the year as well as a bonus. The bonus is a flat-sum of money if they managed to generate more revenue than the previous year.

5. Write two questions that are similar to problems 1-4 and execute on them. This should demonstrate an understanding of similar business processes. (Feel free to use the three variables provided, or construct your own)

## Code Documentation

<a name="module_cloud360"></a>

## cloud360
**Format**:   

* [cloud360](#module_cloud360)
    * _static_
        * [.init(markdown)](#module_cloud360.init) ⇒ <code>String</code> \| <code>void</code>
    * _inner_
        * [~Employees](#module_cloud360..Employees) : <code>Array.&lt;Employee&gt;</code>
        * [~CommissionRules](#module_cloud360..CommissionRules) : <code>Array.&lt;CommissionRule&gt;</code>
        * [~UpdateEmpRec(year)](#module_cloud360..UpdateEmpRec) ⇒ <code>Promise</code>
        * [~Q5P1_DaysSinceSale(emp, Current)](#module_cloud360..Q5P1_DaysSinceSale) ⇒ <code>String</code>
        * [~Q4_SetCommissions(emp, Current)](#module_cloud360..Q4_SetCommissions) ⇒ <code>void</code>
        * [~Q3P2_UpdateSalesTotals(managerSaleTotals, Current)](#module_cloud360..Q3P2_UpdateSalesTotals) ⇒ <code>void</code>
        * [~Q3_UpdateSalesTotals(year, sales, emp)](#module_cloud360..Q3_UpdateSalesTotals) ⇒ <code>Number</code>
        * [~Q2_SetBestCustomer(empSales)](#module_cloud360..Q2_SetBestCustomer) ⇒ <code>String</code>
            * [~CustomerSales](#module_cloud360..Q2_SetBestCustomer..CustomerSales) : <code>CustomerSales</code>
            * [~UpdateObject](#module_cloud360..Q2_SetBestCustomer..UpdateObject) : <code>CustomerSale</code>
            * [~CustomerSaleTotals](#module_cloud360..Q2_SetBestCustomer..CustomerSaleTotals) : <code>CustomerSales</code>
            * [~CustomerSaleTotal](#module_cloud360..Q2_SetBestCustomer..CustomerSaleTotal) : <code>CustomerSale</code>
            * [~BestCustomer](#module_cloud360..Q2_SetBestCustomer..BestCustomer) : <code>BestCustomer</code>
        * [~Q1_CalcDaysToBDay(emp, Current)](#module_cloud360..Q1_CalcDaysToBDay) ⇒ <code>Number</code>
        * [~RenderResults()](#module_cloud360..RenderResults) ⇒ <code>void</code>
        * [~Employee](#module_cloud360..Employee) : <code>Object</code>
        * [~Transaction](#module_cloud360..Transaction) : <code>Object</code>
        * [~CommissionRule](#module_cloud360..CommissionRule) : <code>Object</code>
        * [~Current](#module_cloud360..Current) : <code>Object</code>
        * [~Supervisor](#module_cloud360..Supervisor) : <code>Object</code>
        * [~ManagerSaleTotals](#module_cloud360..ManagerSaleTotals) : <code>Object</code>
        * [~Sales](#module_cloud360..Sales) : <code>Array.&lt;Object&gt;</code>
        * [~BestCustomer](#module_cloud360..BestCustomer) : <code>Object</code>
        * [~CustomerSale](#module_cloud360..CustomerSale) : <code>Object</code>
        * [~CustomerSales](#module_cloud360..CustomerSales) : <code>Array.&lt;CustomerSale&gt;</code>
        * [~Transactions](#module_cloud360..Transactions)

<a name="module_cloud360.init"></a>

### cloud360.init(markdown) ⇒ <code>String</code> \| <code>void</code>
Determines how to initialize module

**Kind**: static method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: Because we are Using promises, we don't want our business logic to cause
delays in rendering the dom.  So I chose to check if the dom state is completed (i.e. Drawn) and if not
wait until document ready to render dom updates.  If the dom was already ready and rendered, we can go ahead
and just render our results to the dom now and return.

We are also exporting init as our only public accessible function. Where the method can be called by the browser,
or we can call this using the markdown true and get a return string of what this renders for use in other
parts of the project (like the markdown/readme).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| markdown | <code>boolean</code> | <code>false</code> | Return output for use in markdown page |

<a name="module_cloud360..Employees"></a>

### cloud360~Employees : <code>Array.&lt;Employee&gt;</code>
Array of employees using Employee record objects

**Kind**: inner constant of [<code>cloud360</code>](#module_cloud360)  
<a name="module_cloud360..CommissionRules"></a>

### cloud360~CommissionRules : <code>Array.&lt;CommissionRule&gt;</code>
Array of CommissionRule records for calculating employee commissions for a sales period

**Kind**: inner constant of [<code>cloud360</code>](#module_cloud360)  
<a name="module_cloud360..UpdateEmpRec"></a>

### cloud360~UpdateEmpRec(year) ⇒ <code>Promise</code>
Creates new properties on Employees Object to store calculated values

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: This method was created to initiate the business logic updates.  
**Fulfill**: <code>void</code>  
**Reject**: <code>void</code>  

| Param | Type |
| --- | --- |
| year | <code>Number</code> | 

<a name="module_cloud360..Q5P1_DaysSinceSale"></a>

### cloud360~Q5P1\_DaysSinceSale(emp, Current) ⇒ <code>String</code>
Calculates the number of days since an employee had a sale

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: This number is usually quite handy to have in business from a CRM standpoint.
This allows a companies sales team to focus in worker productivity, or could be converted to last sale date
for a customer, so sales can reach out to their customers to try and bring them back in.  

| Param | Type |
| --- | --- |
| emp | <code>Employee</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..Q4_SetCommissions"></a>

### cloud360~Q4\_SetCommissions(emp, Current) ⇒ <code>void</code>
Calculates the sales commission earned and applies it to the Employee record object

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employee</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..Q3P2_UpdateSalesTotals"></a>

### cloud360~Q3P2\_UpdateSalesTotals(managerSaleTotals, Current) ⇒ <code>void</code>
Updates sale totals for supervisors

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| managerSaleTotals | <code>ManagerSaleTotals</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..Q3_UpdateSalesTotals"></a>

### cloud360~Q3\_UpdateSalesTotals(year, sales, emp) ⇒ <code>Number</code>
Updates employee sales totals for a period.  Returns sales for use in manager totals.

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| year | <code>String</code> | 
| sales | <code>Sales</code> | 
| emp | <code>Employee</code> | 

<a name="module_cloud360..Q2_SetBestCustomer"></a>

### cloud360~Q2\_SetBestCustomer(empSales) ⇒ <code>String</code>
Filters down employee sales for a period, then returns the customer name of their highest sale transaction

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: While the original data did not include multiple sales by the same customer, this doesn't match the real world.
To offset this, I added a couple more transactions to the 2013 revenue transaction list with the same customer names.  This method
filters down sales by employee, calculates each customers total sales, then selects the customer with
the highest total sale amount as the best customer.  

| Param | Type | Description |
| --- | --- | --- |
| empSales | <code>Array.&lt;Transaction&gt;</code> | Array of employee Sales from a period |


* [~Q2_SetBestCustomer(empSales)](#module_cloud360..Q2_SetBestCustomer) ⇒ <code>String</code>
    * [~CustomerSales](#module_cloud360..Q2_SetBestCustomer..CustomerSales) : <code>CustomerSales</code>
    * [~UpdateObject](#module_cloud360..Q2_SetBestCustomer..UpdateObject) : <code>CustomerSale</code>
    * [~CustomerSaleTotals](#module_cloud360..Q2_SetBestCustomer..CustomerSaleTotals) : <code>CustomerSales</code>
    * [~CustomerSaleTotal](#module_cloud360..Q2_SetBestCustomer..CustomerSaleTotal) : <code>CustomerSale</code>
    * [~BestCustomer](#module_cloud360..Q2_SetBestCustomer..BestCustomer) : <code>BestCustomer</code>

<a name="module_cloud360..Q2_SetBestCustomer..CustomerSales"></a>

#### Q2_SetBestCustomer~CustomerSales : <code>CustomerSales</code>
**Kind**: inner constant of [<code>Q2\_SetBestCustomer</code>](#module_cloud360..Q2_SetBestCustomer)  
<a name="module_cloud360..Q2_SetBestCustomer..UpdateObject"></a>

#### Q2_SetBestCustomer~UpdateObject : <code>CustomerSale</code>
**Kind**: inner constant of [<code>Q2\_SetBestCustomer</code>](#module_cloud360..Q2_SetBestCustomer)  
<a name="module_cloud360..Q2_SetBestCustomer..CustomerSaleTotals"></a>

#### Q2_SetBestCustomer~CustomerSaleTotals : <code>CustomerSales</code>
Array of customers and their calculated sales for given period

**Kind**: inner constant of [<code>Q2\_SetBestCustomer</code>](#module_cloud360..Q2_SetBestCustomer)  
<a name="module_cloud360..Q2_SetBestCustomer..CustomerSaleTotal"></a>

#### Q2_SetBestCustomer~CustomerSaleTotal : <code>CustomerSale</code>
Object with combined total of sales for a customer in a given period

**Kind**: inner constant of [<code>Q2\_SetBestCustomer</code>](#module_cloud360..Q2_SetBestCustomer)  
<a name="module_cloud360..Q2_SetBestCustomer..BestCustomer"></a>

#### Q2_SetBestCustomer~BestCustomer : <code>BestCustomer</code>
Object for the employee's customer name and total of sales for a period

**Kind**: inner constant of [<code>Q2\_SetBestCustomer</code>](#module_cloud360..Q2_SetBestCustomer)  
**Summary**: Now that we have broken down the list of sales by employee and totaled the sales up for each
customer, we can now reduce/eliminate customers by who has the greater total sales for the period.  This
will, in turn, give us our true Best Customer by sales volume.  
<a name="module_cloud360..Q1_CalcDaysToBDay"></a>

### cloud360~Q1\_CalcDaysToBDay(emp, Current) ⇒ <code>Number</code>
Returns number of days until an employees next birthday

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employee</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..RenderResults"></a>

### cloud360~RenderResults() ⇒ <code>void</code>
This draws the business logic to the dom when its ready

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: This method was chosen so that the rest of the page could continue to load while processing logic.
While there isn't a lot going on in this demo, on a normal site, we would want to control how/when we update the dom as data is ready.  
<a name="module_cloud360..Employee"></a>

### cloud360~Employee : <code>Object</code>
Employee record object

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| internalid | <code>String</code> | Employee internal ID |
| name | <code>String</code> | Employee name |
| email | <code>String</code> | Employee email |
| birthdate | <code>Date</code> | Employee birthday |
| supervisor | <code>Number</code> | Employee supervisor internal id |
| 2012 | <code>Number</code> | Revenue - Total of sales in 2013 |
| 2013 | <code>Number</code> | Revenue - Total of sales in 2013 |
| daystobday | <code>Number</code> | Number of days until employee birthday |
| bestcustomer | <code>BestCustomer</code> | Best customer for employee |
| commission | <code>Number</code> | Sales commission earned for previous sales period |
| dayssincesale | <code>Number</code> \| <code>String</code> | Number of days since last sale -- N/A if no sales for period |
| lastsaledate | <code>String</code> | Date of previous sale as string -- N/A if no sales for period |

<a name="module_cloud360..Transaction"></a>

### cloud360~Transaction : <code>Object</code>
Sales transaction record object

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type of transaction |
| customer | <code>String</code> | Transaction customer name |
| Employee | <code>Number</code> \| <code>String</code> | Employee internal ID of transaction |
| amount | <code>Number</code> \| <code>String</code> | Transaction total |
| saledate | <code>String</code> | Date of transaction |

<a name="module_cloud360..CommissionRule"></a>

### cloud360~CommissionRule : <code>Object</code>
Object of commission rules which are applicable calculating commission earned for an employee

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| employee | <code>Number</code> \| <code>String</code> | Employee internal ID of transaction |
| percentage | <code>String</code> | Commission percentage of sales |
| bonus | <code>Number</code> \| <code>String</code> | Bonus for increasing sales over previous period |

<a name="module_cloud360..Current"></a>

### cloud360~Current : <code>Object</code>
Object which contains current date properties for updating records

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| CurDate | <code>Date</code> | Current Date |
| CurMonth | <code>Date</code> | Current Month |
| CurYear | <code>Date</code> | Current Year |
| PrevCommYearName | <code>String</code> | Previous commission Year as property string name |
| CurrCommYearName | <code>String</code> | Current commission Year as property string name |
| CurrCommYear | <code>Number</code> | Current commission Year as number |

<a name="module_cloud360..Supervisor"></a>

### cloud360~Supervisor : <code>Object</code>
Object which stores the calculated total sales of a period for a supervisor

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | Total sales amount of managed employees |

<a name="module_cloud360..ManagerSaleTotals"></a>

### cloud360~ManagerSaleTotals : <code>Object</code>
Object which contains supervisors and their period sale totals

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ([0-9]+) | <code>Supervisor</code> | Internal ID of supervisor |

<a name="module_cloud360..Sales"></a>

### cloud360~Sales : <code>Array.&lt;Object&gt;</code>
Type definition for counting sale transaction totals

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | Sale transaction amount |

<a name="module_cloud360..BestCustomer"></a>

### cloud360~BestCustomer : <code>Object</code>
Object consisting of the name of an employees customer name with the most total sales and that amount

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of customer with highest total sale count |
| totalsales | <code>Number</code> | Accumulated total of all sales transactions for customer |

<a name="module_cloud360..CustomerSale"></a>

### cloud360~CustomerSale : <code>Object</code>
Object consisting of the name of a customer and sale total for a transaction

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| customer | <code>String</code> | Name of customer on transaction |
| amount | <code>Number</code> | Transaction sale total |

<a name="module_cloud360..CustomerSales"></a>

### cloud360~CustomerSales : <code>Array.&lt;CustomerSale&gt;</code>
Array of an employee's customer sales with the customer's name and amount of transaction

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
<a name="module_cloud360..Transactions"></a>

### cloud360~Transactions
Object compiled of of yearly revenue streams associated by year as id

**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 2013 | <code>Array.&lt;Transaction&gt;</code> | Sales transactions for 2013 |


## Copyright

&copy; @devnetkc 2022 and licensed MIT.
