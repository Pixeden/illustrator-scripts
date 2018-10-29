#target Illustrator

//  script.name = ungroup.js;  
//  script.description = ungroups everything but the transparency group;
//  script.requirement = one document with at least one artboard;  
//  script.parent = pixeden;  
//  script.elegant = false; 

if (app.documents.length > 0) {
  var doc = app.activeDocument
	ungroupAll(doc)
} else {
  alert ("There is no open document.")
}

function ungroupAll (doc) {
  if (doc.groupItems.length) {
    for (var i=0; i < doc.layers.length; i++) {
      ungroup(doc.layers[i])
    }
  }
}

function getChilds (obj) {
	var arr = new Array()
	for (var i=0; i < obj.pageItems.length; i++) {
    arr.push(obj.pageItems[i])
  }
	return arr
}

function ungroup (obj) {
	var elems = getChilds(obj)
	if (elems.length < 1) {
		obj.remove()
		return
	} else {
		for (var i=0; i < elems.length; i++) {
			try {
				if (elems[i].parent.typename !== "Layer")
          elems[i].moveBefore(obj)
				if(elems[i].typename === "GroupItem" && elems[i].opacity === 100)
          ungroup(elems[i])
			} catch(e) {
        alert("Something went wrong...")
      }
		}
	}
}
