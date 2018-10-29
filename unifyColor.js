#target Illustrator

//  script.name = unifyColor.js;  
//  script.description = Loop each path and set one given colorr;  
//  script.requirement = one document with at least one artboard;  
//  script.parent = pixeden;  
//  script.elegant = false; 

if (app.documents.length > 0) {
  var doc = app.activeDocument
  setColor()
} else {
  alert ("There is no open document.")
}

function setColor () {
  var hexIn = Window.prompt ("Enter the new HEX Color", '#202020')
  var rgbOut = hexToRGB(hexIn)
  if (rgbOut) {
    var pathCount = doc.pathItems.length
    var newCMYKColor = new RGBColor()
    newCMYKColor.red = rgbOut.r
    newCMYKColor.green = rgbOut.g
    newCMYKColor.blue = rgbOut.b
    
    if (pathCount > 0) {
      for (var y = 0; y < pathCount; y++) {
        if (isStroked(doc.pathItems[y])) {
          doc.pathItems[y].strokeColor = newCMYKColor
        }
        if (isFilled(doc.pathItems[y])) {
          doc.pathItems[y].fillColor = newCMYKColor
        }
      }
    }
  } else {
    alert('Invalid HEX Color')
  }
}

// from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb?answertab=active#tab-top
function hexToRGB (hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null
}

function isStroked (path) { return path.stroked && !path.filled }
function isFilled (path) { return path.filled && !path.stroked && path.opacity === 100 }
