#target Illustrator

//  script.name = is-unified.js;  
//  script.description = Checks if each Artboard has paths with strictly the same style;  
//  script.requirement = one document with at least one artboard;  
//  script.parent = pixeden;  
//  script.elegant = false; 


if (app.documents.length > 0) {
  var doc = app.activeDocument
  checkUnifiedStyle()
} else {
  alert ("There is no open document.")
}

function checkUnifiedStyle() {
  var pathCount = doc.pathItems.length
  var compPathCount = doc.compoundPathItems.length
  
  for (i = 0; i < doc.artboards.length; i++) {
    selectArtboardByIndex(i)
    var styles = new Array()
    
    // Simple Paths Loop
    if (pathCount > 0) {
      for (var y = 0; y < pathCount; y++) {
        if (doc.pathItems[y].selected) {
          styles = styles.concat(getStyle(doc.pathItems[y]))
        }
      }
    }    
    
    if (styles.length > 1) {
      if (!hasSameValues(styles)) {
        return alert('The Artboard: "' + doc.artboards[i].name + '" have mixed styles.')
      }
    }
    
  }
  
  return alert('Everithing ok!')
}

function hasSameValues (arr) {
  var acc = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== acc) {
      return false
    }
  }
  return true
}

function isStroked (path) { return path.stroked && !path.filled }
function isFilled (path) { return path.filled && !path.stroked && path.opacity === 100 }
function getStyle (path) {
  if (isStroked(path)) {
    return 'stroked'
  } else if (isFilled(path)) {
    return 'filled'
  } else {
    return 'mixed'
  }
}

function selectArtboardByIndex (index) {
  doc.selection = null
  doc.artboards.setActiveArtboardIndex(index)
  doc.selectObjectsOnActiveArtboard()
}
