/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    response_author: {
      type: DataTypes.STRING,
      required: true,
      is: ["^[a-z]+$", "i"], // will only allow letters
      len: [2, 50]
    },
    response_content: {
      type: DataTypes.TEXT,
      required: true,
      len: [100, 65000]
    }
  });
  return Response;
};
