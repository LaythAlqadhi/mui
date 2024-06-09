import TourCard from '@/app/ui/tourCard';
import { Container } from '@mui/material';
import SearchAppBar from './ui/AppBar';
import cities from '@/app/lib/data';
import { Grid, Typography } from '@mui/material';

export default function Page() {
  return (
    <div>
      <SearchAppBar />
      <Container>
        {cities.map((city) => (
          <>
            <Typography variant="caption" component="p">
              Top {city.name} tours
            </Typography>
            <Grid container spacing={5} paddingY={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}
