/**
 * Task Templates module for ClickUp API endpoint methods.
 * @module TaskTemplates
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/taskTemplate';

/**
 * Class for using Task Templates ClickUp Endpoint.
 * @class
 */
class TaskTemplates {
  /**
   * Create a Task Template Endpoint with its API methods.
   * @param {string} baseUrl - The Base URL of ClickUp API.
   * @param {number} request - The type of HTTP Requester to use.
   * @param {number} apiKey - The ClickUp API Key.
   */
  constructor(baseUrl, request, apiKey) {
    this.baseUrl = baseUrl;
    this.request = request;
    this.apiKey = apiKey;
  }

  /**
   * Creates a new Task from a Template in ClickUp inside a list.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID to create the task.
   * @param {string|number} templateId - Task Template ID to create the task.
   * @param {string} name - The new name to set to the Task.
   * @return {Promise<Object>} The Task object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My Task", content: "New Task Content"...}
   * taskTemplates.createTaskFromTemplate("listId", "templateId", "My Task");
   */
  async createTaskFromTemplate(listId, templateId, name) {
    const taskTemplate = await this.request.post(
        `${this.baseUrl}/list/${listId}${pathUrl}/${templateId}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return taskTemplate;
  }

  /**
   * Gets an array of Task Templates in a Team in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} teamId - The Team ID.
   * @param {number} [page=0] - The Pagination to fetch.
   * @return {Promise<Array.<Object>>} An Array of Task Templates in a Team.
   * @example
   * // returns [{id: 123, name: "Task Template 1", ...},
   *  {id: 456, name: "Task Template 2", ...}]
   * taskTemplate.getTaskTemplates("teamId");
   */
  async getTaskTemplates(teamId, page=0) {
    const taskTemplates = await this.request.get(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {page: page},
        {'Authorization': this.apiKey},
    );
    return taskTemplates.templates;
  }
}

module.exports = TaskTemplates;
