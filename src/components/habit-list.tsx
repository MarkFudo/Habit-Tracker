import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Habit, removeHabit, toggleHabit } from "../store/habit-slice";
import { RootState, AppDispatch } from "../store/store";

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const dispatch = useDispatch<AppDispatch>();

  const today = new Date().toISOString().split("T")[0];

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];
      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Button
                variant="contained"  // Changed from outlined to contained
                color={habit.completedDates.includes(today) ? "success" : "primary"}
                onClick={() =>
                  dispatch(toggleHabit({ id: habit.id, date: today }))
                }
                startIcon={<CheckCircleIcon />}
                sx={{
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: habit.completedDates.includes(today) 
                      ? 'success.dark' 
                      : 'primary.dark'
                  }
                }}
              >
                {habit.completedDates.includes(today) ? "Completed" : "Mark Complete"}
              </Button>
              <Button
                variant="contained"  // Changed from outlined to contained
                color="error"
                onClick={() => dispatch(removeHabit(habit.id))}
                startIcon={<DeleteIcon />}
                sx={{
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'error.dark'
                  }
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Current Streak: {getStreak(habit)} days
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(getStreak(habit) / 30) * 100}
              sx={{ mt: 1 }}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;