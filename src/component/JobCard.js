import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import AuthContext from "../auth/AuthContext";
import Stack from "@mui/material/Stack";
import SkillsPaper from "./SkillsPaper";



const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));




export default function JobCard({description, skills, id, title}) {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  const hanleClick = (event) => {
    if (auth.user) {
      navigate(`/job/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <CardStyle ariant="outlined" sx = {{ height: '400px'}}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"          
      >
        <CardContent>
          <Typography
            sx={{ color: (theme) => theme.palette.common.white }}

          >
            <h2>{title} </h2>
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography sx={{ color: (theme) => theme.palette.common.white }}>
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          component={Link}
          to={`/job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{ width: "140px", backgroundColor: "#df9e0b", marginBottom: "5px"  }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );

}