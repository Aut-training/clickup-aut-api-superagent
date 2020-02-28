/**
 * Spaces module for ClickUp API endpoint methods.
 * @module Spaces
 */

/** @constant {string} - Path URL for the endpoint */
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
   * @method
   * @param {string|number} teamId - The Team ID.
   * @param {string} spaceName - The name to set to the Space.
   * @return {Promise<Object>} The Space object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space", ...}
   * spaces.createSpace("My Space");
   */
  async createSpace(teamId, spaceName) {
    const spaceCreated = await this.request.post(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {
          'name': spaceName,
          'multiple_assignees': true,
          'features': {
            'due_dates': {
              'enabled': true,
              'start_date': false,
              'remap_due_dates': true,
              'remap_closed_due_date': false,
            },
            'time_tracking': {
              'enabled': false,
            },
            'tags': {
              'enabled': true,
            },
            'time_estimates': {
              'enabled': true,
            },
            'checklists': {
              'enabled': true,
            },
            'custom_fields': {
              'enabled': true,
            },
            'remap_dependencies': {
              'enabled': true,
            },
            'dependency_warning': {
              'enabled': true,
            },
            'portfolios': {
              'enabled': true,
            },
          },
        },
        {'Authorization': this.apiKey},
    );
    return spaceCreated;
  }

  /**
   * Updates a Space in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @param {string} name - The new name to set to the Space.
   * @return {Promise<Object>} The Space object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space edited", ...}
   * spaces.updateSpace(123, "My Space edited");
   */
  async updateSpace(spaceId, name) {
    const spaceUpdated = await this.request.put(
        `${this.baseUrl}${pathUrl}/${spaceId}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return spaceUpdated;
  }

  /**
   * Deletes a Space in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Object>} Empty object if the deletion was successful.
   * @example
   * // returns {}
   * spaces.deleteSpace(123);
   */
  async deleteSpace(spaceId) {
    const spaceDeleted = await this.request.delete(
        `${this.baseUrl}${pathUrl}/${spaceId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return spaceDeleted;
  }

  /**
   * Gets an array of Spaces in a Team in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} teamId - The Team ID.
   * @return {Promise<Array.<Object>>} An Array of Spaces in a Team.
   * @example
   * // returns [{id: 123, name: "Space 1", ...},
   *  {id: 456, name: "Space 2", ...}]
   * spaces.getSpaces("TeamID");
   */
  async getSpaces(teamId) {
    const spaces = await this.request.get(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return spaces.spaces;
  }

  /**
   * Gets an specific Space by its ID in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Object>} The Space object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My Space", ...}
   * spaces.getSpace(123);
   */
  async getSpace(spaceId) {
    const space = await this.request.get(
        `${this.baseUrl}${pathUrl}/${spaceId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return space;
  }
}

module.exports = Spaces;
