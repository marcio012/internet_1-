import React, { Fragment } from 'react'
import Header from '../../template/Header'
import {Avatar, CssBaseline} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


export default props =>

  <Fragment>
    <CssBaseline/>
    <Header/>
    <div style={{maxWidth: '1000px', backgroundColor: '#ccc', margin: 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div style={{backgroundColor: '#fff'}}>
            <div style={{height: '200px', backgroundColor: '#ccd6dd'}}/>

            <div
              style={{
                backgroundColor: '#fff',
                position: 'relative',
                height: '250px',
                zIndex: '1'

              }}
            >
              <Avatar
                style={{
                  marginTop: '-28%',
                  marginBottom: 14,
                  position: 'absolute',
                  top: '15px',

                  width: '200px',
                  height: '200px'


                }}


              />
            </div>


          </div>
        </Grid>
      </Grid>
    </div>
  </Fragment>



