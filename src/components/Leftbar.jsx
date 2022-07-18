import React from "react";
import { Box } from "@mui/material";

function Leftbar() {
  return (
    <Box
      bgcolor="yellow"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Leftbar
    </Box>
  );
}

export default Leftbar;
