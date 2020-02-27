/**
 * Goals module for ClickUp API endpoint methods.
 * @module Goals
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/Goal';

/**
 * Class for using Goals ClickUp Endpoint.
 * @class
 */
class Goals {
  /**
   * Create a Goal Endpoint with its API methods.
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
   * Creates a new Goal.
   *
   * @async
   * @method
   * @param {number} teamId - The Team ID to create the Goal.
   * @param {string} name - The Name to set to the Goal.
   * @param {string} description - The Description to set to the Goal.
   * @return {Promise<Object>} The Goal object created by ClickUp.
   * @example
   * // returns {"goal": { "id": "c5ae6bc7", "pretty_id": "2": "name": "Goal Name",...}}
   * goals.createGoal("TeamId", "Goal Name", "Goal Description");
   */
  async createGoal(teamId, name, description) {
    const goal = await this.request.post(`${this.baseUrl}/team/${teamId}${pathUrl}`, {
      name: name,
      due_date: 1568036964079,
      description: description,
      multiple_owners: true,
      owners: [],
      color: '#32a852'
    }, { 'Authorization': this.apiKey });
    return goal.goal;
  }

  /**
   * Gets an array of Goals.
   *
   * @async
   * @method
   * @param {number} teamId - The Team ID.
   * @return {Promise<Array.<Object>>} An Array of Goals.
   * @example
   * // returns { "goals": [ {"id": "cbedd0df", "pretty_id": "1", "name":...}, {"id": "4ff9", ...} ] }
   * goals.getGoals("teamId");
   */
  async getGoals(teamId) {
    const goals = await this.request.get(`${this.baseUrl}/team/${teamId}${pathUrl}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return goals.goals;
  }

  /**
   * Updates a Goal.
   *
   * @async
   * @method
   * @param {string} goalId - The ID of the goal to be updated.
   * @param {string} name - The new goal name.
   * @param {string} description - The new goal description.
   * @return {Promise<Object>} The updated Goal object.
   * @example
   * // returns {"goal": { "id": "c5ae6bc7", "pretty_id": "2": "name": "Goal Name",...}}
   * goals.updateGoal("GoalId", "Goal Name", "Goal Description");
   */
  async updateGoal(goalId, name, description) {
    const goal = await this.request.put(`${this.baseUrl}${pathUrl}/${goalId}`, {
      name: name,
      due_date: 1568036964079,
      description: description,
      rem_owners: [],
      add_owners: [],
      color: '#32a852'
    }, { 'Authorization': this.apiKey });
    return goal.goal;
  }

  /**
   * Deletes a given Goal.
   *
   * @async
   * @method
   * @param {number} goalId - The Goal ID.
   * @return {Promise<Object>} An empty object when the deletion was successfully performed.
   * @example
   * // returns {}
   * goals.deleteGoal("GoalId");
   */
  async deleteGoal(goalId) {
    const goal = await this.request.delete(`${this.baseUrl}${pathUrl}/${goalId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return goal;
  }

  /**
   * Gets a single Goal object.
   *
   * @async
   * @method
   * @param {number} goalId - The Goal ID.
   * @return {Promise<Object>} The Goal object created by clickUp.
   * @example
   * // returns { "goal": {"id": "cbedd0df", "pretty_id": "1", "name":...} }
   * goals.getGoal("GoalId");
   */
  async getGoal(goalId) {
    const goal = await this.request.get(`${this.baseUrl}${pathUrl}/${goalId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return goal.goal;
  }

  /**
   * Creates a new Key Result.
   *
   * @async
   * @method
   * @param {number} goalId - The Goal ID to create the Key Result.
   * @param {string} name - The Name to set to the Key Result.
   * @return {Promise<Object>} The Key Result object created by ClickUp.
   * @example
   * // returns {"key_result": { "id": "0c724a04", "goal_id": "c5ae6bc7", "name": "Key Result Name",...}}
   * goals.createKeyResult("GoalId", "Key Result Name");
   */
  async createKeyResult(goalId, name) {
    const keyResult = await this.request.post(`${this.baseUrl}${pathUrl}/${goalId}/key_result`, {
      name: name,
      owners: [],
      type: 'number',
      steps_start: 0,
      steps_end: 10,
      unit: 'km',
      task_ids: [],
      list_ids: []
    }, { 'Authorization': this.apiKey });
    return keyResult.key_result;
  }

  /**
   * Updates a Key Result.
   *
   * @async
   * @method
   * @param {string} keyResultId - The ID of the Key Result to be updated.
   * @param {string} note - The new note add in the Key Result.
   * @return {Promise<Object>} The updated Key Result object.
   * @example
   * // returns { "key_result": { "id": "0c724a04", "goal_id": "c5ae6bc7", "name": "Key Result Name",...} }
   * goals.updateKeyResult("KeyResultId", "Note");
   */
  async updateKeyResult(keyResultId, note) {
    const keyResult = await this.request.put(`${this.baseUrl}/key_result/${keyResultId}`, {
      steps_current: 5,
      note: note
    }, { 'Authorization': this.apiKey });
    return keyResult.key_result;
  }

  /**
   * Deletes a given Key Result.
   *
   * @async
   * @method
   * @param {number} keyResultId - The Key Result ID.
   * @return {Promise<Object>} An empty object when the deletion was successfully performed.
   * @example
   * // returns {}
   * goals.deleteKeyResult("GoalId");
   */
  async deleteKeyResult(keyResultId) {
    const keyResult = await this.request.delete(`${this.baseUrl}/key_result/${keyResultId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return keyResult;
  }

}

module.exports = Goals;
