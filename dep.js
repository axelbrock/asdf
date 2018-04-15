import rootdep from './rootdep';
import innerdep from './innerdep';


const obj = {store:0}

function dep (a) {
  obj.store += a
  return obj.store
}

export default dep

