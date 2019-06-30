/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Plans = sequelize.define("Plans", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    plan_title: {
      type: DataTypes.STRING,
      required: true,
      len: [2, 100]
    },
    plan_author: {
      type: DataTypes.STRING,
      required: true,
      is: ["^[a-z]+$", "i"], // will only allow letters
      len: [2, 50]
    },
    plan_content: {
      type: DataTypes.TEXT,
      len: [100, 65000],
      allowNull: false
    }
  });
  Plans.associate = function(models) {
    Plans.belongsTo(models.Scenario, {});
  };
  return Plans;
};
