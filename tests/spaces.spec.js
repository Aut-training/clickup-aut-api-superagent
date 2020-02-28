const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Spaces Api endpoint', function() {
  it('Verifies there is 1 space created in WorkSpace with team id',
      async function() {
        const spaces = await clickUpApi.spaces.getSpaces(helper.team.id);
        expect(spaces).to.have.lengthOf(1);
      },
  );

  it('Verifies the space created is in WorkSpace', async function() {
    const space = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(space.id).to.eq(this.createdSpace.id);
    expect(space.name).to.eq(this.createdSpace.name);
  });

  it('Verifies a space has been updated', async function() {
    const spaceNewName = helper.generateID();
    await clickUpApi.spaces.updateSpace(this.createdSpace.id, spaceNewName);
    const updatedSpace = await clickUpApi.spaces.getSpace(this.createdSpace.id);
    expect(updatedSpace.id).to.eq(this.createdSpace.id);
    expect(updatedSpace.name).to.eq(spaceNewName);
  });
});
