function generateID(){
  return (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}

module.exports = {
  team: {
    'id': '3014652',
    'name': 'Automation\'s Workspace',
    'color': '#7b68ee',
    'avatar': null   
  },
  generateID: generateID,
  listName: 'List testing',
  taskName: 'Task testing'
};
