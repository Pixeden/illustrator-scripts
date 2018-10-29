#target Illustrator

//  script.name = export-png.js;
//  script.description = Loop into each Artboard and exports as a .png file in 1x, 2x and 3x resolution;
//  script.requirement = one document with at least one artboard;
//  script.parent = pixeden;
//  script.elegant = false;

if (app.documents.length > 0) {
  var doc = app.activeDocument
  exportPNG()
} else {
  alert('There is no open document.')
}

function exportPNG() {
  var packName = Window.prompt ("Enter the Prefix String", 'Base Name')
  
  if (packName.replace(/\s/g, '').length) {
    var exportOptions = new ExportOptionsPNG24()
    exportOptions.artBoardClipping = true
    exportOptions.antiAliasing = false
    exportOptions.transparency = false
    
    var type = ExportType.PNG24
    var basePath = Folder.selectDialog ('Choose base Folder where export.')
    
    var folder1x = new Folder(basePath + '/1x')
    var folder2x = new Folder(basePath + '/2x')
    var folder3x = new Folder(basePath + '/3x')
    if(!folder1x.exists) folder1x.create();
    if(!folder2x.exists) folder2x.create();
    if(!folder3x.exists) folder3x.create();
    
    for (i = 0; i < doc.artboards.length; i++) {
      var starting_artboard = doc.artboards.setActiveArtboardIndex(i);
      var artboardName = doc.artboards[i].name
      var destFile;
      
      exportOptions.horizontalScale = exportOptions.verticalScale = 100
      var destFile = new File(folder1x + '/' + packName + '_' + artboardName +  '.png' );  
      doc.exportFile(destFile, type, exportOptions)
      
      exportOptions.horizontalScale = exportOptions.verticalScale = 200
      var destFile = new File(folder2x + '/' + packName + '_' + artboardName +  '.png' );  
      doc.exportFile(destFile, type, exportOptions)
      
      exportOptions.horizontalScale = exportOptions.verticalScale = 300
      var destFile = new File(folder3x + '/' + packName + '_' + artboardName +  '.png' );  
      doc.exportFile(destFile, type, exportOptions)
    }
  } else {
    alert('Please insert a value')
    exportPNG()
  }
  
}
