# stencila-image-vega



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default     |
| --------- | --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `options` | --        | A JavaScript object containing options for embedding | `undefined \| { [x: string]: unknown; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `{}`        |
| `spec`    | `spec`    | The Vega or Vega-Lite spec                           | `GenericConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| GenericFacetSpec<UnitSpecWithFrame<Field>, LayerSpec<Field>, Field> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } & DataMixins \| GenericHConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| GenericUnitSpec<FacetedCompositeEncoding<Field>, AnyMark> & ResolveMixins & GenericCompositionLayout & FrameMixins<ExprRef \| SignalRef> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } & DataMixins \| GenericVConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| LayerRepeatSpec & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| LayerSpec<Field> & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| NonLayerRepeatSpec & TopLevelProperties<ExprRef \| SignalRef> & { $schema?: string \| undefined; config?: Config<ExprRef \| SignalRef> \| undefined; datasets?: Datasets \| undefined; usermeta?: Dict<unknown> \| undefined; } \| Spec \| string \| undefined` | `undefined` |


## Events

| Event        | Description                                                                          | Type                                     |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| `vegaLoaded` | Custom event emitter to indicate that the loading of the Vega JS script has finished | `CustomEvent<{ library: VegaLibType; }>` |


## Dependencies

### Used by

 - [stencila-node-list](../../nodeList)

### Graph
```mermaid
graph TD;
  stencila-node-list --> stencila-image-vega
  style stencila-image-vega fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*