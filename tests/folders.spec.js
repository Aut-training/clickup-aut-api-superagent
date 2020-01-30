const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe.only('Folders Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.teamId = 3012784;
    this.createdSpace = await clickUpApi.spaces.createSpace(this.teamId, 'My Space');
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created folder in ClickUp', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder');
    const searchedFolder = await clickUpApi.folders.getFolder(createdFolder.id);
    expect(createdFolder.id).to.eq(searchedFolder.id);
    expect(createdFolder.name).to.eq(searchedFolder.name);
  });

  it('Verifies there are 2 folders in Space "My Space" after creating them', async () => {
    await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder 1');
    await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder 2');
    const folders = await clickUpApi.folders.getFolders(this.createdSpace.id);
    expect(folders).to.have.lengthOf(2);
  });

  it('Verifies a folder has been updated', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder');
    const updatedFolder = await clickUpApi.folders.updateFolder(createdFolder.id, 'My Folder edited');
    expect(updatedFolder.id).to.eq(createdFolder.id);
    expect(updatedFolder.name).to.eq('My Folder edited');
  });

  it.only('Verifies a folder has been deleted', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder');
    const deletedFolder = await clickUpApi.folders.deleteFolder(createdFolder.id);
    expect(deletedFolder).to.eql({});
  });
});
