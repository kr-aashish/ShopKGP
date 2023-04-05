module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        orderId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            // references: {
            //     model: 'user',
            //     key: 'userId',
            // },
        },
        orderFulfilled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        // itemIds: {
        //     type: DataTypes.ARRAY(DataTypes.UUID),
        //     allowNull: false,
        //     references: {
        //         model: 'product',
        //         key: 'itemId',
        //     },
        // },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        paymentInfo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Order.associate = (models) => {
    //     Order.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //     });
    //     Order.belongsToMany(models.Product, {
    //         through: 'OrderProduct',
    //         foreignKey: 'orderId',
    //     });
    //     Order.belongsToMany(models.Stock, {
    //         through: 'OrderStock',
    //         foreignKey: 'orderId',
    //     });
    // };

    return Order;
};
