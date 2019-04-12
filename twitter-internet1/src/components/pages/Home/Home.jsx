import React, { Fragment } from 'react'
import Main from '../../template/Main'
import Login from '../Login/Login'
import Header from '../../template/Header'
import {Avatar, Button, CssBaseline} from '@material-ui/core'
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
                // ultraLarge
                // bordered
                // src={
                //   'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj7tozji8jhAhWJhOAKHd8RChAQjRx6BAgBEAU&url=https%3A%2F%2Frevistagalileu.globo.com%2FCultura%2Fnoticia%2F2019%2F03%2Fvingadores-teoria-afirma-que-thanos-poderia-morrer-pelo-anus-entenda.html&psig=AOvVaw0AOWJpMdHbT9suHCFR4DMT&ust=1555073858901849'
                // }

              />
            </div>


          </div>
        </Grid>
      </Grid>
    </div>
  </Fragment>



