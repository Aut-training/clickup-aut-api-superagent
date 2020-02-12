const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Tasks Api endpoint', function () {
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

  it('Verifies a created task in ClickUp', async () => {
    const task = {name: helper.generateID(), description: helper.generateID()};
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, task.name, task.description);
    const searchedTask = await clickUpApi.tasks.getTask(createdTask.id);
    expect(searchedTask.name).to.eq(task.name);
    expect(searchedTask.description).to.eq(task.description);
  });

  it('Verifies there are 2 tasks in List "My List" and in team "3012784" after creating them', async () => {
    await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    const tasks = await clickUpApi.tasks.getTasks(this.createdList.id);
    const tasksFilteredByTeam = await clickUpApi.tasks.getFilteredTeamTasks(helper.team.id);
    expect(tasks).to.have.lengthOf(2);
    expect(tasksFilteredByTeam).to.have.lengthOf(2);
  });

  it('Verifies a task has been updated', async () => {    
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID(), helper.generateID());
    const task = {name: helper.generateID(), description: helper.generateID()};
    const updatedTask = await clickUpApi.tasks.updateTask(createdTask.id, task.name, task.description);
    expect(updatedTask.id).to.eq(createdTask.id);
    expect(updatedTask.name).to.eq(task.name);
    expect(updatedTask.description).to.eq(task.description);
  });

  it('Verifies a task has been deleted', async () => {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id,  helper.generateID(),  helper.generateID());
    const deletedTask = await clickUpApi.tasks.deleteTask(createdTask.id);
    expect(deletedTask).to.eql({});
  });
});
