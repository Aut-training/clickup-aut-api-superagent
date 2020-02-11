const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Teams Api endpoint', function () {
  beforeEach(async () => {
    this.teamId = '3012784';
  });

  it('Verifies the teams in ClickUp', async () => {
    const teams = await clickUpApi.teams.getTeams();
    expect(teams.find(team => team.id === this.teamId)).to.include({
      avatar: null,
      color: '#ff5251',
      id: '3012784',
      name: 'Workspace API'
    });
  });
});
