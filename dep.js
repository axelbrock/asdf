import rootdep from './rootdep';
import innerdep from './innerdep';

import twitter from 'components/barnacle';

const obj = {store:0}

function dep (a) {
  obj.store += a
  return obj.store
}

export default dep

