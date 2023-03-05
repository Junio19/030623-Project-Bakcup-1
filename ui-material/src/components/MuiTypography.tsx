/**TYPOGRAPHY
 * 1.variant
 * 2. gutterbottom
 * 3. subtitle1 & subtitle1
 * 4. body1 & body2
 * 5. component
 */

import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" component={"h6"}>
        h1
      </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6" gutterBottom>
        h6
      </Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        dolorem? Modi error sint iste laboriosam aliquam, neque quas eos sunt
        molestiae quo hic voluptate voluptatem non veritatis. Laboriosam, velit
        deserunt!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        consequatur facilis fugit quod dolorum earum quia! Consectetur optio
        veniam eveniet amet blanditiis quae quas, repudiandae, saepe ducimus
        consequatur, sit nihil.
      </Typography>
    </div>
  );
};

export default MuiTypography;
