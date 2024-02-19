import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Container,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  CssBaseline,
} from "@mui/material";

export const Signup = (props: {
  onClick: (username: string, password: string) => void;
}) => {
  //------------------------------VARIABLES------------------------------//

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //------------------------------HANDLERS------------------------------//

  const handleChange = (e: any) => {
    e.target.name == "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  //------------------------------COMPONENTS------------------------------//
  return (
    <Container
      maxWidth="sm"
      component={Box}
      boxShadow={3}
      bgcolor="white"
      mt={8}
      p={3}
      borderRadius={2}
    >
      <CssBaseline />

      <AppBar
        position="relative"
        elevation={0}
        style={{
          background: "linear-gradient(45deg, #009688, #004d40)",
          marginBottom: "2rem",
          borderRadius: "8px 8px 0 0",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", py: 1, px: 2 }}
        >
          Sign In
        </Typography>
      </AppBar>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="medium" mb={1}>
          Enter your Email
        </Typography>
        <TextField
          name="email"
          id="email-input"
          label="Email"
          fullWidth
          variant="outlined"
          onChange={handleChange}
        />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="medium" mb={1}>
          Enter your Password
        </Typography>
        <TextField
          name="password"
          id="password-input"
          label="Password"
          fullWidth
          variant="outlined"
          type="password"
          onChange={handleChange}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember Me"
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        size="large"
        style={{
          backgroundColor: "#009688",
          color: "white",
        }}
        onClick={() => props.onClick(email, password)}
      >
        Sign In
      </Button>
    </Container>
  );
};
