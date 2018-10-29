#target Illustrator

//  script.name = center-in-artboard.js;  
//  script.description = Loop into each Artboard and center its content;  
//  script.requirement = one document with at least one artboard;  
//  script.parent = pixeden;  
//  script.elegant = false; 

if (app.documents.length > 0) {
  var doc = app.activeDocument
  app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM
  centerInArtboard()
} else {
  alert ("There is no open document.")
}

function centerInArtboard () {
  // Loop into each Artboard
  for (var i = 0; i < doc.artboards.length; i++) {
    selectArtboardByIndex(i)
    // Group content to center as is
    var newGroupItem = doc.groupItems.add()
    for (var s = 0; s < doc.selection.length; s++) {
      doc.selection[s].move(newGroupItem, ElementPlacement.PLACEATEND)
    }
    centerSelected(newGroupItem, doc.artboards[i].artboardRect)
  }
}

function centerSelected (obj, artboardBound) {
  obj.position = new Array(
    (artboardBound[2] - artboardBound[0]) / 2 - obj.width / 2, 
    (artboardBound[3] - artboardBound[1]) / 2  + obj.height /2
  )
}

function selectArtboardByIndex (index) {
  doc.selection = null
  doc.artboards.setActiveArtboardIndex(index)
  doc.selectObjectsOnActiveArtboard()
}
