import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'

// import 'DivLogin.css'

export default props =>
  <Fragment>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h1 style={{color: 'white'}}>{props.inforPrimeira}</h1>
      <h2>{props.inforSegunda}</h2>

    </Grid>
  </Fragment>
