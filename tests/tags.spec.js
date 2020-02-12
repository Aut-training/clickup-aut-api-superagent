const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Tags Api endpoint', function () {
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

  it('Verifies a created tag in a Space and deletes it in ClickUp', async () => {
    const tagName = helper.generateID();
    const createdTag = await clickUpApi.tags.createSpaceTag(this.createdSpace.id, tagName, '#000111', '#111000');
    expect(createdTag).to.eql({});
    const tags = await clickUpApi.tags.getTagsFromSpace(this.createdSpace.id);
    expect(tags.find(tag => tag.name === tagName)).to.include({
      name: tagName,
      tag_fg: '#000111', 
      tag_bg: '#111000'
    });
    const tagDeleted = await clickUpApi.tags.deleteSpaceTag(this.createdSpace.id, tagName);
    expect(tagDeleted).to.eql({});
  });

  it('Verifies a created tag in a Task and deletes it in ClickUp', async () => {
    const tagName = helper.generateID();
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, helper.generateID(), helper.generateID());
    const createdTag = await clickUpApi.tags.createTaskTag(createdTask.id, tagName);
    expect(createdTag).to.eql({});
    // There is no API for retrieving tags in tasks 
    const tagDeleted = await clickUpApi.tags.removeTagTask(createdTask.id, tagName);
    expect(tagDeleted).to.eql({});
  });
});
