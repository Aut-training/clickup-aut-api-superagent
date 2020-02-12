// const expect = require('chai').expect;
// const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

// describe('Lists Api endpoint', function () {
//   beforeEach(async () => {
//     //Create a Space and a Folder for each test
//     this.teamId = 3012784;
//     this.createdSpace = await clickUpApi.spaces.createSpace(this.teamId, 'My Space');
//     this.createdFolder = await clickUpApi.folders.createFolder(this.createdSpace.id, 'My Folder');
//   });

//   afterEach(async () => {
//     //Delete the created Space for cleanup
//     await clickUpApi.spaces.deleteSpace(this.createdSpace.id);
//   });

//   it('Verifies a created list in ClickUp', async () => {
//     const createdList = await clickUpApi.lists.createList(this.createdFolder.id, 'My List', 'My List description');
//     const searchedList = await clickUpApi.lists.getList(createdList.id);
//     expect(searchedList.name).to.eq('My List');
//     expect(searchedList.content).to.eq('My List description');
//   });

//   it('Verifies a created list without folders in ClickUp', async () => {
//     const createdFolderlessList = await clickUpApi.lists.createFolderlessList(this.createdSpace.id, 'My List', 'My List without folder');
//     const searchedList = await clickUpApi.lists.getList(createdFolderlessList.id);
//     expect(searchedList.name).to.eq('My List');
//     expect(searchedList.content).to.eq('My List without folder');
//   });

//   it('Verifies an updated list in ClickUp', async () => {
//     const createdList = await clickUpApi.lists.createList(this.createdFolder.id, 'My List', 'My List description');
//     const updatedList = await clickUpApi.lists.updateList(createdList.id, 'My List edited', 'My List description edited');
//     expect(updatedList.id).to.eq(createdList.id);
//     expect(updatedList.name).to.eq('My List edited');
//     expect(updatedList.content).to.eq('My List description edited');
//   });

//   it('Verifies a list has been deleted', async () => {
//     const createdList = await clickUpApi.lists.createList(this.createdFolder.id, 'My List', 'My List description');
//     const deletedList = await clickUpApi.lists.deleteList(createdList.id);
//     expect(deletedList).to.eql({});
//   });

//   it('Verifies there are 2 lists in Folder "My Folder" after creating them', async () => {
//     await clickUpApi.lists.createList(this.createdFolder.id, 'My List 1', 'My List description 1');
//     await clickUpApi.lists.createList(this.createdFolder.id, 'My List 2', 'My List description 2');
//     const lists = await clickUpApi.lists.getLists(this.createdFolder.id);
//     expect(lists).to.have.lengthOf(2);
//   });

//   it('Verifies there are 2 lists without folders after creating them', async () => {
//     await clickUpApi.lists.createFolderlessList(this.createdSpace.id, 'My List 1', 'My List without folder 1');
//     await clickUpApi.lists.createFolderlessList(this.createdSpace.id, 'My List 2', 'My List without folder 2');
//     const folderlessLists = await clickUpApi.lists.getFolderlessLists(this.createdSpace.id);
//     expect(folderlessLists).to.have.lengthOf(2);
//   });
// });
