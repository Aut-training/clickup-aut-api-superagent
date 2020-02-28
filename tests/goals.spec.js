const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Goals Api endpoint', function() {
  beforeEach(async function() {
    // Create a Goal for each test
    this.createdGoal = await clickUpApi.goals
        .createGoal(helper.team.id, helper.generateID(), helper.generateID());
  });

  afterEach(async function() {
    // Delete the created Goal for cleanup
    await clickUpApi.goals.deleteGoal(this.createdGoal.id);
  });

  it('Verifies that there is 1 goal created in the WorkSpace',
      async function() {
        const goal1 = await clickUpApi.goals
            .createGoal(
                helper.team.id, helper.generateID(),
                helper.generateID(),
            );
        const goal2 = await clickUpApi.goals
            .createGoal(
                helper.team.id, helper.generateID(),
                helper.generateID(),
            );
        const goals = await clickUpApi.goals.getGoals(helper.team.id);
        expect(goals.find((goal) => goal.id === goal1.id)).to.include({
          id: goal1.id,
          name: goal1.name,
        });
        expect(goals.find((goal) => goal.id === goal2.id)).to.include({
          id: goal2.id,
          name: goal2.name,
        });
        await clickUpApi.goals.deleteGoal(goal1.id);
        await clickUpApi.goals.deleteGoal(goal2.id);
      },
  );

  it('Verifies that there is a created goal in the WorkSpace',
      async function() {
        const goal = await clickUpApi.goals.getGoal(this.createdGoal.id);
        expect(goal.name).to.eq(this.createdGoal.name);
      },
  );

  it('Verifies that a goal created has been updated',
      async function() {
        const newGoal = {
          name: helper.generateID(),
          description: helper.generateID(),
        };
        const updatedGoal = await clickUpApi.goals
            .updateGoal(this.createdGoal.id, newGoal.name, newGoal.description);
        expect(updatedGoal.name).to.eq(newGoal.name);
        expect(updatedGoal.description).to.eq(newGoal.description);
      },
  );

  it('Verifies that a Key Result has been created', async function() {
    const keyName = helper.generateID();
    const createdKeyResult = await clickUpApi.goals
        .createKeyResult(this.createdGoal.id, keyName);
    expect(createdKeyResult.name).to.eq(keyName);
  });

  it('Verifies that a Key Result has been updated', async function() {
    const newKeyName = helper.generateID();
    const createdKeyResult = await clickUpApi.goals
        .createKeyResult(this.createdGoal.id, helper.generateID());
    const updatedKeyResult = await clickUpApi.goals
        .updateKeyResult(createdKeyResult.id, newKeyName);
    expect(updatedKeyResult.last_action.note).to.eq(newKeyName);
  });

  it('Verifies that a Key Result has been deleted', async function() {
    const createdKeyResult = await clickUpApi.goals
        .createKeyResult(this.createdGoal.id, helper.generateID());
    const deletedKeyResult = await clickUpApi.goals
        .deleteKeyResult(createdKeyResult.id);
    expect(deletedKeyResult).to.eql({});
  });
});
