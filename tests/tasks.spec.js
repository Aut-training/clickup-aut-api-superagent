const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Tasks Api endpoint', function () {  

  it('Verifies a created task in ClickUp', async function() {
    const task = {name: helper.generateID(), description: helper.generateID()};
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, task.name, task.description);
    const searchedTask = await clickUpApi.tasks.getTask(createdTask.id);
    expect(searchedTask.name).to.eq(task.name);
    expect(searchedTask.description).to.eq(task.description);
  });

  it('Verifies created tasks filtered by list and team', async function() {
    const task1 = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    const task2 = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID());
    const tasks = await clickUpApi.tasks.getTasks(this.createdList.id);
    const tasksFilteredByTeam = await clickUpApi.tasks.getFilteredTeamTasks(helper.team.id);
    expect(tasks.find(task => task.name === task1.name)).to.include({
      id: task1.id,
      name: task1.name,
      team_id: helper.team.id      
    });
    expect(tasks.find(task => task.name === task2.name)).to.include({
      id: task2.id,
      name: task2.name,
      team_id: helper.team.id      
    });
    expect(tasksFilteredByTeam.find(task => task.name === task1.name)).to.include({
      id: task1.id,
      name: task1.name,
      team_id: helper.team.id     
    });
    expect(tasksFilteredByTeam.find(task => task.name === task2.name)).to.include({
      id: task2.id,
      name: task2.name,
      team_id: helper.team.id
    });
  });

  it('Verifies a task has been updated', async function() {    
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID(), helper.generateID());
    const task = {name: helper.generateID(), description: helper.generateID()};
    const updatedTask = await clickUpApi.tasks.updateTask(createdTask.id, task.name, task.description);
    expect(updatedTask.id).to.eq(createdTask.id);
    expect(updatedTask.name).to.eq(task.name);
    expect(updatedTask.description).to.eq(task.description);
  });

  it('Verifies a task has been deleted', async function() {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id,  helper.generateID(),  helper.generateID());
    const deletedTask = await clickUpApi.tasks.deleteTask(createdTask.id);
    expect(deletedTask).to.eql({});
  });

});
