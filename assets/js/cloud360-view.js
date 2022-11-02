/**
 * @format
 * @module cloud360-view
 * @version 2.0.0
 * @since cloud360 v1.1.0
 */
import * as cloud360Types from './cloud360-types.js';
/**
 * @class RenderView
 * @description Holds view object for updated employee record and view
 * @param {String} selector - jQuery selector string for dom element to update view on
 * @property {String} title - Title for view
 * @property {String} question - Question shorthand title
 * @property {String} tableHeaderTop - Repeated use table header top for cards
 * @property {String} tableHeaderBot - Repeated use table header bottom for cards
 * @property {String} tableBot - Repeated use table bottom for cards
 * @summary Because the tables are being rendered so often, it made sense for parts to be setup as variables
 * which allows them to more easily be reused and modified later.
 * @since 1.0.0
 */
export class RenderView {
  constructor(selector) {
    this.selector = selector;
  }
  /**
   * @name setCardProperties
   * @description Sets view properties for rendering a card object
   * @method
   * @param {cloud360Types.Question} question - Question object with its properties
   * @param {String} parent - Parent jQuery selector string for dom element updates
   * @return {void}
   * @summary We are separating when/where these properties are set because they are only used for
   * rendering a card view and not raw data
   */
  setCardProperties(question, parent) {
    this.title = question.title;
    this.question = question.question;
    this.parent = parent;
    this.tableHeaderTop = `
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>`;
    this.tableHeaderBot = `
              </tr>
            </thead>
          <tbody>`;
    this.tableBot = `
              </tbody>
              </table>
            </div>`;
  }
  /**
   * @name addAccordionCard
   * @description Creates and renders a new accordion card for a question
   * @method
   * @param {Question} data - Data to create a question with
   * @param {boolean} expand - Set true if this is the first card in the accordion
   * @return {void}
   * @since 1.0.0
   */
  addAccordionCard(data, expand = false) {
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
  /**
   * @name renderView
   * @description Selects which way to render a question and calls that method
   * @method
   * @param {Question} data - Data to create a question with
   * @param {boolean} expand - Set true if this is the first card in the accordion
   * @return {void}
   * @summary I chose a switch statement here for rendering a question because there were so many different ways
   * to change the view, but allowed for a single calling method from outside the class to execute rendering.
   * @since 2.0.0
   */
  renderView(employees, question) {
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
        $(`#pre-${question}`).html(JSON.stringify(employees, null, '\t'));
    }
  }
  /**
   * @name renderQ1
   * @method
   * @protected
   * @description Renders results for question 1
   * @param {Employee[]} employees
   * @return {void}
   * @since 1.0.0
   */
  renderQ1(employees) {
    let content = `${this.tableHeaderTop}
            <th scope="col">Employee</th>
            <th scope="col">Days to Birthday</th>
            <th scope="col">Birthday</th>
            ${this.tableHeaderBot}`;
    employees.forEach(employee => {
      content += `
          <tr>
            <td>${employee.name}</td>
            <td>${employee.daystobday}</td>
            <td>${employee.birthdate}</td>
          </tr>`;
    });
    content += this.tableBot;
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
   * @since 1.0.0
   */
  renderQ3(employees, p2 = false) {
    let content = `${this.tableHeaderTop}
            <th scope="col">Employee</th>
            <th scope="col">2013 Revenue</th>
            ${this.tableHeaderBot}`;
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
    content += this.tableBot;
    $(`#body-${this.question}`).html(content);
  }
  /**
   * @name renderQ4
   * @method
   * @protected
   * @description Renders results for question 4
   * @param {Employee[]} employees
   * @return {void}
   * @since 1.0.0
   */
  renderQ4(employees) {
    let content = `${this.tableHeaderTop}
              <th scope="col">Employee</th>
              <th scope="col">2013 Commission</th>
            ${this.tableHeaderBot}`;
    employees.forEach(employee => {
      content += `
            <tr>
              <td>${employee.name}</td>
              <td>${employee.commission}</td>
            </tr>`;
    });
    content += this.tableBot;
    $(`#body-${this.question}`).html(content);
  }
  /**
   * @name renderQ5
   * @method
   * @protected
   * @description Renders results for question 5
   * @param {Employee[]} employees
   * @return {void}
   * @since 1.0.0
   */
  renderQ5(employees) {
    let content = `${this.tableHeaderTop}
              <th scope="col">Employee</th>
              <th scope="col">Last Sale Date</th>
              <th scope="col">Days Without a Sale</th>
              ${this.tableHeaderBot}`;
    employees.forEach(employee => {
      content += `
              <tr>
                <td>${employee.name}</td>
                <td>${employee.lastsaledate}</td>
                <td>${employee.dayssincesale}</td>
              </tr>`;
    });
    content += this.tableBot;
    $(`#body-${this.question}`).html(content);
  }
  /**
   * @name renderPerformanceQ
   * @method
   * @protected
   * @description Renders results for question 2 & 5 Part2 -- Based on Question 2
   * @param {Employee[]} employees
   * @param {boolean} worst=false - View for worst performing customer T/F
   * @return {void}
   * @since 1.0.0
   */
  renderPerformanceQ(employees, worst = false) {
    let content = `${this.tableHeaderTop}
          <th scope="col">Employee</th>
          <th scope="col">Customer</th>
          <th scope="col">Customer Total for Year</th>
          ${this.tableHeaderBot}`;
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
    content += this.tableBot;
    $(`#body-${this.question}`).html(content);
  }
}
