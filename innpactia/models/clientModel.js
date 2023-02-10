module.exports = (sequelize, DataTypes) => {

    const Client = sequelize.define("client", {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT
        },
    
    })

    return Client

}