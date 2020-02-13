import * as UserQuery from './User/Query'
import * as CatalogoQuery from './Catalogo/Query'
import * as ControleAcessoQuery from './ControleAcesso/Query'

export default {
  Query: { ...UserQuery, ...CatalogoQuery, ...ControleAcessoQuery }
}