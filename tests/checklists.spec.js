const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Checklists Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space, Folder and a Task for each test
    this.teamId = 3012784;
    this.createdSpace = await clickUpApi.spaces.createSpace(this.teamId, 'My Space');
    this.createdList = await clickUpApi.lists.createFolderlessList(this.createdSpace.id, 'My List', 'My List without folder');
    this.createdTask = await clickUpApi.tasks.createTask(this.createdList.id, 'My Task', 'My Task description');
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created checklist in ClickUp', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    expect(createdChecklist.checklist.name).to.eq('My Checklist');
  });

  it('Verifies that a checklist has been updated', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    const updatedChecklist = await clickUpApi.checklists.updateChecklist(createdChecklist.checklist.id, 'My Updated Checklist', 1);
    expect(updatedChecklist.checklist.name).to.eq('My Updated Checklist');
  });

  it('Verifies a checklist has been deleted', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    const deletedChecklist = await clickUpApi.checklists.deleteChecklist(createdChecklist.checklist.id);
    expect(deletedChecklist).to.eql({});
  });

  it('Verifies a created checklist item in ClickUp', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id, 'Checklist Item');
    expect(createdChecklistItem.checklist.items[0].name).to.eql('Checklist Item');
  });

  it('Verifies that the name and status of a checklist item were updated', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id, 'Checklist Item');
    const updatedChecklistItem = await clickUpApi.checklists.updateChecklistItem(createdChecklist.checklist.id, createdChecklistItem.checklist.items[0].id, 'Updated Checklist Item', false);
    expect(updatedChecklistItem.checklist.items[0].name).to.eq('Updated Checklist Item');
    expect(updatedChecklistItem.checklist.items[0].resolved).to.eq(false);
  });

  it('Verifies that a checklist item has been deleted', async () => {
    const createdChecklist = await clickUpApi.checklists.createChecklist(this.createdTask.id, 'My Checklist');
    const createdChecklistItem = await clickUpApi.checklists.createChecklistItem(createdChecklist.checklist.id, 'Checklist Item');
    const deletedChecklistItem = await clickUpApi.checklists.deleteChecklistItem(createdChecklist.checklist.id, createdChecklistItem.checklist.items[0].id);
    expect(deletedChecklistItem).to.eql({});
  });

});
