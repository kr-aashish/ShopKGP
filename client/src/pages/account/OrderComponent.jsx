import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#F7F7F7',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
        },
    },
    orderHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
        },
    },
    orderNumber: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    orderDate: {
        fontSize: '0.875rem',
        color: '#565959',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
        },
    },
    orderPrice: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    orderProducts: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(3),
        },
    },
    productImage: {
        maxWidth: '100%',
        height: 'auto',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(3),
        },
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
    },
    productDescription: {
        fontSize: '0.875rem',
        color: '#565959',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
        },
    },
    productQuantity: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: '#565959',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
            marginTop: theme.spacing(2),
        },
    },
    productPrice: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            marginTop: theme.spacing(2),
        },
    },
}));


const OrderComponent = () => {

    const orderHistory = [
        {
            "orderId": "ORD123456",
            "createdAt": "2022-03-15",
            "price": "$150.00",
            "products": [
                {
                    "id": "1",
                    "name": "Apple iPhone 13",
                    "description": "The latest iPhone with A15 Bionic chip and Pro camera system.",
                    "price": "$999.00",
                    "image":
                        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
                    "orderProduct": {
                        "quantity": 1
                    }
                },
                {
                    "id": "2",
                    "name": "AirPods Pro",
                    "description": "Wireless earbuds with active noise cancellation and Transparency mode.",
                    "price": "$249.00",
                    "image":
                        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
                    "orderProduct": {
                        "quantity": 2
                    }
                }
            ]
        },
        {
            "orderId": "ORD789012",
            "createdAt": "2022-02-28",
            "price": "$85.00",
            "products": [
                {
                    "id": "3",
                    "name": "Kindle Paperwhite",
                    "description": "Waterproof e-reader with built-in light.",
                    "price": "$129.99",
                    "image":
                        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
                    "orderProduct": {
                        "quantity": 1
                    }
                }
            ]
        },
        {
            "orderId": "ORD345678",
            "createdAt": "2022-01-05",
            "price": "$52.50",
            "products": [
                {
                    "id": "4",
                    "name": "Echo Dot",
                    "description": "Smart speaker with Alexa.",
                    "price": "$49.99",
                    "image":
                        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
                    "orderProduct": {
                        "quantity": 3
                    }
                }
            ]
        }
    ];



    return (
        <Box flex={4} p={2}>
            <Paper sx={{ padding: 4, borderRadius: 3, marginRight: 2 }} variant={"outlined"}>
                <Typography variant={"h5"} pb={2} pt={2} fontWeight={"bolder"}>
                    Order History
                </Typography>
                {orderHistory.map((order) => (
                    <Paper key={order.orderId} sx={{ padding: 2, marginTop: 2 }} variant={"outlined"}>
                        <Typography variant={"body2"} fontWeight={"bold"} pb={1}>
                            Order #{order.orderId}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant={"body2"} fontWeight={"bold"}>
                                    Order Date:
                                </Typography>
                                <Typography variant={"body2"}>{order.createdAt}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant={"body2"} fontWeight={"bold"}>
                                    Order Total:
                                </Typography>
                                <Typography variant={"body2"}>{order.price}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant={"body2"} fontWeight={"bold"} pt={2}>
                            Products:
                        </Typography>
                        {order.products.map((product) => (
                            <Grid container key={product.id} sx={{ marginTop: 2 }}>
                                <Grid item xs={2}>
                                    <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant={"body2"} fontWeight={"bold"}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant={"body2"}>{product.description}</Typography>
                                    <Typography variant={"body2"} fontWeight={"bold"}>
                                        Quantity: {product.orderProduct.quantity}
                                    </Typography>
                                    <Typography variant={"body2"} fontWeight={"bold"}>
                                        Price: {product.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Paper>
                ))}
            </Paper>
        </Box>

    );
};

export default OrderComponent;
