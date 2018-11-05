import rootdep from './rootdep';
import innerdep from './innerdep';

import twitter from 'ponents/barnacle';

import something from './nothing.js';

const obj = {store:0}

function dep (a) {
  obj.store += a
  return obj.store
}

export default dep

