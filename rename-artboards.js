#target Illustrator

//  script.name = renameArtboards.js;  
//  script.description = Loop each Artboard and set name based on String provided;  
//  script.requirement = one document with at least one artboard;  
//  script.parent = elrumordelaluz;  
//  script.elegant = false; 

if (app.documents.length > 0) {
  var doc = app.activeDocument
  rename()
} else {
  alert ("There is no open document.")
}

function rename () {
  var name = Window.prompt ("Enter the Name String", 'Pack')
  if (name.replace(/\s/g, '').length) {
    for (i = 0; i < doc.artboards.length; i++) {
      doc.artboards[i].name = name + '-' + (i+1)
    }
  } else {
    alert('Please insert a value')
    rename()
  }
}
