/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Scenarios = sequelize.define("Scenario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    scenario_title: {
      type: DataTypes.STRING,
      required: true
    },
    scenario_author: {
      type: DataTypes.STRING,
      required: true
    },
    scenario_content: {
      type: DataTypes.TEXT,
      required: true
    },
    scenario_image_url: {
      type: DataTypes.TEXT
    },
    scenario_created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return Scenarios;
};
