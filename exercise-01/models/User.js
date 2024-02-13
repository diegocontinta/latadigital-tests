const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');

const User = sequelize.define("User", {

    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
    },

    email: {
            type: DataTypes.STRING,
            unique: true
    },

   password: {
     type: DataTypes.STRING,
   },

    created_at: {
        type: DataTypes.DATEONLY,
    }
},{
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
);

module.exports = User;
