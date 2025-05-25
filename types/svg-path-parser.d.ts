// types/svg-path-parser.d.ts
declare module 'svg-path-parser' {
  export type SvgCommand = {
    code: string;
    command: string;
    relative: boolean;
    x?: number;
    y?: number;
    x0?: number;
    y0?: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
  };

  function parse(path: string): SvgCommand[];
  export default parse;
}
