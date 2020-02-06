const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Comments Api endpoint', function () {
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

  it('Verifies a created comment in a Task', async () => {
    await clickUpApi.comments.createTaskComment(this.createdTask.id, 'Task comment content');
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments[0].comment_text).to.eq('Task comment content');
  });

  it('Verifies that there are two comments in a Task', async () => {
    await clickUpApi.comments.createTaskComment(this.createdTask.id, 'First comment');
    await clickUpApi.comments.createTaskComment(this.createdTask.id, 'Second comment');
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments).to.have.lengthOf(2);
  });

  it('Verifies that a comment has ben updated', async () => {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, 'Task comment content');
    const updatedComment = await clickUpApi.comments.updateComment(createdComment.id, 'Edited comment');
    expect(updatedComment).to.eql({});
  });

  it('Verifies that a comment has ben deleted', async () => {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, 'Task comment content');
    const deletedComment = await clickUpApi.comments.deleteComment(createdComment.id);
    expect(deletedComment).to.eql({});
  });

  it('Verifies a created comment in a List', async () => {
    await clickUpApi.comments.createListComment(this.createdList.id, 'List comment content');
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments[0].comment_text).to.eq('List comment content');
  });

  it('Verifies that there are two comments in a List', async () => {
    await clickUpApi.comments.createListComment(this.createdList.id, 'First comment');
    await clickUpApi.comments.createListComment(this.createdList.id, 'Second comment');
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments).to.have.lengthOf(2);
  });

});
