/**
 * Teams module for ClickUp API endpoint methods.
 * @module Teams
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/team';

/**
 * Class for using Teams ClickUp Endpoint.
 * @class
 */
class Teams {
  /**
   * Create a Teams Endpoint with its API methods.
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
   * Gets an array of Teams in ClickUp.
   *
   * @async
   * @method
   * @return {Promise<Array.<Object>>} An Array of Team in Clickup.
   * @example
   * // returns [{id: 123, name: "Team 1", ...}, {id: 456, name: "Team 2", ...}]
   * teams.getTeams();
   */
  async getTeams() {
    const teams = await this.request.get(
        `${this.baseUrl}${pathUrl}`,
        null,
        {'Authorization': this.apiKey},
    );
    return teams.teams;
  }
}

module.exports = Teams;
