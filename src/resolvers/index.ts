import * as UserQuery from './User/Query'
import * as CatalogoQuery from './Catalogo/Query'

export default {
  Query: { ...UserQuery, ...CatalogoQuery }
}