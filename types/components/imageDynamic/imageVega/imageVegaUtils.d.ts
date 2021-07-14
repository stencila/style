import { Node } from '@stencila/schema';
import { EmbedOptions, VisualizationSpec } from 'vega-embed';
export declare const vegaMediaType = "application/vnd.vega+json";
export declare const isVegaMediaType: (mimeType: string) => boolean;
export declare type VegaLibType = 'vega' | 'vega-lite';
export declare type VegaLoadEvent = {
  library: VegaLibType;
};
export declare type VegaDependency = {
  library: VegaLibType;
  version: string;
};
/**
 * Given a string, attempts to find the Vega library (`vega` vs `vega-lite`)
 * and the version being used.
 * Falls back to `vega` and `latest`.
 */
export declare const getVegaVersion: (input?: string) => VegaDependency;
export declare const getVegaLibSrc: ({ library, version }: VegaDependency) => string;
export interface VegaObject {
  spec: VisualizationSpec | string;
  options?: Partial<EmbedOptions>;
}
export interface VegaNode extends VegaObject {
  mediaType: string;
}
export declare const isVegaObject: (node: Node) => node is VegaNode;
