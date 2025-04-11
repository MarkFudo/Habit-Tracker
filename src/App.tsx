import { Container, Typography, Box } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import HabitStats from "./components/habit-stats";
import Footer from "./components/footer";

const App = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        pb: 12
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontWeight: 700,
            mb: 4
          }}
        >
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Box>
      <Footer />
    </Container>
  );
};

export default App;