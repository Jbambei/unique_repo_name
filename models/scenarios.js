/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Scenarios = sequelize.define("Scenario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    scenario_title: {
      type: DataTypes.STRING,
      len: [2, 100],
      allowNull: false
    },
    scenario_author: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$", "i"], //will only allow letters
      len: [2, 50],
      allowNull: false
    },
    scenario_content: {
      type: DataTypes.TEXT,
      len: [100, 65000],
      allowNull: false
    },
    scenario_image_url: {
      type: DataTypes.TEXT,
      isUrl: true,
      allowNull: false
    }
  });
  Scenarios.associate = function(models) {
    Scenarios.hasMany(models.Plans, {
      onDelete: "cascade"
    });
  };
  return Scenarios;
};
