//let our module export sequelize(connection) DataTypes(which type of data used in each entrity)
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl:{
      type : DataTypes.STRING,
      allowNull: false,
    }
  });
  return Blog;
};
