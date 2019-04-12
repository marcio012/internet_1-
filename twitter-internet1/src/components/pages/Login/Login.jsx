import React, { Fragment } from 'react'
import DivLoginEsq from '../../template/DivLoginEsq'
import DivLoginDir from '../../template/DIvLoginDir'
import Grid from '@material-ui/core/Grid'

export default props =>
  <Fragment>
    <Grid container >
      <Grid xs={6}>
        <DivLoginEsq
          inforPrimeira='Testeasdasd'
          inforSegunda='Teste 2'
        />
      </Grid>

      <Grid xs={6}>
        <DivLoginDir
          action='Entra'
          descricao='Veja p que está acontencento no mundo'
          info='Junte-se ao TTwitter hoje.'
          cadastro='Cadastre-se'
          login='Log In'
        />
      </Grid>

    </Grid>

  </Fragment>
