import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import SkillsPaper from './SkillsPaper';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../modal/BasicModal';




export default function JobCard({job}) {

  const navigate = useNavigate();

  
  return (
    <Card onClick={() => navigate(`/job/${job.id}`)} 
    sx={{height : 340 , position: 'relative'}}
      
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="success.contrastText">
            {job.title}
          </Typography>
          <Divider />
          <SkillsPaper skills={job.skills} />
          <Typography variant="body2"  color="success.contrastText">
            {job.description}
          </Typography>      
        </CardContent>
      </CardActionArea>
      <CardActions sx={{position: 'absolute', bottom:'10px', left: '80px'}}>       
        <BasicModal/>
      </CardActions>
    </Card>
  );

}