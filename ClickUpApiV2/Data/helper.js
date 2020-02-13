function generateID(){
  return (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}

const listName = 'List testing';
const taskName = 'Task testing';

module.exports = {
  team: {
    'id': '3014652',
    'name': 'Automation\'s Workspace',
    'color': '#7b68ee',
    'avatar': null   
  },
  generateID: generateID,
  listName: listName,
  taskName: taskName
};