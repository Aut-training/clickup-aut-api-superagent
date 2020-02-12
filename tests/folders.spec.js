const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Folders Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created folder in ClickUp', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    const searchedFolder = await clickUpApi.folders.getFolder(createdFolder.id);
    expect(createdFolder.id).to.eq(searchedFolder.id);
    expect(createdFolder.name).to.eq(searchedFolder.name);
  });

  it('Verifies there are 2 created folders in Space created', async () => {
    await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    const folders = await clickUpApi.folders.getFolders(this.createdSpace.id);
    expect(folders).to.have.lengthOf(2);
  });

  it('Verifies a folder has been updated', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    const folderNewName = helper.generateID();
    const updatedFolder = await clickUpApi.folders.updateFolder(createdFolder.id, folderNewName);
    expect(updatedFolder.id).to.eq(createdFolder.id);
    expect(updatedFolder.name).to.eq(folderNewName);
  });

  it('Verifies a folder has been deleted', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
    const deletedFolder = await clickUpApi.folders.deleteFolder(createdFolder.id);
    expect(deletedFolder).to.eql({});
  });
});
