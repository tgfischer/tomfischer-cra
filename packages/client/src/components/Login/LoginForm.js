import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Form from "../Form";

const LoginForm = ({ onValidSubmit }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Form onValidSubmit={onValidSubmit}>
        <Typography variant="display2">Login</Typography>
        <Form.TextField
          name="email"
          label="Email"
          validations={{
            isEmail: true
          }}
          validationErrors={{
            isEmail: "Please enter a valid email"
          }}
          fullWidth
          required
        />
        <Form.TextField
          name="password"
          type="password"
          label="Password"
          validationErrors={{
            required: "Please enter a valid password"
          }}
          fullWidth
          required
        />
        <Form.SubmitButton variant="raised" color="secondary" size="large">
          Login
        </Form.SubmitButton>
      </Form>
    </Grid>
  </Grid>
);

export default LoginForm;
