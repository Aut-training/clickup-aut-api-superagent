const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Views Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
    this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    this.createdList = await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created, updated and deleted Team Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createTeamView(helper.team.id, helper.generateID());
    const secondCreatedView = await clickUpApi.views.createTeamView(helper.team.id, helper.generateID());
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq(createdView.name);
    const updatedName = 'ViewUpdated' + helper.generateID();
    const updatedView = await clickUpApi.views.updateView(searchedView.id, updatedName);
    expect(updatedView.name).to.eq(updatedName);
    const views = await clickUpApi.views.getTeamViews(helper.team.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted Space Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createSpaceView(this.createdSpace.id, helper.generateID());
    const secondCreatedView = await clickUpApi.views.createSpaceView(this.createdSpace.id, helper.generateID());
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq(createdView.name);
    const updatedName = 'ViewUpdated' + helper.generateID();
    const updatedView = await clickUpApi.views.updateView(searchedView.id, updatedName);
    expect(updatedView.name).to.eq(updatedName);
    const views = await clickUpApi.views.getSpaceViews(this.createdSpace.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted Folder Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createFolderView(this.createdFolder.id, helper.generateID());
    const secondCreatedView = await clickUpApi.views.createFolderView(this.createdFolder.id, helper.generateID());
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq(createdView.name);
    const updatedName = 'ViewUpdated' + helper.generateID();
    const updatedView = await clickUpApi.views.updateView(searchedView.id, updatedName);
    expect(updatedView.name).to.eq(updatedName);
    const views = await clickUpApi.views.getFolderViews(this.createdFolder.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted List Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createListView(this.createdList.id, helper.generateID());
    const secondCreatedView = await clickUpApi.views.createListView(this.createdList.id, helper.generateID());
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq(createdView.name);
    const updatedName = 'ViewUpdated' + helper.generateID();
    const updatedView = await clickUpApi.views.updateView(searchedView.id, updatedName);
    expect(updatedView.name).to.eq(updatedName);
    const views = await clickUpApi.views.getListViews(this.createdList.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies there are 2 tasks in List "My List" using views', async () => {
    const createdView = await clickUpApi.views.createListView(this.createdList.id, helper.generateID());
    await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    const tasks = await clickUpApi.views.getTaskFromView(createdView.id);
    expect(tasks).to.have.lengthOf(2);
    await clickUpApi.views.deleteView(createdView.id);
  });
});
