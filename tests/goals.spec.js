const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Goals Api endpoint', function () {
  beforeEach(async () => {
    //Create a Goal for each test
    this.createdGoal = await clickUpApi.goals.createGoal(helper.team.id, helper.generateID(), helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Goal for cleanup
    await clickUpApi.goals.deleteGoal(this.createdGoal.id);
  });

  it('Verifies that there is 1 goal created in the WorkSpace', async () => {
    const goals = await clickUpApi.goals.getGoals(helper.team.id);
    expect(goals).to.have.lengthOf(1);
  });

  it('Verifies that there is a created goal in the WorkSpace', async () => {
    const goal = await clickUpApi.goals.getGoal(this.createdGoal.id);
    expect(goal.name).to.eq(this.createdGoal.name);
  });

  it('Verifies that a goal created has been updated', async () => {
    const newGoal = {name: helper.generateID(), description: helper.generateID()};
    const updatedGoal = await clickUpApi.goals.updateGoal(this.createdGoal.id, newGoal.name, newGoal.description);
    expect(updatedGoal.name).to.eq(newGoal.name);
    expect(updatedGoal.description).to.eq(newGoal.description);
  });

  it('Verifies that a Key Result has been created', async () => {
    const keyName = helper.generateID();
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, keyName);
    expect(createdKeyResult.name).to.eq(keyName);
  });

  it('Verifies that a Key Result has been updated', async () => {
    const newKeyName = helper.generateID();
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, helper.generateID());
    const updatedKeyResult = await clickUpApi.goals.updateKeyResult(createdKeyResult.id, newKeyName);
    expect(updatedKeyResult.last_action.note).to.eq(newKeyName);
  });

  it('Verifies that a Key Result has been deleted', async () => {
    const createdKeyResult = await clickUpApi.goals.createKeyResult(this.createdGoal.id, helper.generateID());
    const deletedKeyResult = await clickUpApi.goals.deleteKeyResult(createdKeyResult.id);
    expect(deletedKeyResult).to.eql({});
  });

});
