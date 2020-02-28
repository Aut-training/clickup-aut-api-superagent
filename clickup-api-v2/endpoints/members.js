/**
 * Members module for ClickUp API endpoint methods.
 * @module Members
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/Member';

/**
 * Class for using Members ClickUp Endpoint.
 * @class
 */
class Member {
  /**
   * Create a Member Endpoint with its API methods.
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
   * Get an array of Members in a task in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} taskId - The task ID.
   * @return {Promise<Array.<Object>>} An Array of Members.
   * @example
   * // returns [{"id": 812, "username": "Banana John",
   *  "email": "john_banana@example.com",, ...},
   *  {"username": "Pepe Pepon", "email": "pepe_pepon@example.com", ...}]
   * members.getTaskMembers("taskId");
   */
  async getTaskMembers(taskId) {
    const taskMembers = await this.request.get(
        `${this.baseUrl}/task/${taskId}${pathUrl}`,
        null,
        {'Authorization': this.apiKey},
    );
    return taskMembers.members;
  }

  /**
   * Get an array of Members in a List in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The task ID.
   * @return {Promise<Array.<Object>>} An Array of Members.
   * @example
   * // returns [{"id": 812, "username": "Banana John",
   *  "email": "john_banana@example.com",, ...},
   *  {"username": "Pepe Perez", "email": "pepe_perez@example.com", ...}]
   * members.getListMembers("taskId");
   */
  async getListMembers(listId) {
    const listMembers = await this.request.get(
        `${this.baseUrl}/list/${listId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return listMembers.members;
  }
}

module.exports = Member;
