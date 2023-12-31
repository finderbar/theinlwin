import React, { FC } from 'react';

import pageNotFoundImg from '@assets/svgs/page_not_found.svg';
import Page from '@components/Page';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const cssStyles = makeStyles()((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560,
  },
}));

const NotFound: FC = () => {
  const { classes } = cssStyles();
  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: The page you're looking for isn't here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Either you tried a dark path or you came here by mistake. Be the
            whatever, try using navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={pageNotFoundImg}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFound;
