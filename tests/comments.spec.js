const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Comments Api endpoint', function () {
  
  it('Verifies a created comment in a Task', async function() {
    const taskContent = helper.generateID();
    await clickUpApi.comments.createTaskComment(this.createdTask.id, taskContent);
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments[0].comment_text).to.eq(taskContent);
  });

  it('Verifies that there are two comments in a Task', async function() {
    const comment1 = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const comment2 = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const comments = await clickUpApi.comments.getTaskComments(this.createdTask.id);
    expect(comments.find(comment => comment.id === comment1.id.toString())).to.include({
      id: comment1.id.toString()
    });
    expect(comments.find(comment => comment.id === comment2.id.toString())).to.include({
      id: comment2.id.toString()
    });
  });

  it('Verifies that a comment has ben updated', async function() {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const updatedComment = await clickUpApi.comments.updateComment(createdComment.id, helper.generateID());
    expect(updatedComment).to.eql({});
  });

  it('Verifies that a comment has ben deleted', async function() {
    const createdComment = await clickUpApi.comments.createTaskComment(this.createdTask.id, helper.generateID());
    const deletedComment = await clickUpApi.comments.deleteComment(createdComment.id);
    expect(deletedComment).to.eql({});
  });

  it('Verifies a created comment in a List', async function() {
    const taskContent = helper.generateID();
    await clickUpApi.comments.createListComment(this.createdList.id, taskContent);
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments[0].comment_text).to.eq(taskContent);
  });

  it('Verifies that there are two comments in a List', async function() {
    const comment1 = await clickUpApi.comments.createListComment(this.createdList.id, helper.generateID());
    const comment2 = await clickUpApi.comments.createListComment(this.createdList.id, helper.generateID());
    const comments = await clickUpApi.comments.getListComments(this.createdList.id);
    expect(comments.find(comment => comment.id === comment1.id.toString())).to.include({
      id: comment1.id.toString()
    });
    expect(comments.find(comment => comment.id === comment2.id.toString())).to.include({
      id: comment2.id.toString()
    });
  });

});
