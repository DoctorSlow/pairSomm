module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    item1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    item2: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    hashtag: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    upvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    downvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  });
  return Post;
};
