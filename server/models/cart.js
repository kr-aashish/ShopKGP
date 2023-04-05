module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("cart", {
        cartId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
    });

    Cart.associate = (models) => {
        Cart.belongsToMany(models.product, {
            through: "CartProduct",
            foreignKey: "cartId",
            otherKey: "itemId",
        });
        Cart.belongsTo(models.users, {
            foreignKey: "userId",
            onDelete: "CASCADE",
        });
    };

    return Cart;
};
