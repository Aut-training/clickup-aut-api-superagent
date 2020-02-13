const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Members Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space, a Folder, a task and a list for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
    this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    this.createdList = await clickUpApi.lists.createFolderlessList(this.createdSpace.id, helper.taskName);
    this.createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.listName, 'Content');
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });
  
  it('Verifies that a member exists in the list', async () => {
    const memberList = await clickUpApi.members.getListMembers(this.createdList.id);
    expect(memberList).to.have.lengthOf(1);
  });

  it('Verifies that a member exists in the task', async () => {
    const memberList = await clickUpApi.members.getTaskMembers(this.createdTask.id);
    expect(memberList).to.have.lengthOf(1);
  });
});
