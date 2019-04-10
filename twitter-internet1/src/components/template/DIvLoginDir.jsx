import React, {Fragment} from 'react'
import Fab from '@material-ui/core/Fab'

export default props =>

  <Fragment>
    { /*Logo Aqui */ }
    <Fab>{props.action}</Fab>
    <p>{props.descricao}</p>
    <hr/>
    <h2>{props.info}</h2>

    <Fab>
      {props.cadastro}
    </Fab>

    <Fab>
      {props.login}
    </Fab>


  </Fragment>
