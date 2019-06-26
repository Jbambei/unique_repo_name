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
        required: true
      },
      plan_author: {
          type: DataTypes.STRING,
          required: true
      },
      plan_title: {
          type: DataTypes.STRING,
          required: true
      },
      plan_content: {
          type: DataTypes.STRING,
          required: true
      },
      scenario_created_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    return Plans;
  };