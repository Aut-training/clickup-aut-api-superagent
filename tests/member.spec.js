const expect = require('chai').expect;
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Members Api endpoint', function() {
  it('Verifies that a member exists in the list', async function() {
    const memberList = await clickUpApi.members
        .getListMembers(this.createdList.id);
    expect(memberList).to.have.lengthOf(1);
  });

  it('Verifies that a member exists in the task', async function() {
    const memberList = await clickUpApi.members
        .getTaskMembers(this.createdTask.id);
    expect(memberList).to.have.lengthOf(1);
  });
});
