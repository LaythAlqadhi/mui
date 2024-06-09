import { Box, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { AccessAlarm } from '@mui/icons-material';

export default function TourCard({ tour }) {
  return (
    <Grid item xs={3}>
      <Paper elevation={2} square>
        <Image
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
          height={358}
          width={626}
          style={{ width: '100%', height: '5rem' }}
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <AccessAlarm
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant="caption" component="p">
              {tour.duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: 1.5,
              gap: 0.5,
            }}
          >
            <Rating
              name="read-only"
              value={tour.rating}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="body2" component="p">
              {tour.rating}
            </Typography>
            <Typography variant="caption" component="p">
              ({tour.numberOfReviews} reviews)
            </Typography>
          </Box>
          <Typography variant="subtitle2" component="h3">
            From C ${tour.price}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
