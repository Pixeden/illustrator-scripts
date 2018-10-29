<p align="center">
  <img alt="illustrator-scripts" title="illustrator-scripts" src="icon.svg" width="150"> 
</p>

<h3 align="center">
  <code>illustrator-scriptsObject</code>
</h3>

> _Adobe Illustrator_ `js` scripts that could help to improve productivity
> and avoid possible human errors when working with SVG Icons.

<br/>

<details>
  <summary><b>Name Basic Layers</b></summary>
  <h4>Loop into each <i>Artboard</i> and set a name on each <code>path</code> with color.</h4>

Sets a progressive _Layer_ name (default _layerX_ where `x` is a progressive number) depending on the `fillColor` or `strokeColor` (if it is a stroked or filled `path`). In case an element in the same _Artboard_ has the same _color_, the same _Layer_ name will be stored in memory.

**important note**: this `script` is intended to **be used only when** there is an _unified_ style in the _Artboard_, that is: **all paths are stroke or all paths are filled, not mixed**. Use [is-unified script](is-unified.js) to check if all _Artboards_ respect this rule.

[name-basic-layers.js](name-basic-layers.js)

</details>

<br/>

<details>
  <summary><b>Name Mixed Layers</b></summary>
  <h4>Loop into each <i>Artboard</i> and set a name on each <code>path</code> that has <code>stroke</code>, <code>transparency</code> and <code>color</code>.

Works similarly as `name-basic-layers.js` but with more features for situations where there are _combined styles_ in each _Artboard_.</h4>

Sets a name for each _layer_ that is `stroked` (default name: `stroke`), another name for each _layer_ or _group_ with `transparency` less than `100%`, and the progressive names for each `filled` layer.

Note that the result in each _Artboard_ will respect this rules:

- each `stroked path` will be named as **stroke** (default)
- each `filled path` or `group` with `transparency` will be named as **opacity** (default) <sup>\*</sup>
- each `filled path` without `transparency` will be named progressively like **layer1** and so on (default) and assign the same name for the same color _layer_ <sup>\*</sup>

<sup>\*</sup> <small>`filled paths` inside a `group` with `transparency` won't receive any name </small>

**important note**: this `script` may not work in some situations and is only intended to solve specific needs as described above.

[name-color-layers.js](name-color-layers.js)

</details>

<br/>

<details>
  <summary><b>Ungroup</b></summary>

Due to an _Illustrator_ bug when exporting named _layers_ in nested `groups`, which in some cases do not receive its related property, this `script` ungroups everything but the `transparency` group (which are normally named before).

[ungroup.js](ungroup.js)

</details>

<br />

<details>
  <summary><b>Unify Color</b></summary>

Once all desired _layers_ are named, it is sometimes useful to set all `paths` in one given _color_. As in the other `scripts`, this will set the `strokeColor` or `fillColor` depending on the `path`.

[unifyColor.js](unifyColor.js)

</details>

<br />

<details>
  <summary><b>Is Unified Style</b></summary>

Checks if each _Artboard_ has `paths` with strictly the same style (`filled` or `stroked`). The `script` breaks as soon as it finds a _mixed Artboard_ and tell which one it is (it also remains selected, making it easy to fix).

[is-unified.js](is-unified.js)

</details>

<br />

<details>
  <summary><b>Rename Artboards</b></summary>

Loop into each _Artboard_ and rename it with a `String` provided plus the _Artboard_ number as a suffix.

[rename-artborard.js](rename-artborard.js)

</details>

<br />

<details>
  <summary><b>Center in Artboard</b></summary>

Loop into each _Artboard_ and center its content. To guarantee the relative positions of its `paths`, the `script` group the content before centering it.

[center-in-artboard.js](center-in-artboard.js)

</details>

<br />

<details>
  <summary><b>Export PNG</b></summary>

Loop into each _Artboard_ and exports as a `.png` file in _1x_, _2x_ and _3x_ resolution, organized in different folders. Filename will be the `String` provided followed by the _Artboard_ name.

[export-png.js](export-png.js)

</details>

---

These `scripts` helps authoring _Icons_ and apply rules needed to work in the [Orion Icon Library App](https://orioniconlibrary.com/app)
