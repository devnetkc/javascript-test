/**
 * @format
 * @module cloud360-view
 */

/**
 * @typedef Record
 * @type {Object}
 * @description Employee record object
 * @property {String} internalid - Employee internal ID
 * @property {String} name - Employee name
 * @property {String} email - Employee email
 * @property {Date} birthdate - Employee birthday
 * @property {Number} supervisor - Employee supervisor internal id
 * @property {Number} 2012 Revenue - Total of sales in 2013
 * @property {Number} 2013 Revenue - Total of sales in 2013
 * @property {Number} daystobday - Number of days until employee birthday
 * @property {HighLowCustomer} bestcustomer - Best customer for employee
 * @property {Number} commission - Sales commission earned for previous sales period
 * @property {Number|String} dayssincesale - Number of days since last sale -- N/A if no sales for period
 * @property {String} lastsaledate - Date of previous sale as string -- N/A if no sales for period
 * @property {HighLowCustomer} worstperforming - Performance stats for lowest performing customer for employee
 */
/**
 * @typedef Question
 * @description Each question has a view object associated with it to display in the dom.
 * @type {Object}
 * @param {Number} internalid - Internal ID for question
 * @param {String} question - Display text for question number
 * @param {String} title - Title of question
 * @param {Object} view - View object for the question
 */
/**
 * @class RenderView
 * @description Holds view object for updated employee record and view
 * @param {Question} question - Question object with its properties
 * @param {String} selector - jQuery selector string for dom element to update view on
 * @property {String} title - Title for view
 * @property {String} question - Question shorthand title
 * @property {Record} record - Employee object records for question
 * @param {String} parent - Parent jQuery selector string for dom element updates
 */
export class RenderView {
    constructor(question, selector, parent) {
        this.title = question.title;
        this.question = question.question;
        this.selector = selector;
        this.parent = parent;
        /** @type {Record[]} */
        this.record = [];
    }
    addAccordionCard(data, expand = false) {
        this.pa;
        const Content = `<div class="card">
            <div class="card-header"
              id="${data.internalid}-${data.question}">
    <h2 class="mb-0">
        <button class="btn btn-link" type="button"
        data-toggle="collapse" data-target="#collapseQuestion${data.question}"
        aria-expanded="${expand}"
        aria-controls="collapseQuestion${data.question}"> 
        ${data.question} | ${data.title}
          </button>
      </h2>
          </div>

              <div id="collapseQuestion${data.question}" 
              class="collapse ${expand ? 'show' : ''}"
              aria-labelledby="question${data.question}" data-parent="${
      this.parent
    }">
                  <div id="body-${data.question}" class="card-body">
                  </div>
              </div>
          </div>`;
        // render the card
        $(this.parent).append(Content);
    }
    addRecord(value) {
        this.record.push(value);
    }
    render(employees, question) {
            switch (question.question) {
                case 'Q1':
                    this.renderQ1(employees);
                    break;
                case 'Q2':
                    this.renderPerformanceQ(employees);
                    break;
                case 'Q3P1':
                    this.renderQ3(employees);
                    break;
                case 'Q3P2':
                    this.renderQ3(employees, true);
                    break;
                case 'Q4':
                    this.renderQ4(employees);
                    break;
                case 'Q5P1':
                    this.renderQ5(employees);
                    break;
                case 'Q5P2':
                    this.renderPerformanceQ(employees, true);
                    break;
                default:
                    $(`#pre-${this.question}`).html(
                        JSON.stringify(this.record, null, '\t')
                    );
            }
        }
        /**
         * @name renderQ1
         * @method
         * @protected
         * @description Renders results for question 1
         * @param {Employee[]} employees
         * @return {void}
         */
    renderQ1(employees) {
            let content = `      
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Days to Birthday</th>
                <th scope="col">Birthday</th>
              </tr>
            </thead>
            <tbody>`;
            employees.forEach(employee => {
                content += `
              <tr>
                <td>${employee.name}</td>
                <td>${employee.daystobday}</td>
                <td>${employee.birthdate}</td>
              </tr>`;
            });
            content += `</tbody>
          </table>
        </div>`;
            $(`#body-${this.question}`).html(content);
        }
        /**
         * @name renderQ3
         * @method
         * @protected
         * @description Renders results for question 3
         * @param {Employee[]} employees
         * @param {boolean} p2=false - Calculate for managers instead
         * @return {void}
         */
    renderQ3(employees, p2 = false) {
            let content = `      
      <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">2013 Revenue</th>
          </tr>
        </thead>
        <tbody>`;
            for (const Emp of employees) {
                // We don't wan to see supervisors for this one
                if (Emp.supervisor === '' && !p2) continue;
                // We don't wan to see reg employees for this one
                if (Emp.supervisor !== '' && p2) continue;
                content += `
          <tr>
            <td>${Emp.name}</td>
            <td>${Emp['2013 Revenue']}</td>
          </tr>`;
            }
            content += `</tbody>
      </table>
    </div>`;
            $(`#body-${this.question}`).html(content);
        }
        /**
         * @name renderQ4
         * @method
         * @protected
         * @description Renders results for question 4
         * @param {Employee[]} employees
         * @return {void}
         */
    renderQ4(employees) {
            let content = `      
        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
            <th scope="col">Employee</th>
            <th scope="col">2013 Commission</th>
            </tr>
          </thead>
          <tbody>`;
            employees.forEach(employee => {
                content += `
            <tr>
              <td>${employee.name}</td>
              <td>${employee.commission}</td>
            </tr>`;
            });
            content += `</tbody>
        </table>
      </div>`;
            $(`#body-${this.question}`).html(content);
        }
        /**
         * @name renderQ5
         * @method
         * @protected
         * @description Renders results for question 5
         * @param {Employee[]} employees
         * @return {void}
         */
    renderQ5(employees) {
            let content = `      
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
              <th scope="col">Employee</th>
              <th scope="col">Last Sale Date</th>
              <th scope="col">Days Without a Sale</th>
              </tr>
            </thead>
            <tbody>`;
            employees.forEach(employee => {
                content += `
              <tr>
              <td>${employee.name}</td>
                <td>${employee.lastsaledate}</td>
                <td>${employee.dayssincesale}</td>
              </tr>`;
            });
            content += `</tbody>
          </table>
        </div>`;
            $(`#body-${this.question}`).html(content);
        }
        /**
         * @name renderPerformanceQ
         * @method
         * @protected
         * @description Renders results for question 2 & 5 Part2 -- Based on Question 2
         * @param {Employee[]} employees
         * @param {boolean} worst - View for worst performing customer T/F
         * @return {void}
         */
    renderPerformanceQ(employees, worst = false) {
        let content = `      
            <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Employee</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Customer Total for Year</th>
                </tr>
              </thead>
              <tbody>`;
        for (const Emp of employees) {
            // We don't wan to see supervisors for this one
            if (!worst && Emp.bestcustomer.totalsales <= 0) continue;
            // We don't wan to see supervisors for this one
            if (worst && Emp.worstperforming.totalsales <= 0) continue;
            content += `
              <tr>
                <td>${Emp.name}</td>
                <td>${
                  worst ? Emp.worstperforming.name : Emp.bestcustomer.name
                }</td>
                <td>${
                  worst
                    ? Emp.worstperforming.totalsales
                    : Emp.bestcustomer.totalsales
                }</td>
              </tr>`;
        }
        content += `</tbody>
            </table>
          </div>`;
        $(`#body-${this.question}`).html(content);
    }
}