const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Tasks Api endpoint', function () {
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

  it('Verifies a created task in ClickUp', async () => {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, 'My Task', 'My Task description');
    const searchedTask = await clickUpApi.tasks.getTask(createdTask.id);
    expect(searchedTask.name).to.eq('My Task');
    expect(searchedTask.description).to.eq('My Task description');
  });

  it('Verifies there are 2 tasks in List "My List" and in team "3012784" after creating them', async () => {
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
  });
});
