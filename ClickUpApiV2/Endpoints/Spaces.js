const pathUrl = '/space';

/**
 * Class for using Spaces ClickUp Endpoint.
 * @class
 */
class Spaces {
  /**
   * Create a Spaces Endpoint with its API methods.
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
   * Creates a new Space in ClickUp with its default features.
   *
   * @async
   * @function createSpace
   * @param {string|number} teamId - The Team ID.
   * @param {string} spaceName - The name to set to the Space.
   * @return {Promise<Object>} The Space object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space", ...}
   * spaces.createSpace("My Space");
   */
  async createSpace(teamId, spaceName) {
    const response = await this.request.post(`${this.baseUrl}/team/${teamId}${pathUrl}`, {
      'name': spaceName,
      'multiple_assignees': true,
      'features': {
        'due_dates': {
          'enabled': true,
          'start_date': false,
          'remap_due_dates': true,
          'remap_closed_due_date': false
        },
        'time_tracking': {
          'enabled': false
        },
        'tags': {
          'enabled': true
        },
        'time_estimates': {
          'enabled': true
        },
        'checklists': {
          'enabled': true
        },
        'custom_fields': {
          'enabled': true
        },
        'remap_dependencies': {
          'enabled': true
        },
        'dependency_warning': {
          'enabled': true
        },
        'portfolios': {
          'enabled': true
        }
      }
    }, { 'Authorization': this.apiKey });
    return response;
  }

  /**
   * Updates a Space in ClickUp.
   *
   * @async
   * @function updateSpace
   * @param {string|number} spaceId - The Space ID.
   * @param {string} name - The new name to set to the Space.
   * @return {Promise<Object>} The Space object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space edited", ...}
   * spaces.updateSpace(123, "My Space edited");
   */
  async updateSpace(spaceId, name) {
    const response = await this.request.put(`${this.baseUrl}${pathUrl}/${spaceId}`, { name: name }, { 'Authorization': this.apiKey });
    return response;
  }

  /**
   * Deletes a Space in ClickUp.
   *
   * @async
   * @function deleteSpace
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Object>} An empty object if the deletion was successful by ClickUp.
   * @example
   * // returns {}
   * spaces.deleteSpace(123);
   */
  async deleteSpace(spaceId) {
    const response = await this.request.delete(`${this.baseUrl}${pathUrl}/${spaceId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }

  /**
   * Gets an array of Spaces in a Team in ClickUp.
   *
   * @async
   * @function getSpaces
   * @param {string|number} teamId - The Team ID.
   * @return {Promise<Array.<Object>>} An Array of Spaces in a Team.
   * @example
   * // returns [{id: 123, name: "Space 1", ...}, {id: 456, name: "Space 2", ...}]
   * spaces.getSpaces("TeamID");
   */
  async getSpaces(teamId) {
    const response = await this.request.get(`${this.baseUrl}/team/${teamId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return response.spaces;
  }

  /**
   * Gets an specific Space by its ID in ClickUp.
   *
   * @async
   * @function getSpace
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Object>} The Space object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space", ...}
   * spaces.getSpace(123);
   */
  async getSpace(spaceId) {
    const response = await this.request.get(`${this.baseUrl}${pathUrl}/${spaceId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }
}

module.exports = Spaces;
