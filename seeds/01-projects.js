
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'test name', description: 'test', completed: true},
        {name: 'test name', description: 'test', completed: true},
        {name: 'test name', description: 'test', completed: true}
      ]);
    });
};
