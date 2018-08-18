const constants = require("../../constants.js");
const numberNl = require("./numbernl.js");
const stringNl = require("./stringnl.js");
const keywordNl = require("./keywordnl");
const variableNl = require("./variablenl.js");
const arrayNl = require("./arraynl.js");
const bracketExpressionNl = require("./bracketexpressionnl.js");

const nodeLiterals = {};
nodeLiterals[constants.EXP_PUNC] = {};
nodeLiterals[constants.VARIABLE] = variableNl;
nodeLiterals[constants.NUMBER] = numberNl;
nodeLiterals[constants.STRING] = stringNl;
nodeLiterals[constants.KEYWORD] = keywordNl;
nodeLiterals[constants.L_SQ_BRACKET_SYM_NAME] = arrayNl;
nodeLiterals[constants.EXP_PUNC][constants.L_SQ_BRACKET_SYM_NAME] = arrayNl;
nodeLiterals[constants.EXP_PUNC][constants.L_BRACKET_SYM_NAME] = bracketExpressionNl;

module.exports = nodeLiterals;