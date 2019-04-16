import React from 'react'
import {AppBar, Avatar, Badge, Icon, ListItem, ListItemText, Tab, Tabs, Toolbar} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/es/Hidden/Hidden'
import TextField from '@material-ui/core/es/TextField/TextField'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'

export default porps =>
  <AppBar position='sticky' >

    <Toolbar>
      <Grid container alignItems='center' spacing={2} >
        <Grid item xs={6} sm={4}>
          <Tabs value={0} variant='fullWidth'>

            <Tab style={{minWidth: '25%'}}
              onlyIcon
                icon={
                  <Badge dotted badgeContent=''>
                    <Icon>home</Icon>
                  </Badge>
                }
            />

            <Tab style={{minWidth: '25%'}}
              onlyIcon
              icon={<Icon>search</Icon>}
            />

            <Tab style={{minWidth: '25%'}}
              onlyIcon
              icon={
                <Badge number badgeContent={2}>
                  <Icon>notifications</Icon>
                </Badge>
              }
            />

            <Tab
              style={{minWidth: '25%'}}
              onlyIcon
              icon={<Icon>mail</Icon>}
            />

          </Tabs>
        </Grid>
        <Hidden smDown>
          <Grid item sm>
            <TextField
              fullWidth
              placeholder='Buscar Tweets'
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Hidden>

        <Grid item xs={6} sm='auto'>
          <ListItem>
            {/* TODO: imagem do avatar no db.json */}
            <Avatar src=''/>
            <ListItemText primary='Márcio Heleno'/>
          </ListItem>
        </Grid>

      </Grid>
    </Toolbar>
  </AppBar>
