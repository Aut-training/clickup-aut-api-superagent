const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

/**
 * Executes commands before the testing run.
 *
 * @async
 * @function before
 */
before(async function  () {
  this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
  this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
  this.createdList = await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID());
  this.createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID(), helper.generateID());
});

/**
 * Executes commands after finishing all tests.
 *
 * @async
 * @function before
 */
after(async function () {
  await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
});