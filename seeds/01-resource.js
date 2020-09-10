
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'test name', description: 'test', project_id: 1},
        {name: 'test name', description: 'test', project_id: 2},
        {name: 'test name', description: 'test', project_id: 3}
      ]);
    });
};