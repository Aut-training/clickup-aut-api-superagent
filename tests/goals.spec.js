const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Goals Api endpoint', function () {
  beforeEach(async () => {
    //Create a Goal for each test
    this.teamId = 3012784;
    this.createdGoal = await clickUpApi.goals.createGoal(this.teamId, 'My Goal', 'My goal description');
  });

  afterEach(async () => {
    //Delete the created Goal for cleanup
    await clickUpApi.goals.deleteGoal(this.createdGoal.id);
  });

  it('Verifies that there is a goal created in the WorkSpace', async () => {
    const goals = await clickUpApi.goals.getGoals(this.teamId);
    expect(goals).to.have.lengthOf(1);
  });

  it('Verifies that there is a goal with name "My Goal" in the WorkSpace', async () => {
    const goal = await clickUpApi.goals.getGoal(this.createdGoal.id);
    expect(goal.name).to.eq('My Goal');
  });

  it('Verifies that a goal created has been updated', async () => {
    const updatedGoal = await clickUpApi.goals.updateGoal(this.createdGoal.id, 'My Updated Goal', 'Updated Description');
    expect(updatedGoal.name).to.eq('My Updated Goal');
    expect(updatedGoal.description).to.eq('Updated Description');
  });

  it('Verifies that a Key Result has been created', async () => {
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, 'New Key Result Name');
    expect(createdKeyResult.name).to.eq('New Key Result Name');
  });

  it('Verifies that a Key Result has been updated', async () => {
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, 'New Key Result Name');
    const updatedKeyResult = await clickUpApi.goals.updateKeyResult(createdKeyResult.id, 'Target achieved');
    expect(updatedKeyResult.last_action.note).to.eq('Target achieved');
  });

  it('Verifies that a Key Result has been deleted', async () => {
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, 'New Key Result Name');
    const deletedKeyResult = await clickUpApi.goals.deleteKeyResult(createdKeyResult.id);
    expect(deletedKeyResult).to.eql({});
  });

});
