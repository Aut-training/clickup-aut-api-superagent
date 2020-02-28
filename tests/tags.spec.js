const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Tags Api endpoint', function() {
  it('Verifies a created tag in a Space and deletes it in ClickUp',
      async function() {
        const tagName = helper.generateID();
        const createdTag = await clickUpApi.tags
            .createSpaceTag(
                this.createdSpace.id,
                tagName,
                '#000111',
                '#111000',
            );
        expect(createdTag).to.eql({});
        const tags = await clickUpApi.tags
            .getTagsFromSpace(this.createdSpace.id);
        expect(tags.find((tag) => tag.name === tagName)).to.include({
          name: tagName,
          tag_fg: '#000111',
          tag_bg: '#111000',
        });
        const tagDeleted = await clickUpApi.tags
            .deleteSpaceTag(this.createdSpace.id, tagName);
        expect(tagDeleted).to.eql({});
      },
  );

  it('Verifies a created tag in a Task and deletes it in ClickUp',
      async function() {
        const tagName = helper.generateID();
        const createdTask = await clickUpApi.tasks
            .createTask(
                this.createdList.id,
                helper.generateID(),
                helper.generateID(),
            );
        const createdTag = await clickUpApi.tags
            .createTaskTag(createdTask.id, tagName);
        expect(createdTag).to.eql({});
        // There is no API for retrieving tags in tasks
        const tagDeleted = await clickUpApi.tags
            .removeTagTask(createdTask.id, tagName);
        expect(tagDeleted).to.eql({});
      },
  );
});
