import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

export default function TourCard() {
  return (
    <Grid item xs={3}>
      <Paper elevation={2} square>
        <Image
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
          width={500}
          height={500}
        />
      </Paper>
    </Grid>
  );
}
