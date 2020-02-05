const spaces = require('./Endpoints/Spaces');
const folders = require('./Endpoints/Folders');
const lists = require('./Endpoints/Lists');
const tasks = require('./Endpoints/Tasks');
const taskTemplates = require('./Endpoints/TaskTemplates');
const views = require('./Endpoints/Views');
const request = require('../Requesters/SuperAgent');
const apiKey = 'pk_3023811_ND9FAB6MPKZRPJXSC81IUEVCQNN3O1Q3';

/**
 * Class for using ClickUp API.
 * @class
 */
class ClickUpApi {
  /**
   * Gets the version of the API.
   * @return {number} The version.
   * @example
   * // returns 2
   * clickUpApi.version();
   */
  get version() {
    return 2;
  }

  /**
   * Gets the base URL of the API.
   * @return {string} The base URL of ClickUp API
   * @example
   * // returns "https://api.clickup.com/api/v2"
   * clickUpApi.baseURL();
   */
  get baseURL() {
    return `https://api.clickup.com/api/v${this.version}`;
  }

  /**
   * Gets the Spaces Endpoint instance of ClickUp API.
   * @return {Object} The ClickUp Spaces Endpoint instance
   */
  get spaces() {
    return new spaces(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Folders Endpoint instance of ClickUp API.
   * @return {object} The ClickUp Folders Endpoint instance
   */
  get folders() {
    return new folders(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Lists Endpoint instance of ClickUp API.
   * @return {object} The ClickUp Lists Endpoint instance
   */
  get lists() {
    return new lists(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Tasks Endpoint instance of ClickUp API.
   * @return {object} The ClickUp Tasks Endpoint instance
   */
  get tasks() {
    return new tasks(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Task Templates Endpoint instance of ClickUp API.
   * @return {object} The ClickUp Task Templates Endpoint instance
   */
  get taskTemplates() {
    return new taskTemplates(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Views Endpoint instance of ClickUp API.
   * @return {object} The ClickUp Views Endpoint instance
   */
  get views() {
    return new views(this.baseURL, request, apiKey);
  }

}

module.exports = new ClickUpApi();
