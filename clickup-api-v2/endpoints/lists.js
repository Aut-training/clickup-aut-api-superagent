/**
 * Lists module for ClickUp API endpoint methods.
 * @module Lists
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/List';

/**
 * Class for using Lists ClickUp Endpoint.
 * @class
 */
class Lists {
  /**
   * Create a List Endpoint with its API methods.
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
   * Creates a new List in ClickUp inside a folder.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID to create the list.
   * @param {string} name - The name to set to the List.
   * @param {string} content - The content to set to the list.
   * @return {Promise<Object>} The List object created by ClickUp.
   * @example
   * // returns {"name": "New List Name", "content": "New List Content"}
   * lists.createList("FolderId", "New List Name", "New List Content");
   */
  async createList(folderId, name, content) {
    const list = await this.request.post(
        `${this.baseUrl}/folder/${folderId}${pathUrl}`,
        {
          name: name,
          content: content,
        },
        {'Authorization': this.apiKey},
    );
    return list;
  }

  /**
   * Creates a new List in ClickUp inside a space.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID to create the list.
   * @param {string} name - The name to set to the List.
   * @param {string} content - The content to set to the list.
   * @return {Promise<Object>} The List object created by ClickUp.
   * @example
   * // returns {"name": "New List Name", "content": "New List Content"}
   * lists.createFolderlessList("SpaceId", "New List Name", "New List Content");
   */
  async createFolderlessList(spaceId, name, content) {
    const list = await this.request.post(
        `${this.baseUrl}/space/${spaceId}${pathUrl}`,
        {
          name: name,
          content: content,
        },
        {'Authorization': this.apiKey},
    );
    return list;
  }

  /**
   * Updates a List in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID.
   * @param {string} name - The name to set to the List.
   * @param {string} content - The content to set to the list.
   * @return {Promise<Object>} The List object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My List edited", ...}
   * lists.updateList(123, "My List edited");
   */
  async updateList(listId, name, content) {
    const listUpdated = await this.request.put(
        `${this.baseUrl}${pathUrl}/${listId}`,
        {
          name: name,
          content: content,
        },
        {'Authorization': this.apiKey},
    );
    return listUpdated;
  }

  /**
   * Deletes a List in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID.
   * @return {Promise<Object>} Empty object if the deletion was successful.
   * @example
   * // returns {}
   * lists.deleteList(123);
   */
  async deleteList(listId) {
    const listDeleted = await this.request.delete(
        `${this.baseUrl}${pathUrl}/${listId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return listDeleted;
  }

  /**
   * Gets an array of Lists in a Folder in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @return {Promise<Array.<Object>>} An Array of Lists in a Folder.
   * @example
   * // returns [{id: 123, name: "List 1", ...}, {id: 456, name: "List 2", ...}]
   * lists.getLists("FolderID");
   */
  async getLists(folderId) {
    const lists = await this.request.get(
        `${this.baseUrl}/folder/${folderId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return lists.lists;
  }

  /**
   * Gets an array of Lists without Folders in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Array.<Object>>} An Array of Lists without Folders.
   * @example
   * // returns [{id: 123, name: "List 1", ...}, {id: 456, name: "List 2", ...}]
   * lists.getFolderlessLists("SpaceID");
   */
  async getFolderlessLists(spaceId) {
    const lists = await this.request.get(
        `${this.baseUrl}/space/${spaceId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return lists.lists;
  }

  /**
   * Gets an specific List by its ID in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @return {Promise<Object>} The List object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My List", ...}
   * lists.getList(123);
   */
  async getList(folderId) {
    const list = await this.request.get(
        `${this.baseUrl}${pathUrl}/${folderId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return list;
  }
}

module.exports = Lists;
