const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Clickup API', function () {
  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('Verifies the spaces in WorkSpace with id 3022806', async () => {
    const spaces = await clickUpApi.spaces.getSpaces(3012784);
    expect(spaces).to.have.lengthOf(1);
  });

  it('Verifies the space "Luis Lopez\'s Space" is in WorkSpace with id 3022806', async () => {
    const space = await clickUpApi.spaces.getSpace(3022806);
    expect(space.name).to.eq('Luis Lopez\'s Space');
  });

  it('Verifies the folders in Space with id 3022806', async () => {
    const folders = await clickUpApi.folders.getFolders(3022806);
    expect(folders).to.have.lengthOf(1);
  });

  it('Verifies there is a folder named with ID 3215934 and name "Sprints and Backlog"', async () => {
    const folder = await clickUpApi.folders.getFolder(3215934);
    expect(folder.name).to.eq('Sprints and Backlog');
  });

  it('Verifies ClickUp creates a folder and returns the folder object to a Space', async () => {
    const createdFolder = await clickUpApi.folders.createFolder(3022806, 'My Folder');
    expect(createdFolder.name).to.eq('My Folder');
    //Clean test case
    const emptyObject = await clickUpApi.folders.deleteFolder(createdFolder.id);
    expect(emptyObject).to.eql({});
  });
});
