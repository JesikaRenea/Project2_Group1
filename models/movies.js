module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    wantToWatch: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    }
  });
  return Movie;
};
