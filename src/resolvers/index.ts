import * as UserQuery from './User/Query';
import * as CatalogoQuery from './Catalogo/Query';
import * as ControleAcessoQuery from './ControleAcesso/Query';
import * as PessoaQuery from './Pessoa/Query';
import * as GeralQuery from './Geral/Query';

export default {
  Query: {
    ...UserQuery,
    ...CatalogoQuery,
    ...ControleAcessoQuery,
    ...PessoaQuery,
    ...GeralQuery,
  },
};
