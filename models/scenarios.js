/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Scenarios = sequelize.define("Scenario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      required: true
    },
    scenario_title: {
      type: DataTypes.STRING,
      len: [2, 100],
      required: true
    },
    scenario_author: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$", "i"], //will only allow letters
      len: [2, 50], //don't allow empty strings
      required: true
    },
    scenario_content: {
      type: DataTypes.TEXT,
      len: [100, 65000],
      required: true
    },
    scenario_image_url: {
      type: DataTypes.TEXT,
      isUrl: true,
      required: true
    }
  });
  Scenarios.associate = function(models) {
    Scenarios.hasMany(models.Plans, {
      onDelete: "cascade"
    });
  };
  return Scenarios;
};
