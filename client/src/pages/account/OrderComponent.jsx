import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const OrderComponent = () => {
    // return (
    //     <Box flex={4} p={2}>
    //         <Paper sx={{padding: 4, borderRadius: 3, marginRight: 2}} variant={"outlined"}>
    //             <Typography variant={"h5"} pb={2} pt={2} fontWeight={"bolder"}>
    //                 My Orders
    //             </Typography>
    //             <Grid container spacing={2}>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
    //                         ORDER ID
    //                     </Typography>
    //                     <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"Order ID"}/>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
    //                         ORDER DATE
    //                     </Typography>
    //                     <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"Order Date"}/>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
    //                         STATUS
    //                     </Typography>
    //                     <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"Status"}/>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={3}>
    //                     <Typography pt={4} color={"gray"} fontWeight={"bold"} fontSize={11}>
    //                         TOTAL AMOUNT
    //                     </Typography>
    //                     <TextField variant={"outlined"} size={"small"} margin={"dense"} placeholder={"Total Amount"}/>
    //                 </Grid>
    //             </Grid>
    //         </Paper>
    //     </Box>
    // );

    const orderHistory = [
        {
            orderNumber: 1,
            orderDate: "2022-01-01",
            orderTotal: "$100"
        },
        {
            orderNumber: 2,
            orderDate: "2022-02-01",
            orderTotal: "$200"
        },
        {
            orderNumber: 3,
            orderDate: "2022-03-01",
            orderTotal: "$300"
        }
    ];


    return (
        <Box flex={4} p={2}>
            <Paper sx={{padding: 4, borderRadius: 3, marginRight: 2}} variant={"outlined"}>
                <Typography variant={"h5"} pb={2} pt={2} fontWeight={"bolder"}>
                    Your Orders
                </Typography>
                {orderHistory.map((order, index) => (
                    <Paper key={index} sx={{padding: 2, marginTop: 2}} variant={"outlined"}>
                        <Typography variant={"body2"} fontWeight={"bold"} pb={1}>
                            Order #{order.orderNumber}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant={"body2"} fontWeight={"bold"}>
                                    Order Date:
                                </Typography>
                                <Typography variant={"body2"}>{order.orderDate}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant={"body2"} fontWeight={"bold"}>
                                    Order Total:
                                </Typography>
                                <Typography variant={"body2"}>{order.orderTotal}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Paper>
        </Box>
    );
};

export default OrderComponent;
