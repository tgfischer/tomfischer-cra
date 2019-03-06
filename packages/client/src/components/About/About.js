import React from "react";
import Typography from "@material-ui/core/Typography";

import Page from "../Page";
import { paragraphs } from "./constants";

const About = ({ classes }) => (
  <Page headline="About Myself" skinny>
    {paragraphs.map((paragraph, i) => (
      <Typography key={i} variant="h5" align="justify" paragraph>
        {paragraph}
      </Typography>
    ))}
  </Page>
);

export default About;
