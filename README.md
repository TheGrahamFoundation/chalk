# Chalk

**Structured Mathematical Visual Language · v0.0.1**

Chalk is an open experiment for describing mathematical visuals as structured data. Instead of asking an AI to generate an image, Chalk lets a machine describe the mathematical intent of a diagram and delegates rendering to a deterministic graphics engine.

> Explain it. Specify it. Render it. Inspect it.

Chalk originated as the visualization layer for Sophia and is now stewarded as an independent research project by **The Graham Foundation**.

## Why

A tutoring system can explain a circle, angle or function in prose, but mathematical teaching becomes more useful when the explanation can become an editable, inspectable object. Pixel generation is difficult to verify. A structured specification can be validated, rendered again, modified, tested and transported between implementations.

## v0.0.1 architecture

```text
Machine / Author
      |
      v
  Chalk Spec (JSON)
      |
      v
 Validator / Adapter
      |
      v
 Rendering Engine
      |
      v
 Interactive Mathematical Canvas
```

The reference adapter currently targets JSXGraph. Chalk defines the specification and adapter boundary; it does not require a particular renderer forever.

## Core document

```json
{
  "version": "0.0.1",
  "viewport": [-2, 2, 2, -2],
  "showAxis": true,
  "elements": []
}
```

### Element vocabulary

| Type | Intent |
| --- | --- |
| `point` | Coordinate with optional label |
| `segment` | Finite line between two points |
| `line` | Infinite line through two points |
| `circle` | Circle from center and radius |
| `polygon` | Closed polygon from vertices |
| `angle` | Angle marker at a vertex |
| `functiongraph` | Mathematical function plot |
| `text` | Positioned annotation |
| `arc` | Circular arc |

## Example

```json
{
  "version": "0.0.1",
  "viewport": [-2, 2, 2, -2],
  "showAxis": true,
  "elements": [
    {"type":"circle","center":[0,0],"radius":1},
    {"type":"point","coords":[0.866,0.5],"label":"P(30°)"},
    {"type":"segment","from":[0,0],"to":[0.866,0.5],"label":"r=1"},
    {"type":"angle","vertex":[0,0],"from":[1,0],"to":[0.866,0.5],"label":"30°"}
  ]
}
```

## v0.0.1 contract

A Chalk document should be deterministic at the semantic layer: the same valid specification describes the same mathematical objects even when two conforming renderers differ visually. Unknown element types must fail explicitly rather than silently changing the diagram. Coordinates and numeric parameters remain data, not executable code.

## Roadmap

- JSON Schema and validation
- Reference fixtures and conformance tests
- Renderer-independent semantic model
- Accessibility descriptions
- Animation and step-by-step derivations
- Additional 2D mathematical primitives
- Export to SVG and static formats

## Status

**Experimental · v0.0.1.** The format is not yet stable and may change before v1.0.0.

## License

MIT. Third-party rendering engines retain their own licenses.
