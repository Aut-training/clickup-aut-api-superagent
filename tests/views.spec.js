const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe.only('Views Api endpoint', function () {
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
/*
  it.only('Verifies a created, updated and deleted Space Views in ClickUp', async () => {
    const createdView = await clickUpApi.views.createSpaceView(this.createdSpace.id, 'My Space View');
    const secondCreatedView = await clickUpApi.views.createSpaceView(this.createdSpace.id, 'My Space View 2');
    const searchedView = await clickUpApi.views.getView(createdView.id);
    expect(searchedView.name).to.eq('My Space View');
    const updatedView = await clickUpApi.views.updateView(searchedView.id, 'My Space View updated');
    expect(updatedView.name).to.eq('My Space View updated');
    const views = await clickUpApi.views.getSpaceViews(this.teamId);
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
    const views = await clickUpApi.views.getFolderViews(this.teamId);
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
    const views = await clickUpApi.views.getListViews(this.teamId);
    expect(views).to.have.lengthOf(2);
    const deletedView = await clickUpApi.views.deleteView(updatedView.id);
    expect(deletedView).to.eql({});
    const secondDeletedView = await clickUpApi.views.deleteView(secondCreatedView.id);
    expect(secondDeletedView).to.eql({});
  });

  /*it('Verifies there are 2 tasks in List "My List" and in team "3012784" after creating them', async () => {
    await clickUpApi.tasks.createTask(this.createdList.id, 'My Task 1');
    await clickUpApi.tasks.createTask(this.createdList.id, 'My Task 2');
    const tasks = await clickUpApi.tasks.getTasks(this.createdList.id);
    const tasksFilteredByTeam = await clickUpApi.tasks.getFilteredTeamTasks(this.teamId);
    expect(tasks).to.have.lengthOf(2);
    expect(tasksFilteredByTeam).to.have.lengthOf(2);
  });

  it('Verifies a task has been updated', async () => {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, 'My Task', 'My Task description');
    const updatedTask = await clickUpApi.tasks.updateTask(createdTask.id, 'My Task edited', 'My task description edited');
    expect(updatedTask.id).to.eq(createdTask.id);
    expect(updatedTask.name).to.eq('My Task edited');
    expect(updatedTask.description).to.eq('My task description edited');
  });

  it('Verifies a task has been deleted', async () => {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, 'My Task', 'My Task description');
    const deletedTask = await clickUpApi.tasks.deleteTask(createdTask.id);
    expect(deletedTask).to.eql({});
  });*/
});
