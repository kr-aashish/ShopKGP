module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define("stock", {
        stockId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        itemId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            // references: {
            //     model: 'product',
            //     key: 'itemId',
            // },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    // Stock.associate = (models) => {
    //     Stock.belongsTo(models.Product, {
    //         foreignKey: 'itemId',
    //     });
    // };

    return Stock;
};
