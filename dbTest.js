models.sequelize
  .sync({
    force: true,
  })
  .then(async () => {
    await models.category.bulkCreate([
      {
        id: 1,
        title: "Electronics",
      },
      {
        id: 2,
        title: "Houising",
      },
      { id: 3, title: "Clothes" },
    ]);
    await models.tag.bulkCreate([
      {
        id: 1,
        title: "Offensive",
      },
      {
        id: 2,
        title: "Nice",
      },
      { id: 3, title: "Lame" },
    ]);
  });
