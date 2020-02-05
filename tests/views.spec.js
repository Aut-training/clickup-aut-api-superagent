const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Views Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.teamId = 3012784;
    this.createdSpace = await clickUpApi.spaces.createSpace(this.teamId, 'My Space');
    this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder');
    this.createdList = await clickUpApi.lists.createList(this.createdFolder.id, 'My List');
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created, updated and deleted Team Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createTeamView(this.teamId, 'My Team View');
    const secondCreatedView = await clickUpApi.views.createTeamView(this.teamId, 'My Team View 2');
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq('My Team View');
    const updatedView = await clickUpApi.views.updateView(searchedView.id, 'My Team View updated');
    expect(updatedView.name).to.eq('My Team View updated');
    const views = await clickUpApi.views.getTeamViews(this.teamId);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted Space Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createSpaceView(this.createdSpace.id, 'My Space View');
    const secondCreatedView = await clickUpApi.views.createSpaceView(this.createdSpace.id, 'My Space View 2');
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq('My Space View');
    const updatedView = await clickUpApi.views.updateView(searchedView.id, 'My Space View updated');
    expect(updatedView.name).to.eq('My Space View updated');
    const views = await clickUpApi.views.getSpaceViews(this.createdSpace.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted Folder Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createFolderView(this.createdFolder.id, 'My Folder View');
    const secondCreatedView = await clickUpApi.views.createFolderView(this.createdFolder.id, 'My Folder View 2');
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq('My Folder View');
    const updatedView = await clickUpApi.views.updateView(searchedView.id, 'My Folder View updated');
    expect(updatedView.name).to.eq('My Folder View updated');
    const views = await clickUpApi.views.getFolderViews(this.createdFolder.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies a created, updated and deleted List Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createListView(this.createdList.id, 'My List View');
    const secondCreatedView = await clickUpApi.views.createListView(this.createdList.id, 'My List View 2');
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq('My List View');
    const updatedView = await clickUpApi.views.updateView(searchedView.id, 'My List View updated');
    expect(updatedView.name).to.eq('My List View updated');
    const views = await clickUpApi.views.getListViews(this.createdList.id);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  it('Verifies there are 2 tasks in List "My List" using views', async () => {
    const createdView = await clickUpApi.views.createListView(this.createdList.id, 'My List View');
    await clickUpApi.tasks.createTask(this.createdList.id, 'My Task 1');
    await clickUpApi.tasks.createTask(this.createdList.id, 'My Task 2');
    const tasks = await clickUpApi.views.getTaskFromView(createdView.id);    
    expect(tasks).to.have.lengthOf(2);
    await clickUpApi.views.deleteView(createdView.id);
  });
});
