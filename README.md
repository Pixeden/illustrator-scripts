# illustrator-scripts

> _Adobe Illustrator_ `js` scripts that could help to improve productivity
> and avoid possible human errors when working with _Icons_.

<br/>

<details>
  <summary><b>Name Basic Layers</b></summary>
  <h4>Loop into each <i>Artboard</i> and set a name on each <code>path</code> with color.</h4>
  
  Sets a progressive _Layer_ name (default _layerX_ where `x` is a progressive number) depending on the `fillColor` or `strokeColor` (if it is a stroked or filled `path`). In case an element in the same _Artboard_ has the same _color_ will be the same _Layer_ name stored in memory.

**important note**: this `script` is intended to **use only when** there is an _unified_ style in the _Artboard_, that is: **all paths are stroked or all paths are filled, not mixed**. Use [is-unified script](is-unified.js) to check if all _Artboards_ respect this rule.

[name-basic-layers.js](name-basic-layers.js)

</details>

<br/>

<details>
  <summary><b>Name Mixed Layers</b></summary>
  <h4>Loop into each <i>Artboard</i> and set a name on each <code>path</code> that has <code>stroke</code>, <code>transparency</code> and <code>color</code>.</h4>
  
  Works similarly as `name-basic-layers.js` but with more features for situations where there are _combined styles_ in each _Artboard_.

Sets a name for each _layer_ that is `stroked` (default name: `stroke`), another name for each _layer_ or _group_ with `transparency` less than `100%`, and the progressive names for each `filled` layer.

Note that the result in each _Artboard_ will respect this rules:

- each `stroked path` will be named as **stroke** (default)
- each `filled path` or `group` with `transparency` will be named as **opacity** (default) <sup>\*</sup>
- each `filled path` without `transparency` will be named progressively like **layer1** and so on (default) and assign the same name for the same color _layer_ <sup>\*</sup>

<sup>\*</sup> <small>`filled paths` inside a `group` with `transparency` won't receive any name </small>

**important note**: this `script` could not work in some situations, is intended to solve specific needs described above.

[name-color-layers.js](name-color-layers.js)

</details>

<br/>

<details>
  <summary><b>Ungroup</b></summary>

Due to an _Illustrator_ bug when exporting named _layers_ in nested `groups` and in some cases don't receive its property related, this `script` ungroups everything but the ones with `transparency` (probably named before).

[ungroup.js](ungroup.js)

</details>

<br />

<details>
  <summary><b>Unify Color</b></summary>

Once all desired _layers_ were named, sometimes is useful to set all `paths` with one given _color_. As in the other `scripts`, will set the `strokeColor` or `fillColor` depending on the `path`.

[unifyColor.js](unifyColor.js)

</details>

<br />

<details>
  <summary><b>Is Unified Style</b></summary>

Checks if each _Artboard_ has `paths` with strictly the same style (`filled` or `stroked`). The `script` breaks as soon as find a _midex Artboard_ and advice which one is (also remains selected, making easy to fix).

[is-unified.js](is-unified.js)

</details>

<br />

<details>
  <summary><b>Rename Artboards</b></summary>

Loop into each _Artboard_ and rename with a `String` provided plus the _Artboard_ number as a suffix.

[rename-artborard.js](rename-artborard.js)

</details>

<br />

<details>
  <summary><b>Center in Artboard</b></summary>

Loop into each _Artboard_ and center its content. To guarantee the relative positions of its `paths`, the `script` group the content before center it. Could be [ungroup](ungroup.js) in future.

[center-in-artboard.js](center-in-artboard.js)

</details>

<br />

<details>
  <summary><b>Export PNG</b></summary>

Loop into each _Artboard_ and exports as `.png` file in _1x_, _2x_ and _3x_ resolution, organized in different folders. Filename will be the `String` provided followed by the _Artboard_ name.

[export-png.js](export-png.js)

</details>

---

These `scripts` helps authoring _Icons_ and apply rules needed to work in [Orion Icon Library App](https://orioniconlibrary.com/app)
