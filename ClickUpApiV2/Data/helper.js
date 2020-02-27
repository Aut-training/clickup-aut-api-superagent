function generateID(){
  return (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}

/**
 * Module with basic configuration and helper functions for ClickUp.
 * @module helper
 * @property {object} team - Team object.
 * @property {string} team.id - Unique ID of the team.
 * @property {string} team.name - Name of the team.
 * @property {string} team.color - Color in HEX of the team.
 * @property {string} team.avatar - Avatar image URL of the team.
 * @property {function} generateID - Generates a random unique ID.
 * @property {string} listName - Name of the default list in ClickUp.
 * @property {string} taskName - Name of the default task in ClickUp.
 */
module.exports = {
  team: {
    'id': '3014652',
    'name': 'Automation\'s Workspace',
    'color': '#7b68ee',
    'avatar': null   
  },
  /**
   * Creates a random unique ID.
   *
   * @method
   * @return {string} A random unique ID string.
   * @example
   * // returns "5e5820f0f126f4aa6f2d0efe"
   * helper.generateID();
   */
  generateID: generateID,
  listName: 'List testing',
  taskName: 'Task testing'
};
