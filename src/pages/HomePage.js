import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import api from "../data/fetchData";
import Pagination from "@mui/material/Pagination";

import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import JobCard from "../component/JobCard";

const CentterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));

function Home() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page, q);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page, q]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      {jobs.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid key={job.id} item lg={3} md={4} sm={6} xs={12}>
                <JobCard
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  skills={job.skills}
                />
              </Grid>
            ))}
          </Grid>
          <CentterPagination
            count={3}
            variant="outlined"
            shape="rounded"          
            size="medium"
            color='pagination'
            sx={{ marginTop: "40px" }}
            onChange={(e, page) => {
              setPage(page);}}
          />
        </>
      ) : (
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          No Result
        </Typography>
      )}
    </Container>
  );
}

export default Home;