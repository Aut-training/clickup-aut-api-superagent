const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Spaces Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies there is 1 space created in WorkSpace with team id', async () => {
    const spaces = await clickUpApi.spaces.getSpaces(helper.team.id);
    expect(spaces).to.have.lengthOf(1);
  });

  it('Verifies the space created is in WorkSpace', async () => {
    const space = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(space.id).to.eq(this.createdSpace.id);
    expect(space.name).to.eq(this.createdSpace.name);
  });

  it('Verifies a space has been updated', async () => {
    const spaceNewName =  helper.generateID();
    await clickUpApi.spaces.updateSpace(this.createdSpace.id, spaceNewName);
    const updatedSpace = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(updatedSpace.id).to.eq(this.createdSpace.id);
    expect(updatedSpace.name).to.eq(spaceNewName);
  });

});
