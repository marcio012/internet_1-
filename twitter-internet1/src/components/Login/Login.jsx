import React, { Fragment } from 'react'
import DivLoginEsq from '../template/DivLoginEsq'
import DivLoginDir from '../template/DIvLoginDir'

export default props =>
  <Fragment>
    <DivLoginEsq
      inforPrimeira='Testeasdasd'
      inforSegunda='Teste 2'
    />
    <DivLoginDir
      action='Entra'
      descricao='Veja p que está acontencento no mundo'
      info='Junte-se ao TTwitter hoje.'
      cadastro='Cadastre-se'
      login='Log In'

    />
    <h1>Hello</h1>
  </Fragment>
