const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Tags Api endpoint', function () {
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

  it('Verifies a created tag in a Space and deletes it in ClickUp', async () => {
    const createdTag = await clickUpApi.tags.createSpaceTag(this.createdSpace.id, 'My Tag', '#000111', '#111000');
    expect(createdTag).to.eql({});
    const tags = await clickUpApi.tags.getTagsFromSpace(this.createdSpace.id);
    expect(tags.find(tag => tag.name === 'my tag')).to.include({
      name: 'my tag',
      tag_fg: '#000111', 
      tag_bg: '#111000'
    });
    const tagDeleted = await clickUpApi.tags.deleteSpaceTag(this.createdSpace.id, 'my tag');
    expect(tagDeleted).to.eql({});
  });

  it('Verifies a created tag in a Task and deletes it in ClickUp', async () => {
    const createdTask = await clickUpApi.tasks.createTask(this.createdList.id, 'My Task', 'My Task description');
    const createdTag = await clickUpApi.tags.createTaskTag(createdTask.id, 'My Tag in a Task');
    expect(createdTag).to.eql({});
    // There is no API for retrieving tags in tasks 
    const tagDeleted = await clickUpApi.tags.removeTagTask(createdTask.id, 'my tag in a Task');
    expect(tagDeleted).to.eql({});
  });
});
