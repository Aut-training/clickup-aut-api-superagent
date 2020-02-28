const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Teams Api endpoint', function() {
  it('Verifies the teams in ClickUp', async function() {
    const teams = await clickUpApi.teams.getTeams();
    expect(teams.find((team) => team.id === helper.team.id))
        .to.include(helper.team);
  });
});
