const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Spaces Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.teamId = 3012784;
    this.createdSpace = await clickUpApi.spaces.createSpace(this.teamId, 'My Space');
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies there is 1 space created in WorkSpace with team id', async () => {
    const spaces = await clickUpApi.spaces.getSpaces(this.teamId);
    expect(spaces).to.have.lengthOf(1);
  });

  it('Verifies the space "My Space" is in WorkSpace', async () => {
    const space = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(space.id).to.eq(this.createdSpace.id);
    expect(space.name).to.eq('My Space');
  });

  it('Verifies a space has been updated', async () => {
    await clickUpApi.spaces.updateSpace(this.createdSpace.id, 'My Space edited');
    const updatedSpace = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(updatedSpace.id).to.eq(this.createdSpace.id);
    expect(updatedSpace.name).to.eq('My Space edited');
  });

});
