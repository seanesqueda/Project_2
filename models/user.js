module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
     email: {
         type: DataTypes.STRING,
         unique: true,
         required: true,
         validate: {
             isEmail: true
         }
     },
     salt: DataTypes.STRING,
     hash: DataTypes.STRING,
     status: {
         type: DataTypes.ENUM,
         allowNull: false,
         values: ['active', 'pending', 'inactive'],
         defaultValue: 'pending'
     }
  })

  return User;
}