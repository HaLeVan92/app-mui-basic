import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import SkillsPaper from '../component/SkillsPaper';
// import { useParams } from 'react-router-dom';
// import jobs from "../jobs.json";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
};

export default function BasicModal(job) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const params = useParams();
  // const jobID = params.id;
  // const job = jobs.find((job) => job.id === jobID);

  // if (!job) {
  //   return (
  //     <Typography variant="h3" marginTop={3}>
  //       No job found
  //     </Typography>
  //   );
  // }

  return (
    <div>
      <Button onClick={handleOpen} sx={{ width: "130px", backgroundColor: "#df9e0b" , color: 'white' }}>LEARN MORE</Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backgroundColor=""
      >
        <Box sx={style}>
          <Typography gutterBottom variant="h5" component="div" color="success.contrastText">
            {job.title}
          </Typography>
          <Divider />
          <SkillsPaper skills={job.skills} />
          <Typography variant="body2"  color="success.contrastText">
            {job.description}
          </Typography> 
          <Typography gutterBottom variant="h5" component="div" color="success.contrastText">
            {job.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}