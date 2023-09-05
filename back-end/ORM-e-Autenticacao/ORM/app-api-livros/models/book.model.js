const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Book', {
    type: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  });

  return Book;
};

module.exports = UserModel;
