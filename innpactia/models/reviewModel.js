module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Review

}