# Snapshot report for `src/commands/generateBundles/index.test.mjs`

The actual snapshot is saved in `index.test.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## arithmetic grammar with no types

> Snapshot 1

    '\'use strict\';const ohm=require(\'ohm-js\');module.exports=ohm.makeRecipe(["grammar",{"source":"Arithmetic {\\n  Exp\\n    = AddExp\\n\\n  AddExp\\n    = AddExp \\"+\\" PriExp  -- plus\\n    | AddExp \\"-\\" PriExp  -- minus\\n    | PriExp\\n\\n  PriExp\\n    = \\"(\\" Exp \\")\\"  -- paren\\n    | number\\n\\n  number\\n    = digit+\\n}"},"Arithmetic",null,"Exp",{"Exp":["define",{"sourceInterval":[15,31]},null,[],["app",{"sourceInterval":[25,31]},"AddExp",[]]],"AddExp_plus":["define",{"sourceInterval":[48,74]},null,[],["seq",{"sourceInterval":[48,65]},["app",{"sourceInterval":[48,54]},"AddExp",[]],["terminal",{"sourceInterval":[55,58]},"+"],["app",{"sourceInterval":[59,65]},"PriExp",[]]]],"AddExp_minus":["define",{"sourceInterval":[81,108]},null,[],["seq",{"sourceInterval":[81,98]},["app",{"sourceInterval":[81,87]},"AddExp",[]],["terminal",{"sourceInterval":[88,91]},"-"],["app",{"sourceInterval":[92,98]},"PriExp",[]]]],"AddExp":["define",{"sourceInterval":[35,121]},null,[],["alt",{"sourceInterval":[48,121]},["app",{"sourceInterval":[48,65]},"AddExp_plus",[]],["app",{"sourceInterval":[81,98]},"AddExp_minus",[]],["app",{"sourceInterval":[115,121]},"PriExp",[]]]],"PriExp_paren":["define",{"sourceInterval":[138,159]},null,[],["seq",{"sourceInterval":[138,149]},["terminal",{"sourceInterval":[138,141]},"("],["app",{"sourceInterval":[142,145]},"Exp",[]],["terminal",{"sourceInterval":[146,149]},")"]]],"PriExp":["define",{"sourceInterval":[125,172]},null,[],["alt",{"sourceInterval":[138,172]},["app",{"sourceInterval":[138,149]},"PriExp_paren",[]],["app",{"sourceInterval":[166,172]},"number",[]]]],"number":["define",{"sourceInterval":[176,195]},null,[],["plus",{"sourceInterval":[189,195]},["app",{"sourceInterval":[189,194]},"digit",[]]]]}]);'

## arithmetic grammar with types

> Snapshot 1

    `// AUTOGENERATED FILE␊
    // This file was generated from arithmetic.ohm by \`ohm generateBundles\`.␊
    ␊
    import {␊
      ActionDict,␊
      Grammar,␊
      IterationNode,␊
      Node,␊
      NonterminalNode,␊
      Semantics,␊
      TerminalNode␊
    } from 'ohm-js';␊
    ␊
    export interface ArithmeticActionDict<T> extends ActionDict<T> {␊
      Exp?: (this: NonterminalNode, arg0: NonterminalNode) => T;␊
      AddExp_plus?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;␊
      AddExp_minus?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;␊
      AddExp?: (this: NonterminalNode, arg0: NonterminalNode) => T;␊
      PriExp_paren?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;␊
      PriExp?: (this: NonterminalNode, arg0: NonterminalNode) => T;␊
      number?: (this: NonterminalNode, arg0: IterationNode) => T;␊
    }␊
    ␊
    export interface ArithmeticSemantics extends Semantics {␊
      addOperation<T>(name: string, actionDict: ArithmeticActionDict<T>): this;␊
      extendOperation<T>(name: string, actionDict: ArithmeticActionDict<T>): this;␊
      addAttribute<T>(name: string, actionDict: ArithmeticActionDict<T>): this;␊
      extendAttribute<T>(name: string, actionDict: ArithmeticActionDict<T>): this;␊
    }␊
    ␊
    export interface ArithmeticGrammar extends Grammar {␊
      createSemantics(): ArithmeticSemantics;␊
      extendSemantics(superSemantics: ArithmeticSemantics): ArithmeticSemantics;␊
    }␊
    ␊
    declare const grammar: ArithmeticGrammar;␊
    export default grammar;␊
    ␊
    `