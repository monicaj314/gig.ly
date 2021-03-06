module.exports = function(sequelize, DataTypes) {
  var Worker = sequelize.define("Worker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 13]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [1, 100]
      }
    }
  },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Worker.hasMany(models.Job, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Worker;
};
