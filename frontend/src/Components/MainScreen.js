import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import DetailModal from './DetailModal';
import FavoritesList from './FavoritesList';
import Header from './Header';
import MovieList from './MovieList';

const MainScreen = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="xl" component="main" sx={{ mt: 12, mb: 5 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container spacing={5} alignItems="flex-start">
                        <Grid item sm={8} xs={12}>
                            <MovieList />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            height={"100%"}
                        >
                            <FavoritesList />
                        </Grid>
                    </Grid>
                </Paper>
                <DetailModal />
            </Container>
        </div>
    );
};

export default MainScreen;