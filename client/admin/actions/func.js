
export function setNuser(nuser) {
  return {
    type: 'SET_NUSER',
    nuser
  };
}

export function setNfunc(nfunc) {
  return {
    type: 'SET_NFUNC',
    nfunc
  };
}

export function setFuncEnv(func_env) {
  return {
    type: 'SET_FUNC_ENV',
    func_env
  };
}

export function setFuncEnvVer(func_env_ver) {
  return {
    type: 'SET_FUNC_ENV_VER',
    func_env_ver
  };
}

export function setFunc(func) {
  return {
    type: 'SET_FUNC',
    func
  };
}