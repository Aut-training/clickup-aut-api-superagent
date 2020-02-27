/**
 * ClickUp module for API endpoint.
 * @module ClickUpApi
 */

/** @constant {module} - Spaces endpoint module */
const spaces = require('./Endpoints/Spaces');
/** @constant {module} - Folders endpoint module */
const folders = require('./Endpoints/Folders');
/** @constant {module} - Lists endpoint module */
const lists = require('./Endpoints/Lists');
/** @constant {module} - Task endpoint module */
const tasks = require('./Endpoints/Tasks');
/** @constant {module} - TaskTemplates endpoint module */
const taskTemplates = require('./Endpoints/TaskTemplates');
/** @constant {module} - Views endpoint module */
const views = require('./Endpoints/Views');
/** @constant {module} - CheckLists endpoint module */
const checklists = require('./Endpoints/Checklists');
/** @constant {module} - Comments endpoint module */
const comments = require('./Endpoints/Comments');
/** @constant {module} - Tags endpoint module */
const tags = require('./Endpoints/Tags');
/** @constant {module} - Teams endpoint module */
const teams = require('./Endpoints/Teams');
/** @constant {module} - Members endpoint module */
const members = require('./Endpoints/Members');
/** @constant {module} - Goals endpoint module */
const goals = require('./Endpoints/Goals');
/** @constant {module} - Superagent API module*/
const request = require('../Requesters/SuperAgent');
/** @constant {string} - ClickUP API key */
const apiKey = 'pk_3023811_ND9FAB6MPKZRPJXSC81IUEVCQNN3O1Q3';

/**
 * Class implementation for using ClickUp API.
 * @class
 */
class ClickUpApi {
  /**
   * Gets the version of the API.
   * 
   * @method
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
   * 
   * @method
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
   * 
   * @method
   * @return {Object} The ClickUp Spaces Endpoint instance
   */
  get spaces() {
    return new spaces(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Folders Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {object} The ClickUp Folders Endpoint instance
   */
  get folders() {
    return new folders(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Lists Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Lists Endpoint instance
   */
  get lists() {
    return new lists(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Tasks Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {object} The ClickUp Tasks Endpoint instance
   */
  get tasks() {
    return new tasks(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Task Templates Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Task Templates Endpoint instance
   */
  get taskTemplates() {
    return new taskTemplates(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Views Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Views Endpoint instance
   */
  get views() {
    return new views(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Checklists Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Checklists Endpoint instance
   */
  get checklists() {
    return new checklists(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Comments Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Comments Endpoint instance
   */
  get comments() {
    return new comments(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Tags Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Tags Endpoint instance
   */
  get tags() {
    return new tags(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Teams Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Teams Endpoint instance
   */
  get teams() {
    return new teams(this.baseURL, request, apiKey);
  }
  
  /**
   * Gets the Goals Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Goals Endpoint instance
   */
  get goals() {
    return new goals(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Members Endpoint instance of ClickUp API.
   * 
   * @method
   * @return {Object} The ClickUp Members Endpoint instance
   */
  get members() {
    return new members(this.baseURL, request, apiKey);
  }

}

module.exports = new ClickUpApi();
