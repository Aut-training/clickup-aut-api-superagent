const expect = require('chai').expect;
const helper = require('../clickup-api-v2/data/helper');
const clickUpApi = require('../clickup-api-v2/clickup-api');

describe('Lists Api endpoint', function() {
  it('Verifies a created list in ClickUp', async function() {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdList = await clickUpApi.lists
        .createList(this.createdFolder.id, list.name, list.content);
    const searchedList = await clickUpApi.lists.getList(createdList.id);
    expect(searchedList.name).to.eq(list.name);
    expect(searchedList.content).to.eq(list.content);
  });

  it('Verifies a created list without folders in ClickUp', async function() {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdFolderlessList = await clickUpApi.lists
        .createFolderlessList(this.createdSpace.id, list.name, list.content);
    const searchedList = await clickUpApi.lists
        .getList(createdFolderlessList.id);
    expect(searchedList.name).to.eq(list.name);
    expect(searchedList.content).to.eq(list.content);
  });

  it('Verifies an updated list in ClickUp', async function() {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdList = await clickUpApi.lists
        .createList(
            this.createdFolder.id,
            helper.generateID(),
            helper.generateID(),
        );
    const updatedList = await clickUpApi.lists
        .updateList(createdList.id, list.name, list.content);
    expect(updatedList.id).to.eq(createdList.id);
    expect(updatedList.name).to.eq(list.name);
    expect(updatedList.content).to.eq(list.content);
  });

  it('Verifies a list has been deleted', async function() {
    const createdList = await clickUpApi.lists
        .createList(
            this.createdFolder.id,
            helper.generateID(),
            helper.generateID(),
        );
    const deletedList = await clickUpApi.lists
        .deleteList(createdList.id);
    expect(deletedList).to.eql({});
  });

  it('Verifies there are 2 lists in Folder "My Folder" after creating them',
      async function() {
        const list1 = await clickUpApi.lists.
            createList(
                this.createdFolder.id,
                helper.generateID(),
                helper.generateID());
        const list2 = await clickUpApi.lists.
            createList(this.createdFolder.id,
                helper.generateID(),
                helper.generateID());
        const lists = await clickUpApi.lists.
            getLists(this.createdFolder.id);
        expect(lists.find((list) => list.id === list1.id)).to.include({
          id: list1.id,
          name: list1.name,
        });
        expect(lists.find((list) => list.id === list2.id)).to.include({
          id: list2.id,
          name: list2.name,
        });
      },
  );

  it('Verifies there are 2 lists without folders after creating them',
      async function() {
        const list1 = await clickUpApi.lists
            .createFolderlessList(
                this.createdSpace.id,
                helper.generateID(),
                helper.generateID(),
            );
        const list2 = await clickUpApi.lists
            .createFolderlessList(
                this.createdSpace.id,
                helper.generateID(),
                helper.generateID(),
            );
        const folderlessLists = await clickUpApi.lists
            .getFolderlessLists(this.createdSpace.id);
        expect(folderlessLists.find((list) => list.id === list1.id))
            .to.include({
              id: list1.id,
              name: list1.name,
            });
        expect(folderlessLists.find((list) => list.id === list2.id))
            .to.include({
              id: list2.id,
              name: list2.name,
            });
      },
  );
});
