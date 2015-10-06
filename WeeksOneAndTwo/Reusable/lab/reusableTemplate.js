var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return (val);
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			 
			 if (Array.isArray(list)) {
               for (var i = 0; i < list.length; i++)
                   iterator(list[i], i, list);
              } else if (list instanceof Object) {
               for (var key in list)
                   iterator(list[key], key, list);
           } else if (list === null) {
               return list;
			   }
			
		},

		filter : function(list, test) {
			var arr = [];
			for (var index = 0; index < list.length; index++) {
				if (test(list[index])) {
					arr.push(list[index]);
				}
			}
			return arr;
		},

		reject : function(list, test) {
			var arr = [];
			for (var index = 0; index < list.length; index++) {
				if (!test(list[index])) {
				arr.push(list[index]);	
				}
			}
			return arr;
		},

		map : function(list, iterator) {
			var arr = [];
			for (var i = 0; i < list.length; i++) {
				var bong = iterator(list[i]);
				arr.push(bong);
			}
			return arr;
		},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
			if (accumulator == undefined) {
				accumulator = list[0];
			}
			for (var index = 0; index < list.length; index++) {
				accumulator = iterator(accumulator, list[index]);
				}
				return accumulator;
		},

		every : function(list, iterator) {
			if (list.length == 0) {
				return true;
			}
			if (iterator == undefined) {
				iterator = this.identity;
			}
			for (var index = 0; index < list.length; index++) {
				if(!iterator(list[index])) {
				return false;
				}		
			}
			return true;
		},

		some : function(list, iterator) {
						if (list.length == 0) {
				return false;
			}
			if (iterator == undefined) {
				iterator = this.identity;
			}
			for (var index = 0; index < list.length; index++) {
				if(iterator(list[index])) {
					return true;
				}
			}
			return false;
		},

		contains : function(list, target) {
			if (list.constructor === Array) {
			for (var index = 0; index < list.length; index++) {
				if (list[index] == target){
					return true;
				}
			}
			} else {
				for (var index = 0; index < Object.keys(list).length; index++) {
				var key = Object.keys(list)[index];
				console.log(key);
				if (list[key] == target) {
					return true;
				}
				}
			}
			return false;
		},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {
			var shuffArr = [];
			if (array.length == 1){
				return array[0];
			}
			shuffArr[array.length-1] = array[0];
			for (var i = 0, len = array.length; i < len; i++){
				shuffArr[i-1] = array[i];
			}
			return shuffArr;
		},

		invoke : function(list, methodName, args) {
			var arr =[]; 
			var strng = typeof methodName == 'string';
			if (typeof methodName == 'function'){
				for (var i = 0; i < list.length; i++) {
					arr.push(methodName.call(list[i]));
				}
			}
			if (strng) {
				for(var i = 0; i < list.length; i++){
					arr.push(list[i][methodName]());
				}
			}
			return arr;
		},

		sortBy : function(list, iterator) {
			if (typeof iterator !== 'function') {
				iterator = function (item) { 
					return item[iterator]() 
					}

				return list.sort(function (a, b) {
					if (a.length > b.length) return 1;
					if (a.length < b.length) return -1;
					if (a.length = b.length) return 0;
				})
			}
			return list.sort() 
		},

		// Objects --- Complete Functions Below
		extend : function(obj) {
			this.each(Array.prototype.slice.call(arguments, 1), function(newObj) {
				for(var prop in newObj) {
					if(Object.prototype.hasOwnProperty.call(newObj, prop)) {
						obj[prop] = newObj[prop];
					}
				}
			})
			return obj;
		},

		defaults : function(obj) {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(args, function(property){
				for(var key in property){
            		if(!obj.hasOwnProperty(key)){
              		obj[key] = property[key];
            		}
         		 }
        	});
        return obj;

		},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			
			if (n > array.length){
				return array;
			} else {
				if (n === undefined){
					return array[array.length -1];
				} else {
					return array.slice(array.length -n);
				}
			}
		},

		indexOf : function(array, target){
		for(var i = 0, len = array.length; i < len; i++) {
              if (array[i]===target) {
				  return i; 
			  }
		}
		return -1;
		},

		uniq : function(array) {
			var arr = [];
			for(var i = 0, len = array.length; i < len; i++){
				var y1 = library.indexOf(arr, array[i]);
				if(y1===-1) {
					arr.push(array[i]);
				}
			}
			return arr;
		},

		// Advanced Arrays --- Complete Functions Below
		 zip: function() {
      	var arrays = Array.prototype.slice.call(arguments);
      	var longest = this.sortBy(arrays, 'length')[arrays.length - 1].length;
      	var zipped = [];
      	for (var i = 0; i < longest; i++) {
      		var zipPart = [];
      		this.each(arrays, function(arr) {
      			if (i >= arr.length) zipPart.push(undefined);
      			else zipPart.push(arr[i]);
      		});
      		zipped.push(zipPart);
      	}

      	return zipped;
      },

		flatten : function(nestedArray, result) {
			var self = this;
      		result = result || [];
      		this.each(nestedArray, function(item) {
      			if (!Array.isArray(item)) result.push(item);
      			else self.flatten(item, result);
      		});
      		return result;
		},

		intersection : function() {
			var over = [], args = Array.prototype.slice.call(arguments, 1);
        	var self = this;

      		self.each(arguments[0], function(i) {
      			var cross = true;
      			self.each(args, function(j) {
      				if (self.indexOf(j, i) < 0) cross = false;
      			});
      			if (cross) over.push(i);
      		});
      		return over;
		},

		difference : function(array) {
			var arrays = Array.prototype.slice.call(arguments, 1);
      		var unique = [];
        	var self = this;

      		self.each(array, function(i) {
      			var selfish = true;
      		self.each(arrays, function(j) {
      			if (self.indexOf(j, i) >= 0) selfish = false;
      			});
      			if (selfish) unique.push(i);
      		});
      		return unique;
		},

		// Functions --- Complete Functions Below
		once : function(func) {
			var hasBeenCalled = false;
			return function(){
				if(hasBeenCalled === false) {
					hasBeenCalled = true;
					func();
				}
			}
		},

		memoize : function(func) {
			var storage = {};
      		return function() {
      			if (!storage[arguments[0]]) {
      				storage[arguments[0]] = func.apply(this, arguments);
      			}
      			return storage[arguments[0]];
      		};
		},

		delay : function(func, wait) {
			var args = Array.prototype.slice.call(arguments, 2);
        	setTimeout(function(){
          	func.apply(this, args);
       		 }, wait);
	}
	}
})();



