// If life was easy, we could just do things the easy way:
// var getElementsByclass_name = function (class_name) {
//   return document.getElementsByclass_name(class_name);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(class_name) {
	var res = [];
	if (document.body.classList) {
		if (document.body.classList.contains(class_name)) {
			res.push(document.body);
		}
	}
	var add = checkChildrenForClass(document.body, class_name);
	add.forEach(function(tba){
		res.push(tba);
	})
	return res;
};

var checkChildrenForClass = function(parent, class_name){
	var res = [];
	if (parent.hasChildNodes()) {
		var children = parent.childNodes;
		children.forEach(function(child){
			if (child.classList) {
				if (child.classList.contains(class_name)) {
					res.push(child);
				}
			}
			if (child.hasChildNodes()) {
				var add = checkChildrenForClass(child, class_name);
				add.forEach(function(tba){
					res.push(tba);
				})
			}
		})
	}
	return res;
}

var checkClass = function(element, class_name) {
	if (element.classList) {
		if (element.classList.contains(class_name)) {
			return element;
		}
	}
}