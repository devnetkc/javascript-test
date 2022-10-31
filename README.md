
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
* [~Revenue2013](#module_cloud360..Revenue)
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

## Modules

<dl>
<dt><a href="#module_cloud360Types">cloud360Types</a></dt>
<dd><p>Type definitions for Cloud 360 JavaScript Test</p>
</dd>
<dt><a href="#module_cloud360-view">cloud360-view</a></dt>
<dd></dd>
<dt><a href="#module_cloud360">cloud360</a></dt>
<dd></dd>
</dl>

<a name="module_cloud360Types"></a>

## cloud360Types
Type definitions for Cloud 360 JavaScript Test

**Format**:   

* [cloud360Types](#module_cloud360Types)
    * _static_
        * [.cloud360Types](#module_cloud360Types.cloud360Types)
    * _inner_
        * [~Employee](#module_cloud360Types..Employee) : <code>Object</code>
        * [~Transaction](#module_cloud360Types..Transaction) : <code>Object</code>
        * [~Transactions](#module_cloud360Types..Transactions) : <code>Object</code>
        * [~CommissionRule](#module_cloud360Types..CommissionRule) : <code>Object</code>
        * [~Current](#module_cloud360Types..Current) : <code>Object</code>
        * [~Supervisor](#module_cloud360Types..Supervisor) : <code>Object</code>
        * [~ManagerSaleTotals](#module_cloud360Types..ManagerSaleTotals) : <code>Object</code>
        * [~Sales](#module_cloud360Types..Sales) : <code>Array.&lt;Object&gt;</code>
        * [~HighLowCustomer](#module_cloud360Types..HighLowCustomer) : <code>Object</code>
        * [~CustomerSale](#module_cloud360Types..CustomerSale) : <code>Object</code>
        * [~CustomerSales](#module_cloud360Types..CustomerSales) : <code>Array.&lt;CustomerSale&gt;</code>
        * [~Question](#module_cloud360Types..Question) : <code>Object</code>
        * [~Questions](#module_cloud360Types..Questions) : <code>Array.&lt;Question&gt;</code>

<a name="module_cloud360Types.cloud360Types"></a>

### cloud360Types.cloud360Types
* END Type Definitions * *

**Kind**: static constant of [<code>cloud360Types</code>](#module_cloud360Types)  
<a name="module_cloud360Types..Employee"></a>

### cloud360Types~Employee : <code>Object</code>
Employee record object

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| internalid | <code>String</code> | Employee internal ID |
| name | <code>String</code> | Employee name |
| email | <code>String</code> | Employee email |
| birthdate | <code>Date</code> | Employee birthday |
| supervisor | <code>Number</code> | Employee supervisor internal id |
| 2012 | <code>Number</code> | Revenue - Total of sales in 2012 |
| 2013 | <code>Number</code> | Revenue - Total of sales in 2013 |
| daystobday | <code>Number</code> | Number of days until employee birthday |
| bestcustomer | <code>HighLowCustomer</code> | Best customer for employee |
| commission | <code>Number</code> | Sales commission earned for previous sales period |
| dayssincesale | <code>Number</code> \| <code>String</code> | Number of days since last sale -- N/A if no sales for period |
| lastsaledate | <code>String</code> | Date of previous sale as string -- N/A if no sales for period |
| worstperforming | <code>HighLowCustomer</code> | Performance stats for lowest performing customer for employee |

<a name="module_cloud360Types..Transaction"></a>

### cloud360Types~Transaction : <code>Object</code>
Sales transaction record object

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type of transaction |
| customer | <code>String</code> | Transaction customer name |
| Employee | <code>Number</code> \| <code>String</code> | Employee internal ID of transaction |
| amount | <code>Number</code> \| <code>String</code> | Transaction total |
| saledate | <code>String</code> | Date of transaction |

<a name="module_cloud360Types..Transactions"></a>

### cloud360Types~Transactions : <code>Object</code>
Object compiled of of yearly revenue streams associated by year as id

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 2013 | <code>Array.&lt;Transaction&gt;</code> | Sales transactions for 2013 |

<a name="module_cloud360Types..CommissionRule"></a>

### cloud360Types~CommissionRule : <code>Object</code>
Object of commission rules which are applicable calculating commission earned for an employee

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| employee | <code>Number</code> \| <code>String</code> | Employee internal ID of transaction |
| percentage | <code>String</code> | Commission percentage of sales |
| bonus | <code>Number</code> \| <code>String</code> | Bonus for increasing sales over previous period |

<a name="module_cloud360Types..Current"></a>

### cloud360Types~Current : <code>Object</code>
Object which contains current date properties for updating records

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| CurDate | <code>Date</code> | Current Date |
| CurMonth | <code>Date</code> | Current Month |
| CurYear | <code>Date</code> | Current Year |
| PrevCommYearName | <code>String</code> | Previous commission Year as property string name |
| CurrCommYearName | <code>String</code> | Current commission Year as property string name |
| CurrCommYear | <code>Number</code> | Current commission Year as number |

<a name="module_cloud360Types..Supervisor"></a>

### cloud360Types~Supervisor : <code>Object</code>
Object which stores the calculated total sales of a period for a supervisor

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | Total sales amount of managed employees |

<a name="module_cloud360Types..ManagerSaleTotals"></a>

### cloud360Types~ManagerSaleTotals : <code>Object</code>
Object which contains supervisors and their period sale totals

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ([0-9]+) | <code>Supervisor</code> | Internal ID of supervisor |

<a name="module_cloud360Types..Sales"></a>

### cloud360Types~Sales : <code>Array.&lt;Object&gt;</code>
Type definition for counting sale transaction totals

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | Sale transaction amount |

<a name="module_cloud360Types..HighLowCustomer"></a>

### cloud360Types~HighLowCustomer : <code>Object</code>
Object consisting of the name of an employees customers name with the most/least total sales and that amount

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of customer with highest total sale count |
| totalsales | <code>Number</code> | Accumulated total of all sales transactions for customer |

<a name="module_cloud360Types..CustomerSale"></a>

### cloud360Types~CustomerSale : <code>Object</code>
Object consisting of the name of a customer and sale total for a transaction

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| customer | <code>String</code> | Name of customer on transaction |
| amount | <code>Number</code> | Transaction sale total |

<a name="module_cloud360Types..CustomerSales"></a>

### cloud360Types~CustomerSales : <code>Array.&lt;CustomerSale&gt;</code>
Array of an employee's customer sales with the customer's name and amount of transaction

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
<a name="module_cloud360Types..Question"></a>

### cloud360Types~Question : <code>Object</code>
Each question has a view object associated with it to display in the dom.

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  

| Param | Type | Description |
| --- | --- | --- |
| internalid | <code>Number</code> | Internal ID for question |
| question | <code>String</code> | Display text for question number |
| title | <code>String</code> | Title of question |
| view | <code>Object</code> | View object for the question |

<a name="module_cloud360Types..Questions"></a>

### cloud360Types~Questions : <code>Array.&lt;Question&gt;</code>
List of questions with their titles and views for updating the dom independently.

**Kind**: inner typedef of [<code>cloud360Types</code>](#module_cloud360Types)  
<a name="module_cloud360-view"></a>

## cloud360-view
**Format**:   

* [cloud360-view](#module_cloud360-view)
    * [~RenderView](#module_cloud360-view..RenderView)
        * [new RenderView(question, selector, parent)](#new_module_cloud360-view..RenderView_new)
    * [~renderQ1(employees)](#module_cloud360-view..renderQ1) ⇒ <code>void</code>
    * [~renderQ3(employees, p2)](#module_cloud360-view..renderQ3) ⇒ <code>void</code>
    * [~renderQ4(employees)](#module_cloud360-view..renderQ4) ⇒ <code>void</code>
    * [~renderQ5(employees)](#module_cloud360-view..renderQ5) ⇒ <code>void</code>
    * [~renderPerformanceQ(employees, worst)](#module_cloud360-view..renderPerformanceQ) ⇒ <code>void</code>

<a name="module_cloud360-view..RenderView"></a>

### cloud360-view~RenderView
**Kind**: inner class of [<code>cloud360-view</code>](#module_cloud360-view)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Title for view |
| question | <code>String</code> | Question shorthand title |
| record | <code>Employee</code> | Employee object records for question |

<a name="new_module_cloud360-view..RenderView_new"></a>

#### new RenderView(question, selector, parent)
Holds view object for updated employee record and view


| Param | Type | Description |
| --- | --- | --- |
| question | <code>cloud360Types.Question</code> | Question object with its properties |
| selector | <code>String</code> | jQuery selector string for dom element to update view on |
| parent | <code>String</code> | Parent jQuery selector string for dom element updates |

<a name="module_cloud360-view..renderQ1"></a>

### cloud360-view~renderQ1(employees) ⇒ <code>void</code>
Renders results for question 1

**Kind**: inner method of [<code>cloud360-view</code>](#module_cloud360-view)  
**Access**: protected  

| Param | Type |
| --- | --- |
| employees | <code>Array.&lt;Employee&gt;</code> | 

<a name="module_cloud360-view..renderQ3"></a>

### cloud360-view~renderQ3(employees, p2) ⇒ <code>void</code>
Renders results for question 3

**Kind**: inner method of [<code>cloud360-view</code>](#module_cloud360-view)  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| employees | <code>Array.&lt;Employee&gt;</code> |  |  |
| p2 | <code>boolean</code> | <code>false</code> | Calculate for managers instead |

<a name="module_cloud360-view..renderQ4"></a>

### cloud360-view~renderQ4(employees) ⇒ <code>void</code>
Renders results for question 4

**Kind**: inner method of [<code>cloud360-view</code>](#module_cloud360-view)  
**Access**: protected  

| Param | Type |
| --- | --- |
| employees | <code>Array.&lt;Employee&gt;</code> | 

<a name="module_cloud360-view..renderQ5"></a>

### cloud360-view~renderQ5(employees) ⇒ <code>void</code>
Renders results for question 5

**Kind**: inner method of [<code>cloud360-view</code>](#module_cloud360-view)  
**Access**: protected  

| Param | Type |
| --- | --- |
| employees | <code>Array.&lt;Employee&gt;</code> | 

<a name="module_cloud360-view..renderPerformanceQ"></a>

### cloud360-view~renderPerformanceQ(employees, worst) ⇒ <code>void</code>
Renders results for question 2 & 5 Part2 -- Based on Question 2

**Kind**: inner method of [<code>cloud360-view</code>](#module_cloud360-view)  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| employees | <code>Array.&lt;Employee&gt;</code> |  |  |
| worst | <code>boolean</code> | <code>false</code> | View for worst performing customer T/F |

<a name="module_cloud360"></a>

## cloud360
**Format**:   

* [cloud360](#module_cloud360)
    * _static_
        * [.init(raw)](#module_cloud360.init) ⇒ <code>String</code> \| <code>void</code>
    * _inner_
        * [~Employees](#module_cloud360..Employees) : <code>Array.&lt;cloud360Types.Employee&gt;</code>
        * [~Revenue](#module_cloud360..Revenue) : <code>cloud360Types.Transactions</code>
        * [~CommissionRules](#module_cloud360..CommissionRules) : <code>Array.&lt;cloud360Types.CommissionRule&gt;</code>
        * [~UpdateEmpRec(year)](#module_cloud360..UpdateEmpRec) ⇒ <code>Promise</code>
        * [~Q5P1_DaysSinceSale(emp, Current)](#module_cloud360..Q5P1_DaysSinceSale) ⇒ <code>String</code>
        * [~Q4_SetCommissions(emp, Current)](#module_cloud360..Q4_SetCommissions) ⇒ <code>void</code>
        * [~Q3P2_UpdateSalesTotals(managerSaleTotals, Current)](#module_cloud360..Q3P2_UpdateSalesTotals) ⇒ <code>void</code>
        * [~Q3_UpdateSalesTotals(year, sales, emp)](#module_cloud360..Q3_UpdateSalesTotals) ⇒ <code>Number</code>
        * [~Q2_SetBestCustomer(empSales, worst)](#module_cloud360..Q2_SetBestCustomer) ⇒ <code>Promise</code>
        * [~Q1_CalcDaysToBDay(emp, Current)](#module_cloud360..Q1_CalcDaysToBDay) ⇒ <code>Number</code>
        * [~RenderResults()](#module_cloud360..RenderResults) ⇒ <code>void</code>

<a name="module_cloud360.init"></a>

### cloud360.init(raw) ⇒ <code>String</code> \| <code>void</code>
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
| raw | <code>boolean</code> | <code>false</code> | Return output for use in other format |

<a name="module_cloud360..Employees"></a>

### cloud360~Employees : <code>Array.&lt;cloud360Types.Employee&gt;</code>
Array of employees using Employee record objects

**Kind**: inner constant of [<code>cloud360</code>](#module_cloud360)  
<a name="module_cloud360..Revenue"></a>

### cloud360~Revenue : <code>cloud360Types.Transactions</code>
**Kind**: inner constant of [<code>cloud360</code>](#module_cloud360)  
<a name="module_cloud360..CommissionRules"></a>

### cloud360~CommissionRules : <code>Array.&lt;cloud360Types.CommissionRule&gt;</code>
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

### cloud360~Q2\_SetBestCustomer(empSales, worst) ⇒ <code>Promise</code>
Filters down employee sales for a period, then returns the customer name of their highest sale transaction

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: While the original data did not include multiple sales by the same customer, this doesn't match the real world.
To offset this, I added a couple more transactions to the 2013 revenue transaction list with the same customer names.  This method
filters down sales by employee, calculates each customers total sales, then selects the customer with
the highest total sale amount as the best customer.  
**Fulfill**: <code>HighLowCustomer</code> - Object with name and total sales of highest or lowest customer  
**Reject**: <code>Object</code> - Error object returned  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| empSales | <code>Array.&lt;Transaction&gt;</code> |  | Array of employee Sales from a period |
| worst | <code>boolean</code> | <code>false</code> | Gets the worst customer by sales volume when true |

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
This renders the raw data to the dom when it is read

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: This method was chosen so that the rest of the page could continue to load while processing logic.
While there isn't a lot going on in this demo, on a normal site, we would want to control how/when we update the dom as data is ready.  

## Copyright

&copy; @devnetkc 2022 and licensed MIT.
