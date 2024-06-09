import TourCard from '@/app/ui/tourCard';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

export default function Page() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
}
