# Chalk — The Drawing Library for Sophia

**David Labs Internal IP**

Chalk is Sophia's mathematical visualization engine. It powers interactive geometry, function plotting, trigonometry, and coordinate-plane diagrams on the Sophia Canvas.

## Architecture

```
Gemini → outputs Chalk Spec (JSON) → Chalk Renderer → JSXGraph (engine)
```

- **Chalk Spec**: A structured JSON schema that the AI generates. Defines viewports, geometric elements (points, segments, circles, polygons, arcs), function graphs, angles, and labels.
- **Chalk Renderer**: A React component that parses the spec and delegates rendering to JSXGraph.
- **JSXGraph**: The open-source math visualization engine (MIT/LGPL dual-licensed) that performs the actual SVG/Canvas rendering.

Chalk owns the **spec** and the **adapter**. JSXGraph owns the **rendering engine**.

## Chalk Spec Elements

| Element | Description |
|---------|-------------|
| `point` | A labeled point at coordinates |
| `segment` | A line segment between two points |
| `line` | An infinite line through two points |
| `circle` | A circle with center and radius |
| `polygon` | A closed polygon from vertices |
| `angle` | An angle marker at a vertex |
| `functiongraph` | A plotted function (e.g. `Math.sin(x)`) |
| `text` | A text label at coordinates |
| `arc` | A circular arc with start/end angles |

## Example Spec

```json
{
  "viewport": [-2, 2, 2, -2],
  "showAxis": true,
  "elements": [
    { "type": "circle", "center": [0, 0], "radius": 1, "color": "#7c3aed" },
    { "type": "point", "coords": [0.866, 0.5], "label": "P(30°)", "color": "#22c55e" },
    { "type": "segment", "from": [0, 0], "to": [0.866, 0.5], "color": "#3b82f6", "label": "r=1" },
    { "type": "segment", "from": [0.866, 0], "to": [0.866, 0.5], "dash": true, "color": "#ef4444", "label": "sin 30°" },
    { "type": "segment", "from": [0, 0], "to": [0.866, 0], "dash": true, "color": "#f59e0b", "label": "cos 30°" },
    { "type": "angle", "vertex": [0, 0], "from": [1, 0], "to": [0.866, 0.5], "label": "30°", "color": "#a855f7" }
  ]
}
```

## License

UNLICENSED — David Labs proprietary. Internal use only.

JSXGraph is used under the MIT License.
