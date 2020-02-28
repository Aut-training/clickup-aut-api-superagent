/**
 * ClickUp module for API endpoint.
 * @module ClickUpApi
 */

/** @constant {module} - Spaces endpoint module */
const Spaces = require('./endpoints/spaces');
/** @constant {module} - Folders endpoint module */
const Folders = require('./endpoints/folders');
/** @constant {module} - Lists endpoint module */
const Lists = require('./endpoints/lists');
/** @constant {module} - Task endpoint module */
const Tasks = require('./endpoints/tasks');
/** @constant {module} - TaskTemplates endpoint module */
const TaskTemplates = require('./endpoints/task-templates');
/** @constant {module} - Views endpoint module */
const Views = require('./endpoints/views');
/** @constant {module} - CheckLists endpoint module */
const Checklists = require('./endpoints/checklists');
/** @constant {module} - Comments endpoint module */
const Comments = require('./endpoints/comments');
/** @constant {module} - Tags endpoint module */
const Tags = require('./endpoints/tags');
/** @constant {module} - Teams endpoint module */
const Teams = require('./endpoints/teams');
/** @constant {module} - Members endpoint module */
const Members = require('./endpoints/members');
/** @constant {module} - Goals endpoint module */
const Goals = require('./endpoints/goals');
/** @constant {module} - Superagent API module*/
const request = require('../requesters/super-agent');
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
    return new Spaces(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Folders Endpoint instance of ClickUp API.
   *
   * @method
   * @return {object} The ClickUp Folders Endpoint instance
   */
  get folders() {
    return new Folders(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Lists Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Lists Endpoint instance
   */
  get lists() {
    return new Lists(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Tasks Endpoint instance of ClickUp API.
   *
   * @method
   * @return {object} The ClickUp Tasks Endpoint instance
   */
  get tasks() {
    return new Tasks(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Task Templates Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Task Templates Endpoint instance
   */
  get taskTemplates() {
    return new TaskTemplates(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Views Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Views Endpoint instance
   */
  get views() {
    return new Views(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Checklists Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Checklists Endpoint instance
   */
  get checklists() {
    return new Checklists(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Comments Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Comments Endpoint instance
   */
  get comments() {
    return new Comments(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Tags Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Tags Endpoint instance
   */
  get tags() {
    return new Tags(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Teams Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Teams Endpoint instance
   */
  get teams() {
    return new Teams(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Goals Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Goals Endpoint instance
   */
  get goals() {
    return new Goals(this.baseURL, request, apiKey);
  }

  /**
   * Gets the Members Endpoint instance of ClickUp API.
   *
   * @method
   * @return {Object} The ClickUp Members Endpoint instance
   */
  get members() {
    return new Members(this.baseURL, request, apiKey);
  }
}

module.exports = new ClickUpApi();
