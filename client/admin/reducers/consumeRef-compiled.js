"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = consumeRef;
var initConsumeRefState = {
  // TODO: refinery API 확인 후 작업 예정
};

////////////////////////////////////////////////////////////////////////////////////
// REDUCER - CONSUME REFINERY
//
function consumeRef() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initConsumeRefState;
  var action = arguments[1];

  /*switch (action.type) {
    case 'INIT_REF':
      return {
        ...state
      };
    case 'RUN_REF':
      return {
        ...state
      };
    case 'STOP_REF':
      return {
        ...state
      };
    case 'REMOVE_REF':
      return {
        ...state
      };
    default:
      return state;
  }*/
  return state;
}

//# sourceMappingURL=consumeRef-compiled.js.map