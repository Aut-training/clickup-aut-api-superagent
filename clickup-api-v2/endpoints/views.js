/**
 * Views module for ClickUp API endpoint methods.
 * @module Views
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/view';

/**
 * Class for using Views ClickUp Endpoint.
 * @class
 */
class Views {
  /**
   * Create a View Endpoint with its API methods.
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
   * Creates a new Team View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} teamId - The Team ID to create the Team View.
   * @param {string} name - The name to set to the Team View.
   * @return {Promise<Object>} The View object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My View", ...}
   * views.createTeamView("teamId", "My View");
   */
  async createTeamView(teamId, name) {
    const view = await this.request.post(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return view.view;
  }

  /**
   * Creates a new Space View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID to create the Space View.
   * @param {string} name - The name to set to the Space View.
   * @return {Promise<Object>} The View object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My View", ...}
   * views.createSpaceView("spaceId", "My View");
   */
  async createSpaceView(spaceId, name) {
    const view = await this.request.post(
        `${this.baseUrl}/space/${spaceId}${pathUrl}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return view.view;
  }

  /**
   * Creates a new Folder View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID to create the Folder View.
   * @param {string} name - The name to set to the Folder View.
   * @return {Promise<Object>} The View object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My View", ...}
   * views.createFolderView("folderId", "My View");
   */
  async createFolderView(folderId, name) {
    const view = await this.request.post(
        `${this.baseUrl}/folder/${folderId}${pathUrl}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return view.view;
  }

  /**
   * Creates a new List View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID to create the List View.
   * @param {string} name - The name to set to the List View.
   * @return {Promise<Object>} The View object created by ClickUp.
   * @example
   * // returns {id: 123, name: "My View", ...}
   * views.createListView("listId", "My View");
   */
  async createListView(listId, name) {
    const view = await this.request.post(
        `${this.baseUrl}/list/${listId}${pathUrl}`,
        {name: name},
        {'Authorization': this.apiKey},
    );
    return view.view;
  }

  /**
   * Updates a View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} viewId - The View ID.
   * @param {string} name - The new name to set to the View.
   * @return {Promise<Object>} The View object updated by ClickUp.
   * @example
   * // returns {id: 123, name: "My View edited", ...}
   * views.updateView(123, "My View edited");
   */
  async updateView(viewId, name) {
    const viewUpdated = await this.request.put(
        `${this.baseUrl}${pathUrl}/${viewId}`,
        {
          'name': name,
          'type': 'list',
          'parent': {
            'id': '512',
            'type': 7,
          },
          'grouping': {
            'field': 'status',
            'dir': 1,
            'collapsed': [],
            'ignore': false,
          },
          'divide': {
            'field': null,
            'dir': null,
            'collapsed': [],
          },
          'sorting': {
            'fields': [],
          },
          'filters': {
            'op': 'AND',
            'fields': [],
            'search': '',
            'show_closed': false,
          },
          'columns': {
            'fields': [],
          },
          'team_sidebar': {
            'assignees': [],
            'assigned_comments': false,
            'unassigned_tasks': false,
          },
          'settings': {
            'show_task_locations': false,
            'show_subtasks': 3,
            'show_subtask_parent_names': false,
            'show_closed_subtasks': false,
            'show_assignees': true,
            'show_images': true,
            'collapse_empty_columns': null,
            'me_comments': true,
            'me_subtasks': true,
            'me_checklists': true,
          },
        },
        {'Authorization': this.apiKey},
    );
    return viewUpdated.view;
  }

  /**
   * Deletes a View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} viewId - The View ID.
   * @return {Promise<Object>} Empty object if the deletion was successful.
   * @example
   * // returns {}
   * views.deleteView(123);
   */
  async deleteView(viewId) {
    const viewDeleted = await this.request.delete(
        `${this.baseUrl}${pathUrl}/${viewId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return viewDeleted;
  }

  /**
   * Gets an array of Team Views in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} teamId - The Team ID.
   * @return {Promise<Array.<Object>>} An Array of Team Views.
   * @example
   * // returns [{id: 123, name: "View 1", ...}, {id: 456, name: "View 2", ...}]
   * views.getTeamViews("teamId");
   */
  async getTeamViews(teamId) {
    const views = await this.request.get(
        `${this.baseUrl}/team/${teamId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return views.views;
  }

  /**
   * Gets an array of Space Views in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Array.<Object>>} An Array of Space Views.
   * @example
   * // returns [{id: 123, name: "View 1", ...}, {id: 456, name: "View 2", ...}]
   * views.getSpaceViews("spaceId");
   */
  async getSpaceViews(spaceId) {
    const views = await this.request.get(
        `${this.baseUrl}/space/${spaceId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return views.views;
  }

  /**
   * Gets an array of Folder Views in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} folderId - The Folder ID.
   * @return {Promise<Array.<Object>>} An Array of Folder Views.
   * @example
   * // returns [{id: 123, name: "View 1", ...}, {id: 456, name: "View 2", ...}]
   * views.getFolderViews("folderId");
   */
  async getFolderViews(folderId) {
    const views = await this.request.get(
        `${this.baseUrl}/folder/${folderId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return views.views;
  }

  /**
   * Gets an array of List Views in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID.
   * @return {Promise<Array.<Object>>} An Array of List Views.
   * @example
   * // returns [{id: 123, name: "View 1", ...}, {id: 456, name: "View 2", ...}]
   * views.getListViews("folderId");
   */
  async getListViews(listId) {
    const views = await this.request.get(
        `${this.baseUrl}/list/${listId}${pathUrl}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return views.views;
  }

  /**
   * Gets an array of Tasks in a view in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} viewId - The View ID.
   * @param {number} [page=0] - The Pagination to fetch.
   * @return {Promise<Array.<Object>>} An Array of Tasks from a View.
   * @example
   * // returns [{id: 123, name: "Task 1", ...}, {id: 456, name: "Task 2", ...}]
   * views.getTaskFromView("viewId");
   */
  async getTaskFromView(viewId, page=0) {
    const tasks = await this.request.get(
        `${this.baseUrl}${pathUrl}/${viewId}/task`,
        {page: page},
        {'Authorization': this.apiKey},
    );
    return tasks.tasks;
  }

  /**
   * Gets an specific View in ClickUp.
   *
   * @async
   * @method
   * @param {string|number} viewId - The View ID.
   * @return {Promise<Object>} The View object searched by ClickUp.
   * @example
   * // returns {id: 123, name: "My View", ...}
   * views.getView(123);
   */
  async getView(viewId) {
    const view = await this.request.get(
        `${this.baseUrl}${pathUrl}/${viewId}`,
        {archived: false},
        {'Authorization': this.apiKey},
    );
    return view.view;
  }
}

module.exports = Views;
