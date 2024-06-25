import React, { useState } from 'react'
import jobs from "../jobs.json"
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useSearchParams } from "react-router-dom";
import JobCard from '../component/JobCard';





export default function MainHeader() {  
  const [page, setPage] = useState(1);

  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  


  let a = (page-1) * 5;
  let b = (page) * 5;
  const filteredJobs =jobs.filter((job) =>job.title.includes(query));

return (   
    <Container>

      <Stack spacing={2}
       sx={{marginTop: "15px", marginBottom: "15px"}}
       display="flex"
       justifyContent="space-between"
       alignItems="center"      
        
       >
         <Grid container spacing={2} mt={2} marginBottom={2}
             display="flex"
             justifyContent="space-start"
             alignItems="center"
             height="100%"
             padding="5px"
             >
          {jobs.slice(a, b).map((job) => (
            <Grid item xs={12} md={4} lg={3}>          
              <JobCard
                key={jobs.id}
                title={jobs.title}
                job={jobs}
              />           
            </Grid>          
          ))}
        </Grid>
        <Pagination
         count={3}
          variant="outlined"
          shape="rounded"          
          size="medium"
          color='pagination'
          onChange={(e, page) => {
            setPage(page);
          }}
          ></Pagination>
      </Stack>
    </Container> 
  )
}