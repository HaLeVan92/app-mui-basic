import React from 'react';
import jobs from "../jobs.json";
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
function DetailPage() {
  const params = useParams();
  const jobID = params.id;
  const job = jobs.find((job) => job.id === jobID);

  if (!job) {
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  }

  return (
    <Container sx={{ width: 900}} >
      <Typography variant="h3" marginTop={3} color="success.contrastText">
        {job.description}
      </Typography>

      {/* <Box marginTop={3} sx={{display: "flex"}}>

      </Box> */}
    </Container>
  )
}

export default DetailPage;