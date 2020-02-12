const expect = require('chai').expect;
const helper = require('../ClickUpApiV2/Data/helper');
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe('Lists Api endpoint', function () {
  beforeEach(async () => {
    //Create a Space and a Folder for each test
    this.createdSpace = await clickUpApi.spaces.createSpace(helper.team.id, helper.generateID());
    this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, helper.generateID());
  });

  afterEach(async () => {
    //Delete the created Space for cleanup
    await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
  });

  it('Verifies a created list in ClickUp', async () => {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdList = await clickUpApi.lists.createList(this.createdFolder.id, list.name, list.content);
    const searchedList = await clickUpApi.lists.getList(createdList.id);
    expect(searchedList.name).to.eq(list.name);
    expect(searchedList.content).to.eq(list.content);
  });

  it('Verifies a created list without folders in ClickUp', async () => {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdFolderlessList = await clickUpApi.lists.createFolderlessList(this.createdSpace.id, list.name, list.content);
    const searchedList = await clickUpApi.lists.getList(createdFolderlessList.id);
    expect(searchedList.name).to.eq(list.name);
    expect(searchedList.content).to.eq(list.content);
  });

  it('Verifies an updated list in ClickUp', async () => {
    const list = {name: helper.generateID(), content: helper.generateID()};
    const createdList = await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID(), helper.generateID());
    const updatedList = await clickUpApi.lists.updateList(createdList.id, list.name, list.content);
    expect(updatedList.id).to.eq(createdList.id);
    expect(updatedList.name).to.eq(list.name);
    expect(updatedList.content).to.eq(list.content);
  });

  it('Verifies a list has been deleted', async () => {
    const createdList = await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID(), helper.generateID());
    const deletedList = await clickUpApi.lists.deleteList(createdList.id);
    expect(deletedList).to.eql({});
  });

  it('Verifies there are 2 lists in Folder "My Folder" after creating them', async () => {
    await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID(), helper.generateID());
    await clickUpApi.lists.createList(this.createdFolder.id, helper.generateID(), helper.generateID());
    const lists = await clickUpApi.lists.getLists(this.createdFolder.id);
    expect(lists).to.have.lengthOf(2);
  });

  it('Verifies there are 2 lists without folders after creating them', async () => {
    await clickUpApi.lists.createFolderlessList(this.createdSpace.id, helper.generateID(), helper.generateID());
    await clickUpApi.lists.createFolderlessList(this.createdSpace.id, helper.generateID(), helper.generateID());
    const folderlessLists = await clickUpApi.lists.getFolderlessLists(this.createdSpace.id);
    expect(folderlessLists).to.have.lengthOf(2);
  });
});
