/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Plans", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    response_author: {
      type: DataTypes.STRING,
      required: true
    },
    response_content: {
      type: DataTypes.TEXT,
      required: true
    },
    scenario_created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return Response;
};
