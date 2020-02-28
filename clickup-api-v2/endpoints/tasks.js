/**
 * Tasks module for ClickUp API endpoint methods.
 * @module Tasks
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/task';

/**
 * Class for using Tasks ClickUp Endpoint.
 * @class
 */
class Tasks {
  /**
   * Create a Task Endpoint with its API methods.
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
   * Creates a new Task in ClickUp inside a list.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID to create the task.
   * @param {string} name - The name to set to the Task.
   * @param {string} content - The content/description to set to the Task.
   * @return {Promise<Object>} The Task object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My Task", content: "New Task Content"...}
   * tasks.createTask("My Task", "New Task Content");
   */
  async createTask(listId, name, content) {
    const task = await this.request.post(
        `${this.baseUrl}/list/${listId}${pathUrl}`,
        {name: name, content: content},
        {'Authorization': this.apiKey},
    );
    return task;
  }

  /**
   * Updates a Task in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID.
   * @param {string} name - The new name to set to the Task.
   * @param {string} content - The content/description to set to the Task.
   * @return {Promise<Object>} The Task object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My Task edited", ...}
   * tasks.updateTask(123, "My Task edited");
   */
  async updateTask(taskId, name, content) {
    const taskUpdated = await this.request.put(
        `${this.baseUrl}${pathUrl}/${taskId}`,
        {name: name, content: content},
        {'Authorization': this.apiKey},
    );
    return taskUpdated;
  }

  /**
   * Deletes a Task in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID.
   * @return {Promise<Object>} Empty object if the deletion was successful.
   * @example
   * // returns {}
   * tasks.deleteTask(123);
   */
  async deleteTask(taskId) {
    const taskDeleted = await this.request.delete(
        `${this.baseUrl}${pathUrl}/${taskId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return taskDeleted;
  }

  /**
   * Gets an array of Tasks in a List in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID.
   * @return {Promise<Array.<Object>>} An Array of Tasks in a List.
   * @example
   * // returns [{id: 123, name: "Task 1", ...}, {id: 456, name: "Task 2", ...}]
   * tasks.getTasks("listId");
   */
  async getTasks(listId) {
    const tasks = await this.request.get(
        `${this.baseUrl}/list/${listId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return tasks.tasks;
  }

  /**
   * Gets an specific Task by its ID in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID.
   * @return {Promise<Object>} The Task object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My Task", ...}
   * tasks.getTask(123);
   */
  async getTask(taskId) {
    const task = await this.request.get(
        `${this.baseUrl}${pathUrl}/${taskId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return task;
  }

  /**
   * Gets an array of Tasks in a Team in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} teamId - The Task ID.
   * @return {Promise<Array.<Object>>} An Array of Tasks in a Team.
   * @example
   * // returns [{id: 123, name: "Task 1", ...}, {id: 456, name: "Task 2", ...}]
   * tasks.getFilteredTeamTasks("teamId");
   */
  async getFilteredTeamTasks(teamId) {
    const tasks = await this.request.get(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return tasks.tasks;
  }
}

module.exports = Tasks;
