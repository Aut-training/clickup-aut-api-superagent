const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Comments Api endpoint', function () {
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

  it('Verifies a created comment in a Task', async () => {
    const taskContent = helper.generateID();
    await clickUpApi.comments.createTaskComment(this.createdTask.id, taskContent);
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments[0].comment_text).to.eq(taskContent);
  });

  it('Verifies that there are two comments in a Task', async () => {
    await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments).to.have.lengthOf(2);
  });

  it('Verifies that a comment has ben updated', async () => {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const updatedComment = await clickUpApi.comments.updateComment(createdComment.id, helper.generateID());
    expect(updatedComment).to.eql({});
  });

  it('Verifies that a comment has ben deleted', async () => {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const deletedComment = await clickUpApi.comments.deleteComment(createdComment.id);
    expect(deletedComment).to.eql({});
  });

  it('Verifies a created comment in a List', async () => {
    const taskContent = helper.generateID();
    await clickUpApi.comments.createListComment(this.createdList.id, taskContent);
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments[0].comment_text).to.eq(taskContent);
  });

  it('Verifies that there are two comments in a List', async () => {
    await clickUpApi.comments.createListComment(this.createdList.id, helper.generateID());
    await clickUpApi.comments.createListComment(this.createdList.id, helper.generateID());
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments).to.have.lengthOf(2);
  });

});
