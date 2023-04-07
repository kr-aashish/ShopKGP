import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#F2F2F2',
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
        maxHeight: '200px',
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
    chatIcon: {
        color: '#25D366',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        marginLeft: '10px',
    },
}));


const OrderComponent = () => {
    const classes = useStyles(); // call useStyles and store the result in a variable

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
            ],
            "sellerContactNumber": "7493017068"
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
            ],
            "sellerContactNumber": "8084662242"
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
            ],
            "sellerContactNumber": "123-456-7890"
        }
    ];

    const openWhatsAppChat = (number) => {
        const message = `Hello, I am interested in your products listed on ShopKGP. Please provide me with more details.`;
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <Box flex={4} p={2}>
            {orderHistory.map((order) => (
                <Paper key={order.orderId} className={classes.root}>
                    <div className={classes.orderHeader}>
                        <Typography variant="h6" className={classes.orderNumber}>
                            {order.createdAt}
                        </Typography>
                        <Typography >
                            {/*<a href={`https://wa.me/${order.sellerContactNumber}`} target="_blank">*/}
                            {/*    <WhatsAppIcon className={classes.chatIcon}/>*/}
                            {/*</a>*/}
                            <WhatsAppIcon className={classes.chatIcon} onClick={() => openWhatsAppChat(order.sellerContactNumber)} />
                        </Typography>
                        <Typography variant="h6" className={classes.orderPrice}>
                            {order.price}
                        </Typography>
                    </div>
                    <div className={classes.orderProducts}>
                        <Grid container spacing={3}>
                            {order.products.map((product) => (
                                <Grid item xs={12} sm={6} key={product.id}>
                                    <Box display="flex" alignItems="center">
                                        <img src={product.image} alt={product.name} className={classes.productImage} />
                                        <div>
                                            <Typography variant="h6" className={classes.productName}>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body1" className={classes.productDescription}>
                                                {product.description}
                                            </Typography>
                                            <Typography variant="body1" className={classes.productQuantity}>
                                                Quantity: {product.orderProduct.quantity}
                                            </Typography>
                                            <Typography variant="body1" className={classes.productPrice}>
                                                Price: {product.price}
                                            </Typography>
                                            {/*<Typography className={classes.chatIcon}>*/}
                                            {/*    <a href="https://wa.me/1234567890" target="_blank">*/}
                                            {/*        <WhatsAppIcon className={classes.chatIcon}/>*/}
                                            {/*    </a>*/}
                                            {/*</Typography>*/}
                                        </div>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Paper>
            ))}
        </Box>
    );
};

export default OrderComponent;
