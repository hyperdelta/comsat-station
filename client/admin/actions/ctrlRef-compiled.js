'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRef = initRef;
exports.runRef = runRef;
exports.stopRef = stopRef;
exports.removeRef = removeRef;
function initRef(nuser) {
  return {
    type: 'INIT_REF'
  };
}

function runRef(nfunc) {
  return {
    type: 'RUN_REF'
  };
}

function stopRef(func_env) {
  return {
    type: 'STOP_REF'
  };
}

function removeRef(func_env_ver) {
  return {
    type: 'REMOVE_REF'
  };
}

//# sourceMappingURL=ctrlRef-compiled.js.map