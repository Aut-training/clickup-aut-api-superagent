/**
 * Folders module for ClickUp API endpoint methods.
 * @module Folders
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/folder';

/**
 * Class implementation for Folders ClickUp Endpoint methods.
 * @class
 */
class Folders {
  /**
   * Create a Folder Endpoint with its API methods.
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
   * Creates a new Folder in ClickUp inside a space.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID to create the folder.
   * @param {string} name - The name to set to the Folder.
   * @return {Promise<Object>} The Folder object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My Folder", ...}
   * folders.createFolder("My Folder");
   */
  async createFolder(spaceId, name) {
    const folder = await this.request.post(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { name: name }, { 'Authorization': this.apiKey });
    return folder;
  }

  /**
   * Updates a Folder in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @param {string} name - The new name to set to the Folder.
   * @return {Promise<Object>} The Folder object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My Folder edited", ...}
   * folders.updateFolder(123, "My Folder edited");
   */
  async updateFolder(folderId, name) {
    const folderUpdated = await this.request.put(`${this.baseUrl}${pathUrl}/${folderId}`, { name: name }, { 'Authorization': this.apiKey });
    return folderUpdated;
  }

  /**
   * Deletes a Folder in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @return {Promise<Object>} An empty object if the deletion was successful by ClickUp.
   * @example
   * // returns {}
   * folders.deleteFolder(123);
   */
  async deleteFolder(folderId) {
    const folderDeleted = await this.request.delete(`${this.baseUrl}${pathUrl}/${folderId}`, { archived: false }, { 'Authorization': this.apiKey });
    return folderDeleted;
  }

  /**
   * Gets an array of Folders in a Space in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Array.<Object>>} An Array of Folders in a Space.
   * @example
   * // returns [{id: 123, name: "Folder 1", ...}, {id: 456, name: "Folder 2", ...}]
   * folders.getFolders("SpaceId");
   */
  async getFolders(spaceId) {
    const folders = await this.request.get(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return folders.folders;
  }

  /**
   * Gets an specific Space by its ID in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @return {Promise<Object>} The Folder object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My Folder", ...}
   * folders.getFolder(123);
   */
  async getFolder(folderId) {
    const space = await this.request.get(`${this.baseUrl}${pathUrl}/${folderId}`, { archived: false }, { 'Authorization': this.apiKey });
    return space;
  }
  
}

module.exports = Folders;
