// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var res = '';
  if (typeof obj === 'number') {
		res += obj;
  } else if (obj === null) {
  	res += null;
  } else if (obj === true) {
  	res += true;
  } else if (obj === false) {
  	res += false;
  } else if (typeof obj === 'string') {
  	res = '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	res += '[';
  	for (var i = 0; i < obj.length; i++) {
  		var element = stringifyJSON(obj[i]);
  		if (i === 0) {
  			res += element;
  		} else {
  			res += ',' + element;
  		}
  	}
  	res += ']';
  } else if (typeof obj === 'object' && obj.constructor === Object) {
  	res += '{';
  	var keys = Object.keys(obj);
  	for (var j = 0; j < keys.length; j++) {
  		var key = keys[j];
  		var val = obj[key];
  		if ((typeof val === 'function') || (val === undefined)) {
  			continue;
  		} else if (j === 0) {
  			res += stringifyJSON(key) + ':' + stringifyJSON(val);
  		} else {
  			res += ',' + stringifyJSON(key) + ':' + stringifyJSON(val);
  		}
  	}
  	res += '}';
  }
  return res;
};
