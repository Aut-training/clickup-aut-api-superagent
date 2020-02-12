const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Teams Api endpoint', function () {
  it('Verifies the teams in ClickUp', async () => {
    const teams = await clickUpApi.teams.getTeams();
    expect(teams.find(team => team.id === helper.team.id)).to.include(helper.team);
  });
});
