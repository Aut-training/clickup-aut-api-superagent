const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Folders Api endpoint', function() {
  it('Verifies a created folder in ClickUp', async function() {
    const createdFolder = await clickUpApi.folders
        .createFolder(this.createdSpace.id, helper.generateID());
    const searchedFolder = await clickUpApi.folders.getFolder(createdFolder.id);
    expect(createdFolder.id).to.eq(searchedFolder.id);
    expect(createdFolder.name).to.eq(searchedFolder.name);
  });

  it('Verifies there are 2 created folders in Space created', async function() {
    const folder1 = await clickUpApi.folders
        .createFolder(this.createdSpace.id, helper.generateID());
    const folder2 = await clickUpApi.folders
        .createFolder(this.createdSpace.id, helper.generateID());
    const folders = await clickUpApi.folders.getFolders(this.createdSpace.id);
    expect(folders.find((folder) => folder.id === folder1.id)).to.include({
      id: folder1.id,
      name: folder1.name,
    });
    expect(folders.find((folder) => folder.id === folder2.id)).to.include({
      id: folder2.id,
      name: folder2.name,
    });
  });

  it('Verifies a folder has been updated', async function() {
    const createdFolder = await clickUpApi.folders
        .createFolder(this.createdSpace.id, helper.generateID());
    const folderNewName = helper.generateID();
    const updatedFolder = await clickUpApi.folders
        .updateFolder(createdFolder.id, folderNewName);
    expect(updatedFolder.id).to.eq(createdFolder.id);
    expect(updatedFolder.name).to.eq(folderNewName);
  });

  it('Verifies a folder has been deleted', async function() {
    const createdFolder = await clickUpApi.folders
        .createFolder(this.createdSpace.id, helper.generateID());
    const deletedFolder = await clickUpApi.folders
        .deleteFolder(createdFolder.id);
    expect(deletedFolder).to.eql({});
  });
});
