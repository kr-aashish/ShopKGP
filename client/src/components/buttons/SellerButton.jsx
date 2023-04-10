import { Button } from "@mui/material";
import React from "react";

const SellerButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
    >
      {text}
    </Button>
  );
};

export default SellerButton;
