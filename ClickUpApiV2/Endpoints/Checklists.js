/**
 * Checklists module for ClickUp API endpoint methods.
 * @module Checklists
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/Checklist';

/**
 * Class implementation for Checklist ClickUp Endpoint methods.
 * @class
 */
class Checklists {
  /**
   * Create a Checklist Endpoint with its API methods.
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
   * Creates a new Checklist within a task.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID to create the Checklist.
   * @param {string} name - The name to set to the Checklist.
   * @return {Promise<Object>} The Checklist object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": "123", "task_id": "1d55ac", "name", ...}}
   * checklist.createChecklist("TaskId", "New Checklist Name");
   */
  async createChecklist(taskId, name) {
    const checklist = await this.request.post(`${this.baseUrl}/task/${taskId}${pathUrl}`, {
      name: name
    }, { 'Authorization': this.apiKey });
    return checklist;
  }

  /**
   * Updates a Checklist within a task.
   *
   * @async
   * @method
   * @param {string|number} checklistId - The Checklist ID.
   * @param {string} name - The new name to set to the Checklist.
   * @param {number} position - The new position to set to the Checklist.
   * @return {Promise<Object>} The Checklist object updated by ClickUp.
   * @example
   * // returns {"checklist": { "id": "123", "task_id": "1d55ac", "name", ...}}
   * checklist.updateChecklist("ChecklistId", "New Checklist Name", "New Position");
   */
  async updateChecklist(checklistId, name, position) {
    const checklist = await this.request.put(`${this.baseUrl}${pathUrl}/${checklistId}`, {
      name: name,
      position: position
    }, { 'Authorization': this.apiKey });
    return checklist;
  }

  /**
   * Deletes a Checklist within a task.
   *
   * @async
   * @method
   * @param {string|number} checklistId - The Checklist ID.
   * @return {Promise<Object>} It should return an empty object.
   * @example
   * // returns {}
   * checklist.deleteChecklist("ChecklistId");
   */
  async deleteChecklist(checklistId) {
    const checklist = await this.request.delete(`${this.baseUrl}${pathUrl}/${checklistId}`,{
      archived: false
    }, { 'Authorization': this.apiKey });
    return checklist;
  }

  /**
   * Creates a new Item within a Checklist.
   *
   * @async
   * @method
   * @param {string|number} checklistId - The Checklist ID to create the Item.
   * @param {string} name - The name to set to the Checklist Item.
   * @return {Promise<Object>} The Item object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": "9b137560", "task_id": "1d55ac", "name", ...}}
   * checklist.createChecklistItem("ChecklistId", "New Checklist Item");
   */
  async createChecklistItem(checklistId, name) {
    const checklistItem = await this.request.post(`${this.baseUrl}${pathUrl}/${checklistId}/checklist_item`, {
      name: name,
      assignee: null
    }, { 'Authorization': this.apiKey });
    return checklistItem;
  }

  /**
   * Updates an Item within a Checklist.
   *
   * @async
   * @method
   * @param {string|number} checklistId - The Checklist ID to create the Item.
   * @param {string|number} checklistItemId - The Checklist Item ID.
   * @param {string} name - The new name to set to the Checklist Item.
   * @param {boolean} resolved - Status of the Checklist Item.
   * @return {Promise<Object>} The Item object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": "123", "task_id": "1d55ac", "name", ...}}
   * checklist.updateChecklistItem("ChecklistId", "checklistItemId", "New Item Name","resolvedStatus");
   */
  async updateChecklistItem(checklistId, checklistItemId, name, resolved) {
    const checklistItem = await this.request.put(`${this.baseUrl}${pathUrl}/${checklistId}/checklist_item/${checklistItemId}`, {
      name: name,
      assignee: null,
      resolved: resolved,
      parent: null
    }, { 'Authorization': this.apiKey });
    return checklistItem;
  }

  /**
   * Deletes an Item within a Checklist.
   *
   * @async
   * @method
   * @param {string|number} checklistId - The Checklist ID to create the Item.
   * @param {string|number} checklistItemId - The Checklist Item ID.
   * @return {Promise<Object>} It should return an empty object.
   * @example
   * // returns {}
   * checklist.deleteChecklistItem("ChecklistId", "ChecklistItemId");
   */
  async deleteChecklistItem(checklistId, checklistItemId) {
    const checklistItem = await this.request.delete(`${this.baseUrl}${pathUrl}/${checklistId}/checklist_item/${checklistItemId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return checklistItem;
  }

}

module.exports = Checklists;
