exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await knex('resolutions').del();
  await knex('resolutions').insert([{
      id: 1,
      dueDate: '1997-02-01',
      resolution: 'Go skiing'
    },
    {
      id: 2,
      dueDate: '1997-05-01',
      resolution: 'Do stand-up'
    },
    {
      id: 3,
      dueDate: '1997-09-01',
      resolution: 'Start knitting'
    }
  ])
}