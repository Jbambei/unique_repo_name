/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Scenarios = sequelize.define("scenarios", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    scenario_title: {
      type: DataTypes.STRING,
      required: true,
      len: [2, 100]
    },
    scenario_author: {
      type: DataTypes.STRING,
      required: true,

      is: ["^[a-z]+$", "i"], //will only allow letters
      len: [2, 50] //don't allow empty strings

    },
    scenario_content: {
      type: DataTypes.TEXT,
      required: true,
      len: [100, 65000]
    },
    scenario_image_url: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    scenario_created_at: {
      type: DataTypes.DATE,
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
