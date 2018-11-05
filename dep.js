import rootdep from './rootdep';
import innerdep from './innerdep';

import asdfasdfqwer from 'zxcvzxcvzxcv';

import something from './nothing.js';

const obj = {store:0}

function dep (a) {
  asdfasdfqwer()
  obj.store += a
  return obj.store
}

export default dep

