const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Checklists Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space, Folder and a Task for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
    this.createdList = await clickUpApi.lists.createFolderlessList(this.createdSpace.id, helper.generateID(), helper.generateID());
    this.createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID(), helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created checklist in ClickUp', async () => {
    const checkListName = helper.generateID();
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, checkListName);
    expect(createdChecklist.checklist.name).to.eq(checkListName);
  });

  it('Verifies that a checklist has been updated', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, helper.generateID());
    const checkListNewName = helper.generateID();
    const updatedChecklist = await clickUpApi.checklists.updateChecklist(createdChecklist.checklist.id, checkListNewName, 1);
    expect(updatedChecklist.checklist.name).to.eq(checkListNewName);
  });

  it('Verifies a checklist has been deleted', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, helper.generateID());
    const deletedChecklist = await clickUpApi.checklists.deleteChecklist(createdChecklist.checklist.id);
    expect(deletedChecklist).to.eql({});
  });

  it('Verifies a created checklist item in ClickUp', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, helper.generateID());
    const checkListItemName = helper.generateID();
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id, checkListItemName);
    expect(createdChecklistItem.checklist.items[0].name).to.eql(checkListItemName);
  });

  it('Verifies that the name and status of a checklist item were updated', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, helper.generateID());
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id, helper.generateID());
    const checkListItemNewName = helper.generateID();
    const updatedChecklistItem = await clickUpApi.checklists.updateChecklistItem(createdChecklist.checklist.id, createdChecklistItem.checklist.items[0].id, checkListItemNewName, false);
    expect(updatedChecklistItem.checklist.items[0].name).to.eq(checkListItemNewName);
    expect(updatedChecklistItem.checklist.items[0].resolved).to.eq(false);
  });

  it('Verifies that a checklist item has been deleted', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, helper.generateID());
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id,helper.generateID());
    const deletedChecklistItem = await clickUpApi.checklists.deleteChecklistItem(createdChecklist.checklist.id, createdChecklistItem.checklist.items[0].id);
    expect(deletedChecklistItem).to.eql({});
  });

});
