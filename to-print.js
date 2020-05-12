#target Illustrator

//  script.name = to-print.js;
//  script.description = Change path colors into CMYK to all files in folder and save them into .ai
//  script.requirement = one document with at least one artboard;
//  script.parent = pixeden;
//  script.elegant = false;

var C = 100;
var M = 70;
var Y = 0;
var K = 45;

var destFolder,
  sourceFolder,
  files,
  sourceDoc,
  targetFile,
  IllustratorSaveOptions;

// Select the source folder.
sourceFolder = Folder.selectDialog(
  "Select the folder with Illustrator files you want to convert to AI",
  "/Users/lio/Projects/Pixeden/orion-icon-library/get/downloads"
);

// If a valid folder is selected
if (sourceFolder != null) {
  files = new Array();

  files = sourceFolder.getFiles("*.svg");

  if (files.length > 0) {
    for (i = 0; i < files.length; i++) {
      sourceDoc = app.open(files[i]); // returns the document object

      setColor();

      targetFile = getNewName();

      sourceDoc.saveAs(targetFile, IllustratorSaveOptions);
      sourceDoc.close();
    }
  } else {
    alert("No matching files found");
  }
}

function getNewName() {
  var ext, docName, newName, saveInFile, docName;
  docName = sourceDoc.name;
  ext = ".ai";
  newName = "";

  for (var i = 0; docName[i] != "."; i++) {
    newName += docName[i];
  }
  newName += ext;

  saveInFile = new File(sourceFolder + "/" + newName);

  return saveInFile;
}

// from unifyColor.js
function setColor() {
  app.executeMenuCommand("doc-color-cmyk");
  var doc = app.activeDocument;
  var pathCount = doc.pathItems.length;

  var newCMYKColor = new CMYKColor();
  newCMYKColor.cyan = C;
  newCMYKColor.magenta = M;
  newCMYKColor.yellow = Y;
  newCMYKColor.black = K;

  if (pathCount > 0) {
    for (var y = 0; y < pathCount; y++) {
      if (isStroked(doc.pathItems[y])) {
        doc.pathItems[y].strokeColor = newCMYKColor;
      }
      if (isFilled(doc.pathItems[y])) {
        doc.pathItems[y].fillColor = newCMYKColor;
      }
    }
  }
}

function isStroked(path) {
  return path.stroked && !path.filled;
}
function isFilled(path) {
  return path.filled && !path.stroked && path.opacity === 100;
}
