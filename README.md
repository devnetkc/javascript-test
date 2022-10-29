
# Introduction

<p align="center">
  <img src=".github/logo.png" width="300" height="175" alt="Bootstrap npm logo">
</p>

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

## Code Documentation

<a name="module_cloud360"></a>

## cloud360
**Format**:   

* [cloud360](#module_cloud360)
    * _static_
        * [.init(markdown)](#module_cloud360.init) ⇒ <code>String</code> \| <code>void</code>
    * _inner_
        * [~Employees](#module_cloud360..Employees) : <code>Employees</code>
        * [~UpdateEmpRec(year)](#module_cloud360..UpdateEmpRec) ⇒ <code>Promise</code>
        * [~Q5_DaysSinceSale(emp, Current)](#module_cloud360..Q5_DaysSinceSale) ⇒ <code>String</code>
        * [~Q4_SetCommissions(emp, Current)](#module_cloud360..Q4_SetCommissions) ⇒ <code>String</code>
        * [~Q3P2_UpdateSalesTotals(managerSaleTotals, Current)](#module_cloud360..Q3P2_UpdateSalesTotals) ⇒ <code>void</code>
        * [~UpdateSalesTotals(year, sales, emp)](#module_cloud360..UpdateSalesTotals) ⇒ <code>Number</code>
        * [~Q2_SetBestCustomer(emp, year)](#module_cloud360..Q2_SetBestCustomer) ⇒ <code>String</code>
        * [~Q1_CalcDaysToBDay(emp, Current)](#module_cloud360..Q1_CalcDaysToBDay) ⇒ <code>Number</code>
        * [~RenderResults()](#module_cloud360..RenderResults) ⇒ <code>void</code>
        * [~Employees](#module_cloud360..Employees) : <code>Object</code>
        * [~Current](#module_cloud360..Current) : <code>Object</code>
        * [~Supervisor](#module_cloud360..Supervisor) : <code>Object</code>
        * [~Supervisors](#module_cloud360..Supervisors) : <code>Object</code>
        * [~ManagerSaleTotals](#module_cloud360..ManagerSaleTotals) : <code>Object</code>
        * [~Sales](#module_cloud360..Sales) : <code>Array.&lt;Object&gt;</code>

<a name="module_cloud360.init"></a>

### cloud360.init(markdown) ⇒ <code>String</code> \| <code>void</code>
Determines how to initialize module

**Kind**: static method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| markdown | <code>boolean</code> | <code>false</code> | Return output for use in markdown page |

<a name="module_cloud360..Employees"></a>

### cloud360~Employees : <code>Employees</code>
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

<a name="module_cloud360..Q5_DaysSinceSale"></a>

### cloud360~Q5\_DaysSinceSale(emp, Current) ⇒ <code>String</code>
**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employees</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..Q4_SetCommissions"></a>

### cloud360~Q4\_SetCommissions(emp, Current) ⇒ <code>String</code>
**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employees</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..Q3P2_UpdateSalesTotals"></a>

### cloud360~Q3P2\_UpdateSalesTotals(managerSaleTotals, Current) ⇒ <code>void</code>
Updates sale totals for supervisors

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| managerSaleTotals | <code>ManagerSaleTotals</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..UpdateSalesTotals"></a>

### cloud360~UpdateSalesTotals(year, sales, emp) ⇒ <code>Number</code>
Updates employee sales totals for a period.  Returns sales for use in manager totals.

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| year | <code>String</code> | 
| sales | <code>Sales</code> | 
| emp | <code>Employees</code> | 

<a name="module_cloud360..Q2_SetBestCustomer"></a>

### cloud360~Q2\_SetBestCustomer(emp, year) ⇒ <code>String</code>
**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employees</code> | 
| year | <code>String</code> | 

<a name="module_cloud360..Q1_CalcDaysToBDay"></a>

### cloud360~Q1\_CalcDaysToBDay(emp, Current) ⇒ <code>Number</code>
Returns number of days until next birthday

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  

| Param | Type |
| --- | --- |
| emp | <code>Employees</code> | 
| Current | <code>Current</code> | 

<a name="module_cloud360..RenderResults"></a>

### cloud360~RenderResults() ⇒ <code>void</code>
This draws the business logic to the dom when its ready

**Kind**: inner method of [<code>cloud360</code>](#module_cloud360)  
**Summary**: This method was chosen so that the rest of the page could continue to load while processing logic.
 While there isn't a lot going on in this demo, on a normal site, we would want to control how/when we update the dom as data is ready.  
<a name="module_cloud360..Employees"></a>

### cloud360~Employees : <code>Object</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| internalid | <code>String</code> | ID. |
| name | <code>String</code> | employee name. |
| email | <code>String</code> | email. |
| birthdate | <code>Date</code> | birthday. |
| email | <code>String</code> | your age. |
| supervisor | <code>Number</code> | supervisor id |
| 2012 | <code>Number</code> | Revenue - supervisor id |
| 2013 | <code>Number</code> | Revenue - supervisor id |
| daystobday | <code>Number</code> | days until birthday |
| bestcustomer | <code>String</code> | best customer for employee |

<a name="module_cloud360..Current"></a>

### cloud360~Current : <code>Object</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| CurDate | <code>Date</code> | current Date. |
| CurMonth | <code>Date</code> | current Month |
| CurYear | <code>Date</code> | current Year |
| PrevCommYear | <code>Number</code> | previous commission Year |
| CurrCommYear | <code>Number</code> | current commission Year |

<a name="module_cloud360..Supervisor"></a>

### cloud360~Supervisor : <code>Object</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | sale amount. |

<a name="module_cloud360..Supervisors"></a>

### cloud360~Supervisors : <code>Object</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ([0-9]+) | <code>Supervisor</code> | Internal ID of supervisor |

<a name="module_cloud360..ManagerSaleTotals"></a>

### cloud360~ManagerSaleTotals : <code>Object</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type |
| --- | --- |
| supervisors | <code>Supervisors</code> | 

<a name="module_cloud360..Sales"></a>

### cloud360~Sales : <code>Array.&lt;Object&gt;</code>
**Kind**: inner typedef of [<code>cloud360</code>](#module_cloud360)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | sale amount. |


## Copyright

&copy; @devnetkc 2022 and licensed MIT.
