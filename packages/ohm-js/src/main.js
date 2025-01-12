import ohmGrammar from '../dist/ohm-grammar.js';
import {buildGrammar,compileAndLoad} from './buildGrammar.js';
import * as common from './common.js';
import {Grammar} from './Grammar.js';
import * as pexprs from './pexprs.js';
import * as util from './util.js';

// Late initialization for stuff that is bootstrapped.

import './semanticsDeferredInit.js'; // TODO: Clean this up.
Grammar.initApplicationParser(ohmGrammar, buildGrammar);

const DEFAULT_OPTIONS = {
  fetchGrammar: undefined
};

const isBuffer = obj =>
  !!obj.constructor &&
  typeof obj.constructor.isBuffer === 'function' &&
  obj.constructor.isBuffer(obj);


export function grammar(source, optNamespace, options = {}) {
  const ns = grammars(source, optNamespace, options);

  // Ensure that the source contained no more than one grammar definition.
  const grammarNames = Object.keys(ns);
  if (grammarNames.length === 0) {
    throw new Error('Missing grammar definition');
  } else if (grammarNames.length > 1) {
    const secondGrammar = ns[grammarNames[1]];
    const interval = secondGrammar.source;
    throw new Error(
        util.getLineAndColumnMessage(interval.sourceString, interval.startIdx) +
        'Found more than one grammar definition -- use ohm.grammars() instead.',
    );
  }
  return ns[grammarNames[0]]; // Return the one and only grammar.
}

export function grammars(source, optNamespace, options = {}) {
  
  const ns = Object.create(optNamespace || {});

  if (typeof source !== 'string') {
    // For convenience, detect Node.js Buffer objects and automatically call toString().
    if (isBuffer(source)) {
      source = source.toString();
    } else {
      throw new TypeError(
          'Expected string as first argument, got ' + common.unexpectedObjToString(source),
      );
    }
  }

  const mergedOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  compileAndLoad(source, ns, mergedOptions);

  return ns;
}

// This is used by ohm-editor to instantiate grammars after incremental
// parsing, which is not otherwise supported in the public API.
export {buildGrammar as _buildGrammar};

export * from './main-kernel.js';
export {IndentationSensitive as ExperimentalIndentationSensitive} from './IndentationSensitive.js';
export {ohmGrammar};
export {pexprs};
export {version} from './version.js';
